import { useEffect, useState } from "react"
import { getTrendingGifs } from "./services/gifs.js"
import Hero from "./components/Hero.jsx"
import GifContainer from "./components/GifContainer.jsx"
import Search from "./components/Search.jsx"


function App() {
  
  const [gifs, setGifs] = useState([])
  const [search, setSearch] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const searchValue = formData.get("search");
    setSearch(searchValue)
  }

  useEffect(() => {
    if (search === "") {
      getTrendingGifs().then(data => setGifs(data))
    } else {
      getTrendingGifs(search).then(data => setGifs(data))
    }
  },[search])

  return (
    <>
    <Hero />
    <Search handleSubmit={handleSubmit} />
    <GifContainer listOfGifs={gifs}/>
    </>
  )
}

export default App
