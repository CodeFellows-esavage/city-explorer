import { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class SearchBar extends Component {
    
    locationSubmit = (e) => {
        //execute some function to update locationQuery
        e.preventDefault();
        console.log(e.target.city.value);
    }

    render() {
        return (
            <Form onSubmit={this.locationSubmit}>
                <Row>
                    <Col xs={7}>
                        <Form.Control name="city" placeholder="City" />
                    </Col>
                    {/* <Col>
                        <Form.Control placeholder="State" />
                    </Col> */}
                    <Col>
                        <Button type="submit" className="mb-2">
                            Explore!
                        </Button>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default SearchBar;