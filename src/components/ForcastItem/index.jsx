function ForecastItem({ day, onClick }) {
    const formatDate = (date) => {
        const dateObj = new Date(date.dt_txt);
        const today = new Date();

        today.setHours(0, 0, 0, 0)
        if (dateObj.setHours(0, 0, 0, 0) === today.getTime()) {
            return 'Today';
        }
        const options = { weekday: 'short', month: 'numeric', day: 'numeric' };
        return dateObj.toLocaleDateString('en-US', options);
    }

    return (
        <div className="p-2 flex flex-col text-center">
            <p>{formatDate(day)}</p>
            <p>{Math.round(day.main.temp)}℃</p>
            <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt='Weather Icon' className='h-24'/>
            <p className='underline text-blue-500 cursor-pointer' onClick={onClick}>See More</p>
        </div>
    );
}

export default ForecastItem;

