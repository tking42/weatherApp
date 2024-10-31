function WeatherInfo({ temperature, condition, hidden }) {

    const today = new Date()
    const date = today.toLocaleDateString('en-UK')

    return (
        <div className="mt-4 text-center">
            <p className={hidden}>{date}</p>
            <p className="text-5xl font-bold">{temperature}</p>
            <p className="text-3xl text-gray-700">{condition}</p>
        </div>
    );
}

export default WeatherInfo;
