const apiKey = import.meta.env.VITE_API_KEY

export const getGalaxiesJSON = async () => {
  try {
    const response = await fetch("https://images-api.nasa.gov/search?q=galaxies")
    const data = await response.json()
    return data?.collection?.items;
  } catch (error) {
    // throw new Error(error)
    console.log('error');
  }
}

export const getPlanetsJSON = async () => {
  try {
    const response = await fetch("https://images-api.nasa.gov/search?q=planets")
    const data = await response.json()
    return data?.collection?.items;
  } catch (error) {
    // throw new Error(error)
    console.log('error');
  }
}

// export const getAPODJson = async () => {
//   try {
//     const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
//     const data = await response.json()
//     console.log(data);
//     return data;
//   } catch (error) {
//     // throw new Error(error)
//     console.log('error');
//   }
// }

