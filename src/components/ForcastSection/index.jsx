import { useState } from 'react';
import ForecastModal from "../ForcastModel/index.jsx";
import ForecastItem from "../ForcastItem/index.jsx";

function ForecastList({ forecast, hidden }) {
    const [selectedForecast, setSelectedForecast] = useState(null);

    const handleClick = (forecast) => {
        setSelectedForecast(forecast);
    };

    const closeModal = () => {
        setSelectedForecast(null);
    };

    return (
        <div className={`mt-4 rounded-lg p-4 mx-4 shadow-2xl flex flex-col justify-center ${hidden}`}>
            <p className='text-2xl font-bold m-4'>5 day forecast</p>
            <div className='flex sm:justify-between justify-evenly sm:flex-nowrap flex-wrap p-4'>
                {forecast.map((d, index) => {
                    if (d.dt_txt.slice(11, 16) === "15:00") {
                        return (
                            <div key={index}>
                                <ForecastItem
                                    day={d}
                                    onClick={() => handleClick(d)}
                                />
                            </div>

                        );
                    }
                    return null;
                })}
            </div>

            {selectedForecast && (
                <ForecastModal
                    selectedForecast={selectedForecast}
                    forecast={forecast}
                    onClose={closeModal}
                />
            )}
        </div>
    );
}

export default ForecastList;
