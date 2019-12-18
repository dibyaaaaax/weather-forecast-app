import React from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard'
import Form from './components/Form'
class App extends React.Component {

    constructor(){
        super();
        this.getWeather=this.getWeather.bind(this);
        //add API_KEY--------------------------------------------------
        this.API_KEY="e6bb46a5b30d6dfe3fe0037858-----";
        this.state={
            days:undefined
        }
    }

    async getWeather(e){
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${this.API_KEY}&units=metric`);
        const data = await api_call.json();
        this.setState(()=>{

            var allData={};
            if (data !== undefined && data.list !== undefined){
                for (var i=0;i<data.list.length;i++){
                      if (!(data.list[i].dt_txt.substring(0,10) in allData)){
                            var arr = new Array();
                            arr.push(data.list[i]);
                            allData[data.list[i].dt_txt.substring(0,10)] = arr;
                      }
                      else{
                            allData[data.list[i].dt_txt.substring(0,10)].push(data.list[i]);
                      }

                }
            }
            return {days: allData}

        }
        )

    }

    render(){
        var wData=new Array();
        var i=0;
      if (this.state.days!==undefined){
        console.log(this.state.days);
        Object.keys(this.state.days).forEach(key=>{
            wData.push(<WeatherCard key={key} item={this.state.days[key]}/>);

        })
      }

      return (
        <div>
            <h1>Weather Forecast</h1>
            <Form getWeather={this.getWeather}/>
            <div className="weatherCards">
                {wData}
            </div>
        </div>
      );
    }}

export default App;
