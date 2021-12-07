import React, { Component } from "react";
import axios from "axios";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      locationQuery =
    }
  }
  render(){
    return(
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}
export default App;
