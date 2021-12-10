import { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class ErrorModal extends Component {
    
    handleClose = () => {
        this.props.resetState();
    }
    
    render() {
        return(
            <Modal show={this.props.error} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Error!</Modal.Title>
                </Modal.Header>
                <Modal.Body>{this.props.errorMsg}</Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={this.handleClose}>
                    Close
                </Button>
                </Modal.Footer>
          </Modal>
        )
    }
}

export default ErrorModal;