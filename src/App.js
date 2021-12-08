import React, { Component } from "react";
import axios from "axios";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import ErrorModal from "./components/ErrorModal.js";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      locationQuery: '',
      locationObj: {},
      weatherObj: {},
      error: false,
      errorMsg: ''
    }
  }

  resetError = () => {
    this.setState({error: false});
  }
  
  getLocation = async() => {
    try {
      let result = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_EXPLORER_KEY}&q=${this.state.locationQuery}&format=json`) ;
      this.setState({ locationObj: result.data[0]}, this.getWeather);
      this.setState({ error: false });
      console.log(this.state.locationObj);
    } catch (error) {
      this.setState({errorMsg: error.message});
      this.setState({ error: true });
    }
  }

  getWeather = async() => {
    let locName = this.state.locationObj.display_name.split(',')[0];
    console.log(locName);
    try {
      let result = await axios.get(`${process.env.REACT_APP_WEATHER_URL}/weather?query=${locName}&lat=latitude&lon=longitude`);
      this.setState({weatherObj: result.data})
    } catch (error) {
      this.setState({ errorMsg: error.message});
      this.setState({ error: true })
    }
  }

  locQryUpdt = (location) => {
    this.setState({locationQuery: location}, this.getLocation); 
    //callback this.getlocation executes after setState is complete
  }

  render(){
    return(
      // <div style={{backgroundColor: 'red'}}>
      <div>
        <Header locQryUpdt={this.locQryUpdt}/>
        <ErrorModal error={this.state.error} resetError={this.resetError} errorMsg={this.state.errorMsg}/> 
        <Main locationObj={this.state.locationObj}/>
        <Footer />
      </div>
    )
  }
}
export default App;

// >Background vector created by starline - www.freepik.com'
//<a href='https://www.freepik.com/vectors/background'>Background vector created by starline - www.freepik.com</a>
