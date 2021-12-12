import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Row from 'react-bootstrap/Row';

class LocationCard extends Component {
    render(){
        return(
            <>
                <Card style={{ width: '54rem' }}>
                    <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_EXPLORER_KEY}&center=${this.props.locationObj.lat},${this.props.locationObj.lon}&zoom=13.9&size=1000x800`} />
                    <Card.Body>
                        <Card.Title style={{textAlign: 'center'}}>{this.props.locationObj.display_name}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush" style={{marginLeft: '1.5rem'}}>
                        <Row sm={2} style={{width: "100%"}}>
                            <ListGroupItem>{`Latitude: ${this.props.locationObj.lat}`}</ListGroupItem>
                            <ListGroupItem>{`Longitude: ${this.props.locationObj.lon}`}</ListGroupItem>
                        </Row>    
                    </ListGroup>
                </Card>
            </>    
        )
    }
}

export default LocationCard;