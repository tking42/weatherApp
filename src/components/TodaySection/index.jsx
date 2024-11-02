import TodayForecast from "../TodayForecast/index.jsx";
import TodayHeader from "../TodayHeader/index.jsx";
import TodayDetails from "../TodayDetails/index.jsx";

function WeatherInfo({ forecast, weather, hidden, selectedCity }) {
    return (
        <div className={`${hidden}`}>
            {weather && weather.main && selectedCity && (
                <div className='flex flex-col'>
                    <div className='flex gap-12'>
                        <TodayHeader selectedCity={selectedCity} weather={weather}/>
                        <TodayForecast forecast={forecast}/>
                    </div>
                    <TodayDetails weather={weather}/>
                </div>
            )}
        </div>
    );
}

export default WeatherInfo;
