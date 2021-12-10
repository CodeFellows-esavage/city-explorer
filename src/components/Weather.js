import { Component } from 'react';
import Row from 'react-bootstrap/Row';
import WeatherDay from './WeatherDay.js';

class Weather extends Component{
    render() {
        return(
            <Row style={{width: '54rem', marginLeft: '0rem'}}>
                {this.props.forcastArr ? this.props.forcastArr.map(forcastObj => {
                    return <WeatherDay forcast={forcastObj} key={forcastObj.date}/>    
                }) : <small style={{textAlign: 'center', margin: '5px 0'}}>No forcast data for this location...</small>
                }
            </Row>
        )
    }
}

export default Weather;