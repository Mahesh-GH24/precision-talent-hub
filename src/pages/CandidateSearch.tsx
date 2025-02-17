//imports
import { useEffect, useState } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
import CandidateInfo from '../components/CandidateInfo';


const CandidateSearch = () => {

  //State variable to add Saved Candidate
  const [candidate_saved, saveCandidate] = useState<Candidate | null>(null);
  const [loading, saveLoading] = useState<boolean>(true);
  const [error, saveError] = useState<string | null>(null);

  //First call to API to fetch a random Candidate via useEffect - once during load and then everytime when state variable changes
  useEffect(() => {
    getRandomCandidate();
  }, []);

  //getRandomCandidate
  const getRandomCandidate = async ()=> {
    //Set All good State
    saveLoading(true);
    saveError(null);
    
    try{
      //Get Random Candidates via API
      const candidates = await searchGithub();
      if (candidates.length > 0) {
        //pick the 1st candidate
        const firstCandidate = candidates[0];
        //Now fetch detailed info about the candidate
        const infoCandidate = await searchGithubUser(firstCandidate.login);
        if (infoCandidate) {
          saveCandidate(infoCandidate);
        } else {
          saveError("Error retrieving detailed information about the candidate");
        }
      } else {
        saveError("No more candidates are available");
        saveCandidate(null);
      }
    } catch (err) {
      saveError("Unknown error while fetching candidate data")
    } finally {
      saveLoading(false);
    }
  };

  //ignoreCandidate - Simply move on to next Candidate without Saving
  const ignoreCandidate =() => {
    getRandomCandidate();
  }

  //addCandidate - Save to local storage and move to next Candidate
  const addCandidate =() => {
    if (candidate_saved) {
      //Get All Saved Candidates from localstorage
      const savedCandidates = JSON.parse(localStorage.getItem("Saved_Candidates") || "[]");
      savedCandidates.push(candidate_saved);
      localStorage.setItem("Saved_Candidates", JSON.stringify(savedCandidates));
    }
    //Fetch the next Candidate and display
    getRandomCandidate();
  };

  return (
    <div>
      <h1>CandidateSearch</h1>
      {loading && <p> Still Loading...</p>}
      {error && <p className="error">{error}</p>}
      {candidate_saved && !loading && !error && (
        <CandidateInfo
          candidate={candidate_saved}
          onAdd = {addCandidate}    
          onIgnore={ignoreCandidate}    
        />  
      )}
      {!candidate_saved && !loading && !error && <p> No Candidates to Display</p>}
    </div>
  ); 
};

export default CandidateSearch;
