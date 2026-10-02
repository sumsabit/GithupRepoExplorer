
type SearchBarProps={
    userName : string,
    setUserName: React.Dispatch<React.SetStateAction<string>>;
      onSearch: () => void;
}
function SearchBar({userName, setUserName, onSearch}: SearchBarProps){
   
return(
    <div className="flex  w-full max-w-xl items-center gap-3 rounded-xl border border-gray-300 bg-white px-4 py-3 shadow-sm transition focus-within:border-gray-500 focus-within:ring-2 focus-within:ring-gray-200">
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" 
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
     strokeLinecap="round" strokeLinejoin="round"
      className="lucide lucide-search preview-icon">
    <path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>

    <input type="text" placeholder="Search username..." 
    value={userName} 
    onChange={(e)=>setUserName(e.target.value) }
         onKeyDown={(e) => {
    if (e.key === "Enter") {
      onSearch();
    }}

    }
    className="w-full bg-transparent text-gray-800 outline-none placeholder:text-gray-400"
      />
   

    </div>
)
}
export default SearchBar