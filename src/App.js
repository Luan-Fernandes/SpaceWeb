//Css
import './App.css';

//Router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import Home from './components/Home';
import Destino from './components/Destino'
import Crew from './components/Crew';
import Tecnologia from './components/Tecnologia'

//Navegacão
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Router>

        <Navbar/>

          <Routes>
        
          <Route exact path="/" element={<Home/>} />

            <Route exact path="/destino" element={<Destino/>} />

            <Route exact path="/crew" element={<Crew/>} />

            <Route exact path="/tecnologia" element={<Tecnologia/>} />

          </Routes>
         
      </Router>
    </div>
  );
}

export default App;
