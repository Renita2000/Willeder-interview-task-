import computerImage from "../../assets/thirdPageImage.png";
import arrowIcon from "../../assets/arrow-icon.png";

import "./page2.scss";

function Page2() {
  return (
    <div className="thirdPage">
      <div className="blueBar"></div>
      <div className="computerImg">
        <img src={computerImage}  alt=""/>

        <div className="mainWrapper">
          <div className="mainHeading">
            <p className="loremTitle">Lorem ipsum </p>
            <div className="borderLine"></div>
          </div>
          <p className="loremDiscription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="arrowTitle">
            <p className="arrowHeading">Lorem ipsum</p>
            <img
              src={arrowIcon}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page2;
