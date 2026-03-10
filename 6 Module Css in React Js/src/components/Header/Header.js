import '../../css/style2.css';
import headerStyle from  './headerStyle.module.css';
import logo from '../../images/logo.jpg';
function Header(){
    return(<div className={headerStyle.header}>
            <img src={logo} className={headerStyle.logoImg} alt=""/>
            <span className={headerStyle.heading}>Delicious Bite..</span>
        </div>
    );
}
export default Header;