import '../css/style2.css';
import banner from '../images/banner.jpg';
function Box(){
    return(<div id="box">
            <h2>Gallery Section</h2>
            <div id="box1">
                <img src={banner} id="boxImage" alt="biscuit images"/>
                <h3>Cookie #1</h3>
                <p>Lorem ipsum dolor sit amet  elit.  Qui ut quas cupiditate Qui ut quas cupiditate totam error numquam .</p>
            </div>
            <div id="box2">
                <img src={banner} id="boxImage" alt="biscuit images"/>
                <h3>Cookie #2</h3>
                <p>Lorem ipsum dolor sit amet  elit.  Qui ut quas cupiditate Qui ut quas cupiditate totam error numquam .</p>
            </div>
            <div id="box3">
                <img src={banner} id="boxImage" alt="biscuit images"/>
                <h3>Cookie #3</h3>
                <p>Lorem ipsum dolor sit amet  elit.  Qui ut quas cupiditate Qui ut quas cupiditate totam error numquam .</p>
            </div>
            <div id="box4">
                <img src={banner} id="boxImage" alt="biscuit images"/>
                <h3>Cookie #4</h3>
                <p>Lorem ipsum dolor sit amet  elit.  Qui ut quas cupiditate Qui ut quas cupiditate totam error numquam .</p>
            </div>
        </div>
        );
}
export default Box;