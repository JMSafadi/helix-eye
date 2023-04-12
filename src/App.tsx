import { Routes, Route } from "react-router-dom";
import { GlobalStyles } from './styles/GlobalStyles';
import { Menu } from './components/Menu';
import { Home } from './pages/Home';
import { Galaxies } from './pages/Galaxies';
import { Planets } from './pages/Planets';
import { Footer } from './components/Footer';
import { Apod } from "./pages/Apod";

function App() {

  return (
    <>
      <GlobalStyles />
      <Menu />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path="/galaxies" element={<Galaxies />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/apod" element={<Apod/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
