import { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

class Footer extends Component {
    render() {
        return (
            <Row sm={2} style={{display: 'flex', alignItems: 'center', width: '54rem', justifyContent: 'space-between'}}>
                <p style={{margin: "0"}}> Developed By: Erik Savage </p>
                <Col style={{textAlign: 'right', fontSize: '24px'}}>
                    <a style={{margin: ".8rem"}} href="https://www.github.com/eriksavage"><FaGithub/></a>
                    <a href="https://www.linkedin.com/in/erikksavage"><FaLinkedin/></a>
                </Col>
            </Row>    
        )
    }
}

export default Footer;