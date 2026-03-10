import '../../css/style2.css';
import navbarStyle from './navbarStyle.module.css';
function Navbar(){
    return (<div className={navbarStyle.nav}>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Product &#9662;</a>
                    <ul>
                        <li><a href="">Product1</a></li>
                        <li><a href="">Product2</a></li>
                        <li><a href="">Product3</a></li>
                        <li><a href="">Product4</a></li>
                        <li><a href="">Product5</a></li>
                    </ul>
                </li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="signin.html">SignIn</a></li>
                <li><a href="signup.html">SignUp</a></li>
            </ul>
        </div>
        );
}
export default Navbar;