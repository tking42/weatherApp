function ForecastModal({ selectedForecast, forecast, onClose }) {
    const formatDate = (date) => {
        return date.dt_txt.slice(0, -9).split('-').reverse().join('/');
    };

    const formatTime = (date) => {
        return date.dt_txt.slice(11, 16);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col mx-2">
                <div className='flex mb-10 justify-between ms-6'>
                    <p>{formatDate(selectedForecast)}</p>
                    <p className="close cursor-pointer" onClick={onClose}>&times;</p>
                </div>
                <div className='sm:flex-row flex sm:flex-nowrap flex-wrap justify-evenly'>
                    {forecast.map((d, index) => {
                        if (d.dt_txt.slice(0, -9) === selectedForecast.dt_txt.slice(0, -9)) {
                            return (
                                <div key={index} className="flex flex-col items-center ">
                                    <h2>{formatTime(d)}</h2>
                                    <p>{Math.round(d.main.temp)}℃</p>
                                    <img src={`https://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`} alt='Weather Icon' />
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        </div>
    );
}

export default ForecastModal;

