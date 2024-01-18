import { Link, Outlet } from 'react-router-dom';
export const MainPage = () => (
<>
<nav>
    <ul>
        <li>
            <Link to="/one">Page One</Link>
        </li>
        <li>
            <Link to="/two">Page Two</Link>
        </li>
        <li>
            <Link to="/blog">Blog</Link>
        </li>
    </ul>
</nav>
<hr />
<Outlet />
</>
    );

export default MainPage