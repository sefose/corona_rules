import React from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const EvaluationModal = ({show, setShow, evaluateText}) => {
  
    const handleClose = () => setShow(false);
  
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Auswertung</Modal.Title>
          </Modal.Header>
          <Modal.Body>{evaluateText}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Schließen
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
 export default EvaluationModal;