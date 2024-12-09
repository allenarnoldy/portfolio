import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Navigation() {
    // The Navbar UI component will render each of the Link elements in the links prop
    return (
        <ul>
        <Navbar
            links={[
                <Link key={1} className="nav a" to="/">
                    About Me
                </Link>,
                <Link key={2} className="nav a" to="/portfolio">
                    Portfolio
                </Link>,
                <Link key={3} className="nav a" to="/contact">
                    Contact Me
                </Link>,
                <Link key={4} className="nav a" to="/resume"> 
                    Resume
                </Link>,
            ]}
        /></ul>
    );
}