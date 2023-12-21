import logo from './logo.svg';
import './App.css';
/*import Operations from './Operations';
import Count2 from './Count2';
import Buttons from './Buttons';
import Greetings from './Greetings';
import Hello from './Hello';
import Hello2 from './Hello2';*/
import ContactCard from './ContactCard';

/*function App() {
  const props = {firstName1: 'Pallav', lastName1: 'Hegde'}
  return <Hello2 {...props}/>
}*/



export default function App() {

  let contacts = [
{name: "Victor", imgUrl:"https://catherineasquithgallery.com/uploads/posts/2021-02/1614528145_173-p-muzhchina-na-belom-fone-206.jpg", 
phone:"(212) 555-2345", email:"dfdffdd@me.com"},
{name: "Victor", imgUrl:"https://catherineasquithgallery.com/uploads/posts/2021-02/1614528145_173-p-muzhchina-na-belom-fone-206.jpg", 
phone:"(212) 555-2345", email:"dfdffdd@me.com"}
  ]
  let mapContacts = contacts.map(contact =>
    <ContactCard
    name={contact.name}
    imgUrl={contact.imgUrl}
    phone={contact.phone}
    email={contact.email}
    />)
    return (
      <div className='contacts'>
        {mapContacts}
      </div>
    );
}

/*function App() {
  return <Hello firstName="Pallav" lastName="Hegde"/>
}*/

