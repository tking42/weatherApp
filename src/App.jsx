import './App.css'
import Results from "./components/Results/index.jsx";
import {useState} from "react";
import Nav from "./components/Nav/index.jsx";

function App() {
    const [selectedCity, setSelectedCity] = useState(null);
    const [forecast, setForecast] = useState([]);
    const [weather, setWeather] = useState([]);
    const [hidden, setHidden] = useState('hidden');

    return (
        <div className="sm:mx-36">
            <Nav selectedCity={selectedCity} setSelectedCity={setSelectedCity} setForecast={setForecast} setWeather={setWeather} setHidden={setHidden}></Nav>
            <Results selectedCity={selectedCity} forecast={forecast} weather={weather} hidden={hidden}></Results>
        </div>
    )
}

export default App
