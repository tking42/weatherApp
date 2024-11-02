function ForecastItem({ day, onClick }) {
    const formatDate = (date) => {
        return date.dt_txt.slice(0, -9).split('-').reverse().join('/');
    };

    return (
        <div className="p-2 flex flex-col text-center">
            <p>{formatDate(day)}</p>
            <p>{Math.round(day.main.temp)}℃</p>
            <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt='Weather Icon' />
            <p className='underline text-blue-500 cursor-pointer' onClick={onClick}>See More</p>
        </div>
    );
}

export default ForecastItem;
