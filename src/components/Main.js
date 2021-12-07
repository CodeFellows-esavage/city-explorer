import { Component } from 'react';
import LocationCard from './LocationCard.js';

class Main extends Component {
    render() {
        return (
            <>
                <LocationCard locationObj={this.props.locationObj}/>
            </>    
        )
    }
}

export default Main;