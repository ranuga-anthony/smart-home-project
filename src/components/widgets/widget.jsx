import { useEffect,useState } from "react";
import s from "./widget.module.css";



function Widget (){

    const[date, setDate] = useState(new Date());
    const[weatherData, setweatherData] = useState(null);
    
    useEffect(() =>{

        const UpdateDate = () => {
            setDate(new Date());
        };

        const timer = setInterval(UpdateDate,60);
        
        const cleanUp = () =>{
            clearInterval(timer);
        };

        return cleanUp;
    },[]);

    useEffect(() =>{

        const getWeatherData = async (locationData)=>{
            //const apiKey = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY;
            const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=d0e6818d2f834aea971124527230409&q=${locationData.coords.latitude},${locationData.coords.longitude}&aqi=no`,
            
            {
                method : "GET",
                header  : { "Content-Type": "application/json"},
            }
            
            
            );
            
            const data = await res.json();
           // const weatherCode = locationData.data.current.condition.code;
            //console.log(weatherCode);
            //setweatherCondition(weatherCode);
            console.log(data);
            setweatherData(data);
        }

        const coords = navigator.geolocation.getCurrentPosition(getWeatherData);
        
    },[]);

    
    return(
        <div>
            <h1 className={s.widget_time}>
                {date.getHours() + ":" + date.getMinutes()}
            </h1>
            <h4 className={s.widget_date}>
                {date.toDateString()}
            </h4>

          

            <div className={s.widget_weather}>
                <div className= {s.temperature}>
                    <p className={s.widget_weather_temp_title}>Temperature</p>
                    <p className={s.widget_weather_temp}>
                        {!weatherData? "Loading weather data....":weatherData.current.temp_c + " C"}
                    </p>
                </div>

                <div className= {s.humidity}>
                    <p className={s.widget_weather_humidity_title}>Humidity</p>
                    <p className={s.widget_weather_humidity}>
                        {!weatherData? "Loading weather data....":weatherData.current.humidity}
                    </p>
                </div>

                <div className = {s.condition}>
                    <p className = {s.widget_weather_condition_title}>Condition</p>
                    <p className = {s.widget_weather_condition}>
                        {!weatherData? "Loading weather conditions....":weatherData.current.condition.text}
                    </p>
                    

                </div>

                <div className = {s.rain}>
                    <p className = {s.widget_weather_rain_chance_title}>Daily Rain</p>
                    <p className = {s.widget_weather_rain_chance}>
                        {!weatherData? "Loading rain chance data....":weatherData.forecast.forecastday[0].day.daily_chance_of_rain}
                    </p>
                    

                 </div> 
            </div>
        </div>
    )
}

export default Widget;