import { Component } from 'react';
import Row from 'react-bootstrap/Row';
import LocationCard from './LocationCard.js';
import Weather from './Weather.js';
import Movie from './Movie.js';

class Main extends Component {
    render() {
        return (
            <>
                {this.props.locationObj.display_name ? <LocationCard locationObj={this.props.locationObj}/> : <h3>Enter a location to explore, to find local details...</h3>}
                <Row style={{width: '54rem', marginLeft: '0rem'}}>
                    {this.props.forcastArr ? this.props.forcastArr.map(forcastObj => {
                        return <Weather forcast={forcastObj} key={forcastObj.date}/>    
                    }) : <small style={{textAlign: 'center', margin: '5px 0'}}>No forcast data for this location...</small>
                    }
                </Row>
                <Row style={{width: '54rem', marginLeft: '0rem'}}>
                    {this.props.movieArr ? this.props.movieArr.map(movieObj => {
                        return <Movie movieArr={movieObj} key={movieObj.title}/>}) 
                        : <small style={{textAlign: 'center', margin: '5px 0'}}>No movie data for this location...</small>
                    }
                </Row>
            </>    
        )
    }
}

export default Main;