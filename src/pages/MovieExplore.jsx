import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../component/Navbar';
import MovieHome from './MovieHome';
import MovieDetail from './MovieDetail';
import Footer from '../component/Footer';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Feature from '../pages/Feature';
import Action from '../Category/Action';
import Comedy from '../category/Comedy';
import Drama from '../category/Drama';
import Scifi from '../category/Scifi';
import Horror from '../category/Horror';
import Romance from '../category/Romance';

function MovieExplore() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieHome />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Feature" element={<Feature />}></Route>
        <Route path="/Action" element={<Action />}></Route>
        <Route path="/Comedy" element={<Comedy />}></Route>
        <Route path="/Drama" element={<Drama />}></Route>
        <Route path="/Scifi" element={<Scifi />}></Route>
        <Route path="/Horror" element={<Horror />}></Route>
        <Route path="/Romance" element={<Romance />}></Route>
        <Route path="/movie/:id" element={<MovieDetail />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default MovieExplore;
