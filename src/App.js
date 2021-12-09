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
      forcastArr: [],
      movieArr: [],
      error: false,
      errorMsg: ''
    }
  }

  resetError = () => {
    this.setState({error: false, locationQuery: '', locationObj: {}, forcastArr: []});
  }
  
  getLocation = async() => {
    try {
      let result = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_EXPLORER_KEY}&q=${this.state.locationQuery}&format=json`) ;
      this.setState({ locationObj: result.data[0]}, this.getAdditionalDetails);
      this.setState({ error: false });
    } catch (error) {
      this.setState({errorMsg: error.message});
      this.setState({ error: true });
    }
  }

  getAdditionalDetails() {
    this.getWeather();
    this.getMovie();
  }

  getWeather = async() => {
    const lat = this.state.locationObj.lat;
    const lon = this.state.locationObj.lon;

    try {
      let result = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/weather?&lat=${lat}&lon=${lon}`);
      this.setState({forcastArr: result.data});
      this.setState({ error: false });
    } catch (error) {
      this.setState({forcastArr: []}); // sets state to empty array
      this.setState({ errorMsg: error.message});
      this.setState({ error: true })
    }
  }

  getMovie = async () => {
    let locName = this.state.locationObj.display_name.split(',')[0];
    console.log(locName);
    try{
      let result = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/movie?loc=${locName}`);
      this.setState({movieArr:result});
    } catch(error){
      console.log(error.message);
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
        {!this.state.error && 
        <Main locationObj={this.state.locationObj} forcastArr={this.state.forcastArr}/>}
        <Footer />
      </div>
    )
  }
}
export default App;

// >Background vector created by starline - www.freepik.com'
//<a href='https://www.freepik.com/vectors/background'>Background vector created by starline - www.freepik.com</a>
