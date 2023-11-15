import computerImage from "../../assets/thirdPageImage.png";
import arrowIcon from "../../assets/arrow-icon.png";

import "./page2.scss";

function Page2() {
  return (
    <div className="thirdPage">
      <div className="blueBar"></div>
      <div className="computerImg">
        <img src={computerImage} style={{ width: "750px", height: "440px" }} />

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
              style={{
                width: "52px",
                height: "52px",
                marginLeft: "16px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page2;
