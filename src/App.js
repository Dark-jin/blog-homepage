import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
import Blogcard from './pages/Blogcard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='' element={<Blogcard />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
