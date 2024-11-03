function WeatherHeader({ selectedCity, weather }) {
    const today = new Date();
    const date = today.toLocaleDateString('en-UK');

    console.log(weather)

    return (
        <div className='sm:ps-6 sm:pe-2 sm:py-2 sm:ms-4 ms-6 flex flex-col justify-center mt-2 sm:mt-0 sm:max-w-1/2' >
            <p>{date}</p>
            <p className='sm:text-5xl text-3xl'>{selectedCity.name}</p>
            <p className="sm:text-3xl text-2xl">{Math.round(weather.main.temp)}℃ ~ <span>{weather.weather[0].description}</span></p>
        </div>
    )
}

export default WeatherHeader;
