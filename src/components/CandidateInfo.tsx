import type Candidate from "../interfaces/Candidate.interface";
import { UserRoundX, UserRoundCheck } from "lucide-react";

type CandidateInfoProps = {
    candidate: Candidate;   //Candidate detailed info miciking Candidate Interface
    onAdd: (() => void);    //funtion when candidate added
    onIgnore: (() => void); //function when candidate ignored
}

/*
    readonly login: string | null;              //Important
    readonly avatar_url: string | null;         //Important -- for image?
    readonly name?: string | null;               //Important
    readonly company?: string | null;            //Important
	readonly location?: string | null;           //Important
	readonly email?: string | null;              //Important
	readonly bio?: string | null;  

*/

const CandidateInfo = ({ candidate, onAdd, onIgnore }: CandidateInfoProps) => {
    return (
        <>
            {candidate.login ? (
                 <section className="candidate-info">
                    <figure>
                        <img src={candidate.avatar_url} alt={candidate.name || candidate.login} className="img"/>
                    </figure>
                    <article>
                        <h2>{candidate.name} <em>({candidate.login})</em></h2>
                        <p><strong>Location:</strong> {candidate.location || "Unknown"}</p>
                        <p><strong>Email:</strong> {candidate.email || "Unknown"}</p>
                        <p><strong>Company:</strong> {candidate.company || "Unknown"}</p>
                        <p><strong>Bio:</strong> {candidate.bio || "Unknown"}</p>
                    </article>
                    <div className="div-button">
                        <button type='button' id='IgnoreBtn' onClick={() => onIgnore?.()}> < UserRoundX ></UserRoundX>  </button>
                        <button type='button' id='AddBtn' onClick={() => onAdd?.()} style={{margin: '0'}}> < UserRoundCheck ></UserRoundCheck>  </button>
                    </div>
                </section>
            ) : (
                <h2> No Information about the Candidate </h2>
            )}
        </>
    );
};

export default CandidateInfo;
