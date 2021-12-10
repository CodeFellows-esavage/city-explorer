import { Component } from 'react';
import LocationCard from './LocationCard.js';
import Weather from './Weather.js';
import Movies from './Movies.js';

class Main extends Component {
    render() {
        return (
            <>
                {this.props.locationObj.display_name ? <LocationCard locationObj={this.props.locationObj}/> : <h3>Enter a location to explore, to find local details...</h3>}
                <Weather forcastArr={this.props.forcastArr}/>
                <Movies movieArr={this.props.movieArr}/>
            </>    
        )
    }
}

export default Main;