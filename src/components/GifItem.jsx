

function GifItem({ title, img }) {
  return (
    <div className="font-inter w-full relative group">
      <img src={img} alt={title + " gif"} className="w-full group-hover:brightness-50 my-2 rounded-md duration-150:" />
      <div className="flex items-end min-h-[50px] rounded-b-md bg-gradient-to-t from-black via-black-800/50 to-transparent absolute bottom-0 w-full opacity-0 group-hover:opacity-100 duration-150">
        <h1 className="mb-2 mx-2 text-white">{title}</h1>
      </div>
    </div>
  )
  
}

export default GifItem;