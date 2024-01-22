
function Search({ handleSubmit }) {

  return (
    <section className="flex justify-center items-center w-full mb-20 md:mb-10 mt-10 font-inter" id="search">
      <form onSubmit={(e) => handleSubmit(e)} name="search" className="h-[50px] md:w-auto md:mx-0 w-full mx-10">
        <input name="search" type="text" className="bg-zinc-900 border-2 px-2 border-slate-800 rounded w-full md:w-[500px] h-full outline-none text-slate-100" placeholder="Search GIFs..." />
        <button className="bg-blue-500 md:w-auto mt-3 w-full outline-none duration-75 hover:bg-blue-700 text-white font-bold h-full md:mx-2 px-4 rounded">
          Search
        </button>
      </form>
    </section>
  )
}

export default Search;