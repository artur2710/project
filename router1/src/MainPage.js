import { Link, Outlet } from 'react-router-dom';
function MainPage() {
    return(
<>
<nav>
    <ul className='One'>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/products">Products</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
    </ul>
</nav>
<hr />
<Outlet />
</>
    );
}

export default MainPage