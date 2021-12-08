import { Component } from 'react';
import Card from 'react-bootstrap/Card';

class Weather extends Component{
    render() {
        return(
            <Card style={{ width: '18rem', textAlign: 'center'}}>
                <Card.Body>
                    <Card.Title>{this.props.forcast.date}</Card.Title>
                    <Card.Text>
                        {this.props.forcast.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default Weather;