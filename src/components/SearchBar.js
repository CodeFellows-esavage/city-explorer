import { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class SearchBar extends Component {
    
    formSubmit = (e) => {
        //execute some function to update locationQuery
        e.preventDefault();
        this.props.resetState();
        this.props.locQryUpdt(e.target.location.value.toLowerCase());
    }



    render() {
        return (
            <Form onSubmit={this.formSubmit}>
                <Row>
                    <Col md={10}>
                        <Form.Control name="location" placeholder="Location" />
                    </Col>
                    <Col >
                        <Button type="submit" className="mb-2" style={{width: '122px'}}>
                            Explore!
                        </Button>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default SearchBar;