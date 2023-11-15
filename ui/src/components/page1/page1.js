import carousal2 from "../../assets/carousal2.png";
import carousal3 from "../../assets/carousal3.png";
import Union from "../../assets/Union.png";
import Union_large from "../../assets/Union_large.png";
import Hamburger from "../../assets/hamburgerIcon.png";

import "./page1.scss";

function Page1() {
  return (
    <div className="sceondPage">
      <div className="blueBar">
        <p className="title">Lorem</p>
        <p className="subtitle">subtitle</p>
      </div>
      <div className="carousal">
        <div className="firstImg">
          <p className="serialNo">01</p>
          <p className="heading">Lorem ipsum dolor sit</p>
          <p className="discription">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className="firstImg">
          <p className="serialNo">02</p>
          <p className="heading">Lorem ipsum dolor sit</p>
          <p className="discription">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className="thirdImg">
          <p className="serialNo">03</p>
          <p className="heading">Lorem ipsum dolor sit</p>
          <p className="discription">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </div>
    </div>
  );
}

export default Page1;
