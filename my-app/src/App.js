/*import logo from './logo.svg';
import './App.css';*/
import AboutPage from "./AboutPage";
import ImageObj from "./ImageObj";
import MyButton from "./MyButton";

export default function App() {
  let content;
  let isLoggedIn = false;
  if (isLoggedIn) {
    content = <MyButton/>;
  } else {
    content = <ImageObj/>
  }

  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton/>
      <AboutPage/>
      <div>
        {content}
      </div>
    </div>
  );
}

//export default App;
