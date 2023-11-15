

import "./page3.scss";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import tiktok from "../../assets/tiktok.png";


function Page3() {
  return (
   <div className="animaitonDiv">
    <div className="square"></div>
    <div className="mainFooter">
        <div className="footerPage">
            <p className="footerHome">Home</p>
            <p className="footerHome">page 1</p>
            <p className="footerHome">page 2</p>
        </div>
        <div className="footerBar"></div>
        <div className="footerIcons">
            <img src={facebook}/>
            <img src={twitter}/>
            <img src={instagram}/>
            <img src={tiktok}/>
        </div>
        <div className="copyright">© Logo, Inc.</div>
    </div>
    </div>
   
  );
}

export default Page3;
