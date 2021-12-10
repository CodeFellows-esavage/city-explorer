import { Component } from 'react';
import Row from 'react-bootstrap/Row';
import MovieDetail from './MovieDetail'


class Movies extends Component{
    render(){
        return(
            <Row style={{width: '54rem', marginLeft: '0rem'}}>
                {this.props.movieArr ? this.props.movieArr.map(movieObj => {
                    return <MovieDetail movieArr={movieObj} key={movieObj.title}/>}) 
                    : <small style={{textAlign: 'center', margin: '5px 0'}}>No movie data for this location...</small>
                }
            </Row>
        )
    }
}

export default Movies;