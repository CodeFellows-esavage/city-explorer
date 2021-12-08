import { Component } from 'react';
import Row from 'react-bootstrap/Row';
import LocationCard from './LocationCard.js';
import Weather from './Weather.js';

class Main extends Component {
    render() {
        return (
            <>
                <LocationCard locationObj={this.props.locationObj}/>
                <Row style={{width: '54rem', marginLeft: '0rem'}}>
                    {this.props.forcastArr && this.props.forcastArr.map(forcastObj => {
                        return <Weather forcast={forcastObj}/>    
                    })}
                </Row>
            </>    
        )
    }
}

export default Main;