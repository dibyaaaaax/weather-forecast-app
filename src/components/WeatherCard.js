import React from "react";

class WeatherCard extends React.Component{

    constructor(){
        super();
    }
    render(){
        var max_temp=0;
        var min_temp=100000;
        for (var i=0;i<this.props.item.length;i++){
            if (this.props.item[i].main.temp_min < min_temp)
                min_temp = this.props.item[i].main.temp_min;
            if (this.props.item[i].main.temp_max > max_temp)
                max_temp = this.props.item[i].main.temp_max;
        }
        return (
            <div className="weather-card">
            <div className="day-img">
            <p className="day">{this.props.item[0].dt_txt.substring(0,10)}</p>

            <img src={require(`./img/${this.props.item[0].weather[0].main}.jpg`)}/>
            <p>{this.props.item[0].weather[0].main}</p>
            </div>
            <p className="high-temp">{max_temp}°C</p>
            <p className="low-temp">{min_temp}°C</p>
            </div>
        )
    }
}

export default WeatherCard