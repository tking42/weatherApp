function TodayForecast({ forecast }) {
    const today = new Date();
    const date = today.toLocaleDateString('en-UK');

    return (
        <div className='sm:ps-6 ps-1 sm:ms-4 ms-1 mt-10'>
            <div className='flex '>
                {forecast.map((d, index) => {
                    const forecastDate = d.dt_txt.slice(0, -9).split('-').reverse().join('/')

                    if (forecastDate === date) {
                        return (
                            <div className='flex-col text-center sm:w-2 w-1' key={index}>
                                <p>{d.dt_txt.slice(11, 16)}</p>
                                <p> {Math.round(d.main.temp)}℃</p>
                                <img src={`https://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`}
                                     alt='Weather Icon'/>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
}

export default TodayForecast;
