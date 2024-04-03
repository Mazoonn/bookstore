import React from 'react';
import {Col, Modal, Row} from 'react-bootstrap';
import CardBook from "./CardBook";

const BookPopUp = ({ book , show, handleClose }:any) => {
  return (
      <Modal show={show} onHide={() => handleClose()}>
        <Modal.Body>
            <Modal.Header closeButton>
            </Modal.Header>
            <Col style={{width: '100%', display:"flex", justifyContent:"center"}}>
                <CardBook showDataOnly={true} data={book}/>

            </Col>
        </Modal.Body>
      </Modal>  );
};

export default BookPopUp;