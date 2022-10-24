import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
import Blogcard from './pages/Blogcard';
import Blogmain from './pages/Blogmain';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='' element={<Blogcard />}/>
        <Route path='Blogmain' element={<Blogmain/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
