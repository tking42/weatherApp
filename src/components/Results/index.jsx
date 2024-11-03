import TodaySection from "../TodaySection/index.jsx";
import ForecastSection from "../ForcastSection/index.jsx";

function Results({selectedCity, hidden, forecast, weather}) {

    return (
            <div>
                <TodaySection hidden={hidden} forecast={forecast} weather={weather} selectedCity={selectedCity} />
                <ForecastSection hidden={hidden} forecast={forecast} />
            </div>
    )
}

export default Results;
