import { useEffect  } from 'react';
import { searchGithub } from '../api/API';
// import { searchGithubUser } from '../api/API';
// import { useState } from 'react';

//import the Candidate Interface
// import type Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {

  useEffect(() => {
    //Call the list of random Candidates and store in data
    //load once during page load
    const data: any = searchGithub();
    console.log(data);
  }, []);

  //return <h1>CandidateSearch</h1>;
  return (
    <>
      <section id='searchSection'>
        <form>
          <button type='button' id='IgnoreBtn'> - </button>
          <button type='button' id='AddBtn'> + </button>
        </form>
      </section>
    </>
  );
};

export default CandidateSearch;
