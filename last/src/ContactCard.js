import React from "react";

function ContactCard(props) {
    return (
        <div className="contact-card">
            <img align="center" src={props.imgUrl} width="auto" height="250px" alt="man"/>
            <h3 style={{color: "#3AC1EF"}}>{props.name}</h3>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}

export default ContactCard

