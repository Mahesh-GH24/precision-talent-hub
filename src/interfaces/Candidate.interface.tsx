// TODO: Create an interface for the Candidate objects returned by the API
export default interface Candidate {
    readonly login: string | null;              //Important
    readonly avatar_url: string | null;         //Important -- for image?
    readonly name?: string | null;               //Important
    readonly company?: string | null;            //Important
	readonly location?: string | null;           //Important
	readonly email?: string | null;              //Important
	readonly bio?: string | null;                //Important
}

