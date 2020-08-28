import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';

const Friends = (props) => {
    // console.log(props.friend);
    const { name, username, email, address, company, phone, website, img } = props.friend;
    const ulStyle = {
        listStyle: 'none',
        textAlign: 'start',
        marginTop: '5px',
        fontWeight: 'bold'
    }
    return (
        <div className="d-flex justify-content-start p-2">
            <img className="w-25" src={img} alt=""/>
            <ul style={ulStyle}>
                <li>Name: {name}</li>
                <li>Username: {username}</li>
                <li>Email: {email}</li>
                <li>Address: {address.street, address.city, address.zipcode} </li>
                <li>Company: {company.name}</li>
                <li>Phone: {phone}</li>
                <li>Website: {website}</li>
                <button className="btn btn-primary p-2"><FontAwesomeIcon icon={faAddressCard} /> Add Friend</button>
            </ul>
        </div>
    );
};

export default Friends;