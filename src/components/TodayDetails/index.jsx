function TodayDetails({ weather }) {
    function convertTime(uxTime) {
        const date = new Date(uxTime * 1000)
        const options = { hour: '2-digit', minute: '2-digit', hour12: false }
        return date.toLocaleTimeString('en-UK', options)
    }

    return (
        <div className='mt-4 rounded-lg p-4 sm:mx-4 mx-2 shadow-2xl flex flex-col justify-center'>
            <p className="text-2xl font-bold m-4">Details</p>
            <div className='flex sm:flex-nowrap flex-wrap sm:justify-between justify-evenly gap-4 sm:gap-0 p-4'>
                <p className="text-lg text-gray-800 p-3 w-24 sm:w-36">Min Temp: <br/> {weather.main.temp_min}℃</p>
                <p className="text-lg text-gray-800 p-3 w-24 sm:w-36">Max Temp: <br/> {weather.main.temp_max}℃</p>
                <p className="text-lg text-gray-800 p-3 w-24 sm:w-36">Feels like: <br/> {weather.main.feels_like}℃</p>
                <p className="text-lg text-gray-800 p-3 w-24 sm:w-36">Sunrise: <br/> {convertTime(weather.sys.sunrise)}
                </p>
                <p className="text-lg text-gray-800 p-3 w-24 sm:w-36">Sunset: <br/> {convertTime(weather.sys.sunset)}
                </p>
                <p className="text-lg text-gray-800 p-3 w-24 sm:w-36">Wind: <br/> {weather.wind.speed} m/s</p>
            </div>
        </div>
    )
}

export default TodayDetails
