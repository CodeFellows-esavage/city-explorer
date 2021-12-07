import { Component } from 'react';
import Row from 'react-bootstrap/Row';

class Footer extends Component {
    render() {
        return (
            <Row sm={3} style={{alignItems: 'center', width: '50rem'}}>
                <a href="https://www.github.com"> GitHub </a>
                <p> Developed By: Erik Savage </p>
                <a href="https://www.linkedin.com"> LinkedIn </a>
            </Row>    
        )
    }
}

export default Footer;