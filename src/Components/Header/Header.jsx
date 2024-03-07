import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/photos'>Photos</NavLink>
        </div>
    );
};

export default Header;