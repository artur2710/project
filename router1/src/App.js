import logo from './logo.svg';
import './App.css';
import Contact from './Components/Contact';
import About from './Components/About';
import MainPage from './MainPage';
import Products from './Components/Products';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage/>}>
      <Route index element={<div>Home</div>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
