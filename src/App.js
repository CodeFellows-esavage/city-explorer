import React, { Component } from "react";
import axios from "axios";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      locationQuery: '',
      locationObj: {},
      error: false
    }
  }
  
  getLocation = async() => {
    try {
      let result = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_EXPLORER_KEY}&q=${this.state.locationQuery}&format=json`);
      this.setState({ locationObj: result.data[0]})
    } catch (error) {
      this.setState({ error: true })
    }
  }

  locQryUpdt = (location) => {
    this.setState({locationQuery: location}, this.getLocation); 
    //callback this.getlocation executes after setState is complete
  }

  render(){
    return(
      <>
        <Header locQryUpdt={this.locQryUpdt}/>
        <Main locationObj={this.state.locationObj}/>
        <Footer />
      </>
    )
  }
}
export default App;
