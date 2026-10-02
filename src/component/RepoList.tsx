import RepoCard from "./RepoCard";
type Repo = {
  id: number;
  name: string;
  html_url: string;
  stargazers_count: number;
  updated_at: string;
};
type RepoListProps={
    repos:Repo[]
}
function RepoList({repos}: RepoListProps){
return(
    
    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
        {repos.map((repo) => (
        <RepoCard
          key={repo.id}
          repo={repo}
        />
      ))}
   
    </div>
    
)
}
export default RepoList