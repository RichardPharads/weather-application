import React, { useState, useEffect } from 'react';
import Data from './Datacard';

function MyComponent() {
    const [location, setLocation] = useState('manila');
    const [weatherData, setWeatherData] = useState({
        country: '',
        main: 'Clear', // Default value
        description: '',
        feels: 0
    });

    useEffect(() => {
        const weatherApp = async () => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=bbc0f7e630de64177deea4c008e1beed`);
                const data = await response.json();
                console.log(data);
                setWeatherData({
                    country: data.name,
                    main: data.weather[0].main,
                    description: data.weather[0].description,
                    feels: data.main.feels_like,
                    temp: data.main.temp,
                    speed: data.wind.speed,
                    humidity: data.main.humidity,
                    country_tag: data.sys.country
                });
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        weatherApp();
    }, [location]);

    const handleChange = (event) => {
        setLocation(event.target.value);
    };

    return (
        <div className='px-20'>
            <input value={location} onChange={handleChange} className='border-4 rounded-lg my-10 h-11 px-5 font-semibold text-gray-700' type="text" />
            <div className='flex gap-4'>
                <Data weatherData={weatherData} />
            </div>
        </div>
    );
}

export default MyComponent;
