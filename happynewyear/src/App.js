import './App.css';
import Book from "./Book"
import BooksData from "./Books"
import Cities from './Cities';

function App() {
  const bookComponents = BooksData.map(item => <Book book={item}/>)

  return (
    <Cities/>

  );
}

export default App;
