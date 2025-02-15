// TODO: Create an interface for the Candidate objects returned by the API
export default interface Candidate {
    readonly login: string | null;              //Important
    readonly id: number | null;
    readonly node_id: string | null;
    readonly avatar_url: string | null;         //Important -- for image?
    readonly gravatar_id: string | null;
    readonly url: string | null;
    readonly html_url: string | null;
    readonly followers_url: string | null;
    readonly following_url: string | null;
    readonly gists_url: string | null;
    readonly starred_url: string | null;
    readonly subscriptions_url: string | null;
    readonly organizations_url: string | null;
    readonly repos_url: string | null;
    readonly events_url: string | null;
    readonly received_events_url: string | null;
    readonly type: string | null;
    readonly user_view_type: string | null; // second set
    readonly site_admin: boolean | null;
    readonly name?: string | null;               //Important
    readonly company?: string | null;            //Important
	readonly blog?: string | null;
	readonly location?: string | null;           //Important
	readonly email?: string | null;              //Important
	readonly hireable?: string | null;
	readonly bio?: string | null;                //Important
	readonly twitter_username?: string | null;
	readonly public_repos?: number | null;
	readonly public_gists?: number | null;
	readonly followers?: number | null;
	readonly following?: number | null;
	readonly created_at?: string | null;
	readonly updated_at?: string | null;
}


	