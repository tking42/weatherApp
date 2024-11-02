function TodayForecast({ forecast }) {
    const today = new Date();
    const date = today.toLocaleDateString('en-UK');

    return (
        <div className='flex flex-col ps-6 ms-4 justify-center mt-10'>
            <div className='flex'>
                {forecast.map((d, index) => {
                    const forecastDate = d.dt_txt.slice(0, -9).split('-').reverse().join('/');
                    if (forecastDate === date) {
                        return (
                            <div className='flex-col justify-c' key={index}>
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
