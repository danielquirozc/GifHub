
function Hero() {

  const scrollTo = () => {
    window.scrollTo({
      top: document.getElementById('search').offsetTop - 50,
      behavior: 'smooth'
    });
  };

  return (
    <section className="flex flex-row items-center text-white text-2xl relative h-[100dvh] shadow-2xl">
      <div className="flex justify-center flex-col items-center h-full w-full absolute z-10 text-center ">
        <h1 className="text-8xl font-bungee text-orange-400">GIFHUB</h1>
        <h3 className="font-poppins font-bold text-orange-200/75">Find your favorite gifs</h3>
        <button onClick={scrollTo} className="outline-nome py-1 bg-orange-400 text-orange-800 mt-1 font-bold font-inter px-4 w-[250px] rounded">Get Started</button>
      </div>
      <video src="../public/heroVideo.mp4" autoPlay loop className="w-full h-full object-cover"></video>
    </section>
  )
}

export default Hero;