const GIFS_ENDPOINT_TRENDING_GIFS = `https://api.giphy.com/v1/gifs/trending?api_key=${import.meta.env.VITE_API_KEY}&limit=25&offset=0&rating=g&bundle=messaging_non_clips`;

export const getTrendingGifs = async (search = "") => {
  if (!search) {
    const httpResponse = await fetch(GIFS_ENDPOINT_TRENDING_GIFS)
    const response = await httpResponse.json()
    const { data } = response
    return data
  } else {
    const GIFS_ENDPOINT_SEARCH_GIFS = `https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_API_KEY}&q=${search}&limit=25&offset=0&rating=g&lang=es&bundle=messaging_non_clips`;
    const httpResponse = await fetch(GIFS_ENDPOINT_SEARCH_GIFS)
    const response = await httpResponse.json()
    const { data } = response
    return data
  }
}

export default getTrendingGifs;