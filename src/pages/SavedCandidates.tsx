//Standard imports - hooks and interface
import { useState, useEffect } from "react";
import Candidate from "../interfaces/Candidate.interface";
import { UserRoundX } from "lucide-react";


const SavedCandidates = () => {

  //initialize State variable to empty array to hold Saved Candidates
  const [SavedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  //kicks off everytime the state variable changes and also during form load
  useEffect(() => {
    const localcandidates = JSON.parse(
      localStorage.getItem("Saved_Candidates") || "[]"
    );
    setSavedCandidates(localcandidates);
  }, []);

  const onIgnore = (login:string) => {
    const newCandidateList = SavedCandidates.filter(
      (candidate) => candidate.login != login
    );
    setSavedCandidates(newCandidateList);
    localStorage.setItem("Saved_Candidates", JSON.stringify(newCandidateList));
  }
  
  return (
    <div>
      <h1>Potential Candidates</h1>
      <table className="candidatetable-container">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Location</th>
              <th scope="col">Email</th>
              <th scope="col">Company</th>
              <th scope="col">Bio</th>
              <th scope="col">Reject</th>
            </tr>
          </thead>
          <tbody>
            {SavedCandidates.length > 0 ? (
              SavedCandidates.map((candidate) => (
                <tr key={candidate.login}>
                  <td>
                    <img src={candidate.avatar_url} className="img"/>
                  </td>
                  <td>
                    {candidate.name} <em> {candidate.login} </em>
                  </td>
                  <td>
                    {candidate.location}
                  </td>
                  <td>
                    {candidate.email} 
                  </td>
                  <td>
                    {candidate.company} 
                  </td>
                  <td>
                    {candidate.bio} 
                  </td>
                  <td>
                  <button type='button' id='IgnoreBtn' onClick={() => onIgnore(String(candidate.login))} style={{alignItems: 'left'}} > < UserRoundX ></UserRoundX>  </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan ={7} style={{textAlign: "center"}}>
                  No Candidates yet...
                </td>
              </tr>
            )}
          </tbody>
      </table>
    </div>
  );
};

export default SavedCandidates;
