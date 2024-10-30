import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';

function CitySearch() {
    const [cities, setCities] = useState([])
    const [selectedCity, setSelectedCity] = useState(null)
    const [temperature, setTemperature] = useState(null)
    const [condition, setCondition] = useState(null)
    const getCities = async () => {
        const response = await fetch('../../public/city.list.json');
        const cities = await response.json()
        setCities(cities)
    }

    useEffect(() => {
        getCities();
    }, []);

    const gbCities = cities.filter(city => city.country === "GB");

    const handleSearch = async () => {
        if (selectedCity) {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${selectedCity.id}&APPID=9f3b1b9c94e3da96d1ab9a74cfa5a586&units=metric`)
            const weatherData = await response.json()
            console.log(weatherData)
            setTemperature(weatherData.main.temp + '℃')
            setCondition('Condition: ' + weatherData.weather[0].main)
        }
    }

    return (
        <div>
            <Autocomplete
                disablePortal
                options={gbCities.reverse()}
                getOptionLabel={(option) => option.name}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Location" />}
                isOptionEqualToValue={(option, value) => option.name === value.name}
                renderOption={(props, option) => (
                    <li {...props} key={`${option.name}-${option.id || option.index}`}>
                        {option.name}
                    </li>
                )}
                onChange={(event, value) => {
                    setSelectedCity(value);
                }}
            />
            <Button onClick={handleSearch} variant="contained">Search</Button>
            <p>{temperature}</p>
            <p>{condition}</p>
        </div>
    );
}

export default CitySearch;
