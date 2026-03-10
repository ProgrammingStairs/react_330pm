import '../css/style2.css';
import logo from '../images/logo.jpg';
function Header(){
    return(<div id="header">
            <img src={logo} id="logoImg" alt=""/>
            <span id="heading">Delicious Bite</span>
        </div>
    );
}
export default Header;