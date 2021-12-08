import { Component } from 'react';
import Row from 'react-bootstrap/Row';
import LocationCard from './LocationCard.js';
import Weather from './Weather.js';

class Main extends Component {
    render() {
        return (
            <>
                {this.props.locationObj.display_name ? <LocationCard locationObj={this.props.locationObj}/> : <h3>Enter a location to explore, to find local details...</h3>}
                <Row style={{width: '54rem', marginLeft: '0rem'}}>
                    {this.props.forcastArr ? this.props.forcastArr.map(forcastObj => {
                        return <Weather forcast={forcastObj} key={forcastObj.date}/>    
                    }) : <small style={{textAlign: 'center', margin: '5px 0'}}>No forcast data for this location...</small>}
                </Row>
            </>    
        )
    }
}

export default Main;