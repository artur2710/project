import { useState } from 'react';
//Greetings Component
export default function Greetings(props) {
    return (
        <h2>
            Hello! I'm {props.name}, a {props.age} years old
            {props.occupation}.
            Pleased to meet you
        </h2>
    );
}

function App() {
    return (
      <div className='contacts'>
    <ContactCard
    name="Victor"
    imgUrl="https://catherineasquithgallery.com/uploads/posts/2021-02/1614528145_173-p-muzhchina-na-belom-fone-206.jpg"
    phone="(212) 555-2345"
    email="dfdffdd@me.com"/>
    <ContactCard
    name="Sergey"
    imgUrl="https://catherineasquithgallery.com/uploads/posts/2021-02/thumbs/1614528007_43-p-muzhchina-na-belom-fone-49.jpg"
    phone="(212) 444-2345"
    email="hhdffdd@me.com"/>
    <ContactCard
    name="Andrey"
    imgUrl="https://catherineasquithgallery.com/uploads/posts/2021-02/thumbs/1614528057_41-p-muzhchina-na-belom-fone-47.png"
    phone="(212) 333-2345"
    email="fggfdd@me.com"/>
    <ContactCard
    name="Igor"
    imgUrl="https://catherineasquithgallery.com/uploads/posts/2021-02/thumbs/1614528072_100-p-muzhchina-na-belom-fone-117.jpg"
    phone="(212) 111-2345"
    email="dddddd@me.com"/>
      </div>
    )}

