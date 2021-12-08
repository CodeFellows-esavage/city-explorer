import { Component } from 'react';
import LocationCard from './LocationCard.js';
import Weather from './Weather.js';

class Main extends Component {
    render() {
        return (
            <>
                <LocationCard locationObj={this.props.locationObj}/>
                {this.props.forcastArr && this.props.forcastArr.map(forcastObj => {
                    return <Weather forcast={forcastObj}/>    
                })}
            </>    
        )
    }
}

export default Main;