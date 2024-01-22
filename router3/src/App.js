import logo from './logo.svg';
import './App.css';
//import Component from './Component';
import { useState } from 'react';
import Car from './Cars/Car';

function App() {
 let [cars, setCars] = useState([
  {name: 'Ford', year: 2018, id:0},
  {name: 'Audi', year: 2016, id:1},
  {name: 'Mazda', year: 2010, id:2},
 ]);

 let [toggle, setToggle] = useState(false);

 const [form, setForm] = useState({
  id: "",
  name: "",
  year: ""
 });

 function handleChange(index, event) {
  cars[index].name = event.target.value;
  setCars([...cars]);
 }

 function removeItems(index){
  let id = index;
  let newCars = cars.filter(function(car){
    return +car.id !==id;
  });
 
setCars([...newCars]);
 }

 function handleIdChange(event){
  setForm({...form, id: event.target.value});
 }
 function handleNameChange(event){
  setForm({...form, name: event.target.value});
 }
 function handleYearChange(event){
  setForm({...form, year: event.target.value});
 }

 const divStyle = {
  textAlign: 'center'
 }
 let carsNew = '';
 if (toggle){
  carsNew = cars.map((car, index)=>
  <Car key={index} name={car.name} year={car.year}
  onDelete={()=>removeItems(index)} 
  onChangeName={(event)=>handleChange(index,event)}/>
  )
 }

 return (
  <div style={divStyle}>
    <h1>React components</h1>
    <form onSubmit={handleFormSubmit}>
      <input value={form.name} type='text' onChange={handleNameChange}></input>
      <input value={form.year} type='text' onChange={handleYearChange}></input>
      <input value={form.id} type='text' onChange={handleIdChange}></input>
      <button type='submit' class="btn btn-primary">Add</button>
      </form>
    <button onClick={()=> setToggle(!toggle)}>Toggle cars
    </button>

    {carsNew}
  </div>
 );
}


export default App;
