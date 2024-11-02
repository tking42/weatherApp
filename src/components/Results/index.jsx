import { useEffect, useState } from "react";
import CityAutocomplete from "../CityAutocomplete/index.jsx";
import WeatherInfo from "../TodaySection/index.jsx";
import ForecastSection from "../ForcastSection/index.jsx";
import Button from '@mui/material/Button';

function Results() {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);
    const [City, setCity] = useState(null);
    const [forecast, setForecast] = useState([]);
    const [weather, setWeather] = useState([]);
    const [hidden, setHidden] = useState('hidden');

    const getCities = async () => {
        const response = await fetch('../../public/city.list.json')
        const cities = await response.json();
        setCities(cities);
    };

    useEffect(() => {
        getCities();
    }, []);

    const gbCities = cities.filter(city => city.country === "GB").sort((a, b) => a.name.localeCompare(b.name));

    const handleSearch = async () => {
        if (City) {
            setSelectedCity(City);
            const current = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${City.id}&APPID=9f3b1b9c94e3da96d1ab9a74cfa5a586&units=metric`);
            const weatherData = await current.json();
            const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${City.id}&APPID=9f3b1b9c94e3da96d1ab9a74cfa5a586&units=metric`);
            const forecastData = await forecastResponse.json();
            setWeather(weatherData);
            setForecast(forecastData.list);
            setHidden('');
        }
    };

    return (
        <div className="sm:p-2 sm:mx-36 ">
            <div className='sm:flex sm:items-center sm:p-4 sm:mx-4 sm:justify-between gap-4 mx-4'>
                <h1 className='text-3xl font-bold sm:my-0 my-2'>UK Weather</h1>
                <CityAutocomplete cities={gbCities} setCity={setCity} />
                <Button onClick={handleSearch} variant="contained" color="primary">Search</Button>
            </div>
            <div>
                <WeatherInfo hidden={hidden} forecast={forecast} weather={weather} selectedCity={selectedCity} />
                <ForecastSection hidden={hidden} forecast={forecast} />
            </div>
        </div>
    );
}

export default Results;
