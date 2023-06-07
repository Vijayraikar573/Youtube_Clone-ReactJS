import './App.css';
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Home from "./components/home";
import About from './components/About';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AddVideo from './components/AddVideo';
import Error from './components/Error';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* common components */}

        <Navbar/>

          <Routes>
          {/* home page */}

            <Route path='/' element={<div className="homepage">
            <Sidebar/>
            <Home/>
            </div>}/>

            <Route path='/about' element={<About/>}/>
            {/* about */}
            <Route path='/addvideo' element={<AddVideo/>}/>
            <Route path='*' element={<Error/>}/>
            {/* add video page */}

          </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
