import { Component } from 'react';
import Row from 'react-bootstrap/Row';
import WeatherDay from './WeatherDay.js';

class Weather extends Component{
    render() {
        return(
            <>
                {this.props.forcastArr.length > 0 && <h3 style={{textAlign: 'center'}}>{this.props.locationObj.display_name.split(',')[0]} 12 Day Forecast</h3>}
                <Row style={{width: '54rem', marginLeft: '0rem'}}>
                    {this.props.forcastArr ? this.props.forcastArr.map(forcastObj => {
                        return <WeatherDay forcast={forcastObj} key={forcastObj.date}/>    
                    }) : <small style={{textAlign: 'center', margin: '5px 0'}}>No forcast data for this location...</small>
                    }
                </Row>
            </>
        )
    }
}

export default Weather;