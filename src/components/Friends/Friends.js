import React from 'react';
import '../../assets/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { Card } from 'react-bootstrap';
import { useState } from 'react';



const Friends = (props) => {
    // console.log(props.friend);
    const { name, username, email, address, company, phone, website, img } = props.friend;

    // Change text when btn clicked
    const [text, setText] = useState('Add Member');

    // Validation - handling onClick whether member is added or Not
    const handleOnClick = () => {
        if (text === 'Added') alert('You have already added this member!')
        else {
            props.addMember(props.friend);
            setText('Added');
        }
    }


    return (
        <>
            <Card border="primary" style={{ textAlign: 'left' }}>
                <Card.Img variant="top" src={img} style={{}} />
                {/* <Image src={img} roundedCircle  /> */}
                <Card.Body>
                    <Card.Title> {name} </Card.Title>
                    <Card.Text> <small> Username: {username} </small> </Card.Text>
                    <Card.Text> Email: {email} </Card.Text>
                    <Card.Text> Address: {address.street}, {address.city}, {address.zipcode} </Card.Text>
                    <Card.Text> Company: {company.name} </Card.Text>
                    <Card.Text> Phone: {phone} </Card.Text>
                    <Card.Text> Website: {website} </Card.Text>
                    <button onClick={handleOnClick} className="btn btn-primary"><FontAwesomeIcon icon={faAddressCard} /> {text} </button>
                </Card.Body>
            </Card>
        </>
    );
};

export default Friends;