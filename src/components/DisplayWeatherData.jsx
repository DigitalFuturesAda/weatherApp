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
    this.setState({weatherData: JSON.parse(JSON.stringify(data)), loading: false});
  }


  render(){
    console.log(this.state)
    if(this.state.loading === true){
      return(
        <div>
          <h1> Loading... </h1>
        </div>
      );
    } else  {
      return(
        <div>
          <h1> {hello} </h1>
        </div>
      );
    }
  }
}
