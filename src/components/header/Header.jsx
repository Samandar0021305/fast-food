import { Link } from "react-router-dom";

function Header(){
    return(
        <nav>
        <div class="nav-wrapper">
        <a href="#" class="brand-logo">Logo</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>Menu</Link></li>
        <li><Link to='/contacts'>Contacts</Link></li>
        </ul>
        </div>
    </nav>
    )
}

export default Header;