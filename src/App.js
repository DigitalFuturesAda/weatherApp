import React from 'react';
import './App.css';
import WeatherLocation from './components/WeatherLocationProvider.jsx';
import DisplayWeather from './components/DisplayWeatherData.jsx';

export default class App extends React.Component{
  constructor(props){
    super(props);

    this.state={
      location: '',
      locationIsEmpty: true
    }
  }

  render(){
    if(this.state.locationIsEmpty){
      return (
        <div className="App">
          <WeatherLocation sendLocation={this.specifiedLocation.bind(this)} />
        </div>
      );
    } else {
      return(
        <div className="weatherDataContainer">
          <DisplayWeather location={this.state.location} />
        </div>
      );
    }
  }

  specifiedLocation = (data) => {
    this.setState({location: data, locationIsEmpty: false})
  }




}
