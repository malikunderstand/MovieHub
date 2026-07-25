import 'boxicons/css/boxicons.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../src/App.css';
import '../src/MovieCard.css';
import '../src/MovieDetail.css';
import '../src/About.css';
import '../src/Contact.css';
import '../src/Feature.css';
import './pages/MovieExplore';
import MovieExplore from './pages/MovieExplore';

function App() {
  return (
    <>
      {/* <section id="center"></section> */}
      <MovieExplore />
    </>
  );
}

export default App;
