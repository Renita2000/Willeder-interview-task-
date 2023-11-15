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
        <img src={carousal2} />
        <img src={carousal2} />
        <img src={carousal3} />
      </div>
    </div>
  );
}

export default Page1;
