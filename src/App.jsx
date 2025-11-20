import HomePage from "./pages/HomePage";
import { Routes, Route, Navigate} from 'react-router-dom';
import NavigationBar from "./components/NavigationBar.jsx";
import Movies from "./pages/Movies.jsx";
import Interpreters from "./pages/Interpreters.jsx";
// import Interprete from "./Interprete";
import Details from "./pages/Details.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route element={<NavigationBar />}>
          <Route path="/" element={ <HomePage />} />
          <Route path="/inicio" element={ <Navigate to="/" />} />
          <Route path="/peliculas" element={ <Movies />} />
          <Route path="/interpretes" element={ <Interpreters />} />
          <Route path="/admin" element={ <HomePage />} />
          <Route path="/details/:id" element={ <Details />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
