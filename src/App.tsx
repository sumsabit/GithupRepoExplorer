
import { useState } from 'react'
import SearchBar from './component/SearchBar'
import RepoList from './component/RepoList'
type Repo = {
  id: number
  name: string
  html_url: string
  stargazers_count: number
  updated_at: string
}
function App() {
  const [userName, setUserName] = useState("")
  const [repo, setRepo]=useState< Repo[]>([])
  const [sortBy, setSortBy]= useState("stars")
const fetchRepos = async () => {
 if(!userName) return
   const response = await fetch(
    `https://api.github.com/users/${userName}/repos`
  );
  const data = await response.json();
  setRepo(data)
}
const sortRepos = [...repo].sort((a, b) => {
  if (sortBy === "stars") {
    return b.stargazers_count - a.stargazers_count
  }

  if (sortBy === "name") {
    return a.name.localeCompare(b.name)
  }

  if (sortBy === "recent") {
    return (
      new Date(b.updated_at).getTime() -
      new Date(a.updated_at).getTime()
    )
  }

  return 0
})
 
  return ( 
    <>
       <div className="min-h-screen bg-gray-100 px-4 py-10">
    <div className="mx-auto max-w-6xl">

     
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          GitHub Repo Explorer
        </h1>

        <p className="mt-3 text-gray-600">
          Search GitHub users and explore their repositories
        </p>
      </div>
  <div className="mb-8 flex  gap-6 flex-row items-center justify-center">
  
  <SearchBar
    userName={userName}
    setUserName={setUserName}
    onSearch={fetchRepos}
  
  />

  <select
    value={sortBy}
    onChange={(e) => setSortBy(e.target.value)}
    className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-700 shadow-sm outline-none transition focus:border-gray-500 focus:ring-2 focus:ring-gray-200"
  >
    <option value="stars">Sort by Stars</option>
    <option value="recent">Sort by Recent</option>
    <option value="name">Sort by Name</option>
  </select>

</div>

<RepoList repos={sortRepos} />
      </div>
      </div>
      </>
  )
}

export default App
