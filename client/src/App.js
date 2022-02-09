import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Temperaments from './components/Temperaments/Temperaments'
import CreateDog from "./components/CreateDog/CreateDog";
import DogDetails from "./components/DogDetails/DogDetails";

function App() {
  return ( 
    <div className="App">
      <Routes>
        <Route path="/" element={<><Nav /> <LandingPage /> </>} />

        <Route path="/home" element={<Home />} />
        <Route path="/temperament" element={<Temperaments />} />
        <Route path="/dog" element={<CreateDog/>}/>
        <Route path="/dogs/:idRaza" element={<DogDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
