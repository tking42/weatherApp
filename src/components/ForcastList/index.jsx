function ForecastList({ forecast, hidden }) {
    return (
        <div className="mt-4 space-y-2">
            <p className={`m-2 ${hidden}`}>5 day forecast</p>
            {forecast.map((d, index) => {
                const date = (d.dt_txt).slice(0, -8).split('-').reverse().join('/').slice(0, -5)
                const time = d.dt_txt.slice(11, 16)

                return (
                    <div key={index} className="p-2 border border-gray-300 rounded hover:bg-gray-50">
                        <p>{date} <span>{time}</span></p>
                        <p>{d.main.temp}℃</p>
                        <p>{d.weather[0].main}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default ForecastList;

