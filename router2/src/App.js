import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {PageOne, PageTwo} from './Components/Pages';
import Blog from './Components/Blog';
import {MainPage} from './MainPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage/>}>
      <Route index element={<div>No page is selected.</div>}/>
      <Route path="one" element={<PageOne/>}/>
      <Route path="two" element={<PageTwo/>}/>
      <Route path="blog" element={<Blog/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
