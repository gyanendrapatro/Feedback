import React, {useState} from 'react';
import {Button, Modal, InputGroup, FormControl} from "react-bootstrap";
import {StarRatings,} from 'react-star-ratings';
import Rating from '@mui/material/Rating';

const JoinEventModal = (props) => {
    const {showModal, modalContent, showModalCallback} = props
    const [show, setShow] = useState(showModal);
    const ft = modalContent.MemberNames

    const handleClose = () => {
        setShow(false)
        showModalCallback(false)
    }

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>{modalContent.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
            <div>{"Date: " + modalContent.date}</div>
            <div>{"Type: " + modalContent.type}</div>
            <div>{"Location: " + modalContent.location}</div>
            <div>{"No of Persons: " + modalContent.NoofPersons}</div>
            {modalContent.MemberNames.map((card, index) => (<div className="p-1">
                {console.log(card.Name)}
                {"Name: " + card.Name +" | "+ "Rating: "+ card.rating}
                <div><Rating name="half-rating-read" defaultValue={card.rating} precision={0.2} readOnly /></div>
                </div>))}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Ok Got it
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
export default JoinEventModal