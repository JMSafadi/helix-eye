import styled from 'styled-components';
import { GalaxiesLayout } from '../components/GalaxiesLayout';
import { LoadingSpinner } from '../components/LoadingSpinner';
// import { LOADING_STATUS, ERROR_STATUS, useFetchApodInfo } from '../hooks/useAPOD';
import { GalaxyCardContainer } from '../components/GalaxyCard/styles';
import { ApodContainer } from '../components/ApodContainer';


const apod = {
  "copyright": "Howard Trottier",
  "date": "2023-04-12",
  "explanation": "The large stellar association cataloged as NGC 206 is nestled within the dusty arms of the neighboring Andromeda galaxy along with the galaxy's pinkish star-forming regions. Also known as M31, the spiral galaxy is a mere 2.5 million light-years away. NGC 206 is found right of center in this sharp and detailed close-up of the southwestern extent of Andromeda's disk. The bright, blue stars of NGC 206 indicate its youth. In fact, its youngest massive stars are less than 10 million years old. Much larger than the open or galactic clusters of young stars in the disk of our Milky Way galaxy, NGC 206 spans about 4,000 light-years. That's comparable in size to the giant stellar nurseries NGC 604 in nearby spiral M33 and the Tarantula Nebula in the Large Magellanic Cloud.",
  "hdurl": "https://apod.nasa.gov/apod/image/2304/Trottier_M31SW_APOD_Re.jpg",
  "media_type": "image",
  "service_version": "v1",
  "title": "NGC 206 and the Star Clouds of Andromeda",
  "url": "https://apod.nasa.gov/apod/image/2304/Trottier_M31SW_APOD_Re1024.jpg"
}

const ApodPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 3rem;
`

export const Apod = () => {

  // const { apod, requestStatus } = useFetchApodInfo()

  // const renderLayout = () => {
  //   if (requestStatus === LOADING_STATUS) return <LoadingSpinner />
  //   if (requestStatus === ERROR_STATUS) return <h1>Error</h1>
  //   return <GalaxiesLayout galaxies={apod} />
  // }

  return (
    <ApodPageWrapper>
      <h1>Astronomy picture of the day</h1>
      <ApodContainer/>
    </ApodPageWrapper>
  );
}