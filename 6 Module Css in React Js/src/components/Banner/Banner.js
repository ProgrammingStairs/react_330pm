import '../../css/style2.css';
import banner from '../../images/banner.jpg';
import bannerStyle from './bannerStyle.module.css';
function Banner(){
    return (<div className={bannerStyle.banner}>
            <img src={banner} className={bannerStyle.bannerImg} alt=""/>
        </div>);
}
export default Banner;