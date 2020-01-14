import React from 'react';
import './WeatherLocationProvider.scss';


export default class WeatherLocation extends React.Component {
  constructor(props){
    super(props);

    this.state = {

    }

    this.sendLocationData = this.sendLocationData.bind(this);

  }

  render(){
    return(
      <div className = "locationBar">
        <input id="location" placeholder="Enter a city..." />
        <br />
        <button onClick={()=> this.sendLocationData()}> Get Weather! </button>
      </div>
    );
  }

  sendLocationData(){
    let location = document.getElementById('location').value;
    this.props.sendLocation(location);
  }


}
