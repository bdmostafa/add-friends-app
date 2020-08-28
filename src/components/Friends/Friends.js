import React, { useState } from 'react';
import '../../assets/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { Card, Button } from 'react-bootstrap';


const Friends = (props) => {
    // console.log(props.friend);
    // For built-in fake JSON data
    // const { name, username, email, address, company, phone, website, img } = props.friend;

    // From fetch API
    const { name, login, email, gender, location, cell, dob, picture } = props.friend;

    // Change text on click event
    const [addText, setAddText] = useState('Add Member');
    const [phoneText, setPhoneText] = useState('Show Phone');

    // Validation - handling onClick whether member is added or Not
    const handleAddOnClick = () => {
        if (addText === 'Added') alert('You have already added this member!')
        else {
            props.addMember(props.friend);
            setAddText('Added');
        }
    }

    // Show phone on click event
    const handlePhoneOnCLick = () => {
        if (phoneText === 'Show Phone') setPhoneText(cell);
    }

    return (
        <>
            <Card border="primary" style={{ textAlign: 'left' }}>
                <Card.Img variant="top" src={picture.large} />
                {/* <Image src={img} roundedCircle  /> */}
                <Card.Body>
                    <Card.Title> {name.title} {name.first} {name.last}</Card.Title>
                    <Card.Text> <small> Username: {login.username} </small> </Card.Text>
                    <Card.Text> <a href="mailto:">{email} </a> </Card.Text>
                    <Card.Text> <small> Gender: {gender}</small> </Card.Text>
                    <Card.Text> <small> Age: {dob.age} </small></Card.Text>
                    <Card.Text> <small> Address: {location.street.number}, {location.street.name}, {location.city}, {location.postcode}</small> </Card.Text>
                    <Card.Text> <small> Country: {location.country}</small> </Card.Text>
                    <Card.Text> <strong onClick={handlePhoneOnCLick} style={{cursor: 'pointer'}} > {phoneText}</strong> </Card.Text>
                    <Button onClick={handleAddOnClick} className="btn btn-primary"><FontAwesomeIcon icon={faAddressCard} /> {addText} </Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default Friends;