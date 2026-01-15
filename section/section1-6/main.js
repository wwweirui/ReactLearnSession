const cities = [
    {
        name: "New York",
        country: "USA",
        forecast: [
            { date: "2024-04-03", temperature: 15, weather: "Partly cloudy" },
            { date: "2024-04-04", temperature: 17, weather: "Sunny" },
            { date: "2024-04-05", temperature: 18, weather: "Partly cloudy" },
            { date: "2024-04-06", temperature: 20, weather: "Rain" },
            { date: "2024-04-07", temperature: 16, weather: "Thunderstorms" },
            { date: "2024-04-08", temperature: 14, weather: "Cloudy" },
            { date: "2024-04-09", temperature: 13, weather: "Partly cloudy" },
        ],
    },
    {
        name: "London",
        country: "UK",
        forecast: [
            { date: "2024-04-03", temperature: 12, weather: "Cloudy" },
            { date: "2024-04-04", temperature: 14, weather: "Rain" },
            { date: "2024-04-05", temperature: 15, weather: "Partly cloudy" },
            { date: "2024-04-06", temperature: 13, weather: "Sunny" },
            { date: "2024-04-07", temperature: 11, weather: "Cloudy" },
            { date: "2024-04-08", temperature: 10, weather: "Rain" },
            { date: "2024-04-09", temperature: 12, weather: "Partly cloudy" },
        ],
    },
    {
        name: "Tokyo",
        country: "Japan",
        forecast: [
            { date: "2024-04-03", temperature: 20, weather: "Sunny" },
            { date: "2024-04-04", temperature: 21, weather: "Partly cloudy" },
            { date: "2024-04-05", temperature: 22, weather: "Cloudy" },
            { date: "2024-04-06", temperature: 19, weather: "Rain" },
            { date: "2024-04-07", temperature: 18, weather: "Partly cloudy" },
            { date: "2024-04-08", temperature: 17, weather: "Sunny" },
            { date: "2024-04-09", temperature: 20, weather: "Cloudy" },
        ],
    },

    {
        name: "Sydney",
        country: "Australia",
        forecast: [],
    },

    {
        name: "Beijing",
        country: "China",
    },
];

function MyApp() {
    function isForecastAvailable(list) {
        return list && list.length > 0;
    }

    function forecastList(list) {
        return (
            <ul>
                {
                    list.map((item, index) => {
                        return (
                            <li key={index}>
                                {new Date(item.date).toLocaleDateString()}
                                <span> temperature: {item.temperature}℃({item.weather})</span>
                            </li>
                        )
                    })
                }
            </ul>
        )

    }


    return (
        <main>
            {
                cities.map((city) => {
                    return (
                        <section className="city">
                            <h2>{city.country}</h2>
                            <h3>{city.name}</h3>
                            
                            {isForecastAvailable && isForecastAvailable(city.forecast)}
                            {!isForecastAvailable && <span>No forecast available</span>}

                        </section>
                    )
                })
            }
        </main>
    );
}

const appEl = document.querySelector("#app");
const root = ReactDOM.createRoot(appEl);

root.render(<MyApp />);