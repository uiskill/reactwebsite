import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Term from './Pages/Term';
import Home from './Pages/Home';
import { Helmet } from 'react-helmet';
import ArticleDetails from './Pages/ArticleDetails';
import Privacy from './Pages/Privacy';


function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Office Space</title>
        <meta
          name="description"
          content="Office spaces should be unique they don’t need to look the same"
        />
        <meta
          name="keywords"
          content="Office Space , Rooms, corporate"
        />
      </Helmet>
          <Routes>
            <Route exact path="/"  element={<Home />} />
            <Route exact path="/articles" element={<ArticleDetails/>} />
            <Route exact path="/term" element={<Term />} />
            <Route exact path="/privacy" element={<Privacy/>} />

         
          </Routes>
        
        </BrowserRouter>
  );
}

export default App;
