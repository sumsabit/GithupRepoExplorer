type Repo = {
  id: number
  name: string
  html_url: string
  stargazers_count: number
  updated_at: string
}

type RepoCardProps = {
  repo: Repo
}
function RepoCard({repo}: RepoCardProps){
    return( 
         <div className="group rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">


      
       <div className="mb-5 flex justify-center">
        <div className="rounded-lg bg-gray-100 p-2">
          <svg
            className="h-6 w-6 text-gray-800"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.84c.85 0 1.71.12 2.52.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12C22 6.48 17.52 2 12 2Z" />
          </svg>
        </div>
      </div>
         <h2 className="mb-2 text-xl font-bold">
            {repo.name}
        </h2>
      <p className="text-gray-600">
        {repo.stargazers_count} stars</p>
      <p className="mt-2 text-sm text-gray-500">
        updated_at:{new Date(repo.updated_at).toLocaleDateString()}</p>
      <a href={repo.html_url}
      target="_blank"
       rel="noopener noreferrer"
        className="mt-4 inline-block rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-700">
        View on Github
      </a>
      </div>
    )

}
export default RepoCard