import { useEffect, useState } from "react";
import CityAutocomplete from "../CityAutocomplete/index.jsx";
import WeatherInfo from "../WeatherInfo/index.jsx";
import ForecastList from "../ForcastList/index.jsx";
import Button from '@mui/material/Button';

function CitySearch() {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);
    const [temperature, setTemperature] = useState(null);
    const [condition, setCondition] = useState(null);
    const [forecast, setForecast] = useState([]);
    const [hidden, setHidden] = useState('hidden')

    const getCities = async () => {
        const response = await fetch('../../public/city.list.json');
        const cities = await response.json();
        setCities(cities);
    };

    useEffect(() => {
        getCities();
    }, []);

    const gbCities = cities.filter(city => city.country === "GB");

    const handleSearch = async () => {
        if (selectedCity) {
            const current = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${selectedCity.id}&APPID=9f3b1b9c94e3da96d1ab9a74cfa5a586&units=metric`);
            const weatherData = await current.json();
            const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${selectedCity.id}&APPID=9f3b1b9c94e3da96d1ab9a74cfa5a586&units=metric`);
            const forecastData = await forecastResponse.json();
            setTemperature(weatherData.main.temp + '℃');
            setCondition(weatherData.weather[0].main);
            setForecast(forecastData.list);
            setHidden('')
        }
    }

    return (
        <div className="p-4">
            <CityAutocomplete cities={gbCities} setSelectedCity={setSelectedCity} />
            <div className='mt-2 text-center'>
                <Button onClick={handleSearch} variant="contained">Search</Button>
            </div>
            <WeatherInfo hidden={hidden} temperature={temperature} condition={condition} />
            <ForecastList hidden={hidden} forecast={forecast} />
        </div>
    );
}

export default CitySearch;

