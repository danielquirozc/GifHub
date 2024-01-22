import GifItem from "./GifItem.jsx"

function GifContainer({listOfGifs}) {

  const listOfElements = listOfGifs?.map((gif) => (
    <GifItem key={gif.id} title={gif.title} img={gif.images.original.url} />
  ))

  return (
    <div className="[columns:5_320px] gap-2 m-2" id="gifs-container">
    {
      listOfElements && listOfElements
    }
  </div>
  )
}

export default GifContainer;