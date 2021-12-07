import { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <>
                <h2> {this.props.locationObj.display_name} </h2>
                <p> {`Latitude: ${this.props.locationObj.lat}`}</p>
                <p> {`Longitude: ${this.props.locationObj.lon}`}</p>


            </>    
        )
    }
}

export default Main;