import React from 'react';
import Weather from '../service/weatherAPI.js';

export default class DisplayWeather extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      weatherData: [],
      loading: false
    }

    this.getWeatherData = this.getWeatherData.bind(this);
  }

  componentDidMount(){
    this.getWeatherData();
  }

  async getWeatherData(){
    this.setState({loading: true})
    let data = await Weather(this.props.location)
    console.log(data)
    this.setState({weatherData: data, loading: false});
  }


  render(){
    if (
      (this.state.loading)
    ){
      return(
        <div>
          <h1>Loading...</h1>
        </div>
      );
    } else if (this.state.weatherData && this.state.weatherData.main){
      return(
        <div>
          <h1> {this.state.weatherData.main.temp} </h1>
        </div>
      );
    } else {
      return(
        <div>
          <h1> Please wait! </h1>
        </div>
      );
    }
  }
}
