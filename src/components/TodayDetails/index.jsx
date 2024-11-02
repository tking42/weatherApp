function TodayDetails({ weather }) {
    function convertTime(uxTime) {
        const date = new Date(uxTime * 1000);
        return date.toLocaleString();
    }

    return (
        <div className="rounded-lg p-4 mx-4 my-1 shadow-xl flex flex-col justify-center">
            <p className="text-2xl font-bold m-4">Details</p>
            <div className='flex justify-between p-4'>
                <p className="text-lg text-gray-800">Sunrise: <br/> {convertTime(weather.sys.sunrise).slice(-8, -3)}</p>
                <p className="text-lg text-gray-800">Sunset: <br/> {convertTime(weather.sys.sunset).slice(-8, -3)}</p>
                <p className="text-lg text-gray-800">Min Temp: <br/> {weather.main.temp_min}℃</p>
                <p className="text-lg text-gray-800">Max Temp: <br/> {weather.main.temp_max}℃</p>
                <p className="text-lg text-gray-800">Feels like: <br/> {weather.main.feels_like}℃</p>
                <p className="text-lg text-gray-800">Wind: <br/> {weather.wind.speed} km/h</p>
            </div>


        </div>
    );
}

export default TodayDetails;
