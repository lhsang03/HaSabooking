import "./introduce.css";
import mockup from "../../assets/mockup.png";
import mockupUi from "../../assets/mockupUI.png";
import appStore from "../../assets/appStore.png";
import googlePlay from "../../assets/googlePlay.png";
import BIG_INTRODUCE from "../../assets/introduce-1.jpg";
import SMALL_INTRODUCE from "../../assets/introduce-2.jpg";


const Introduce = () => {
  return (
    <div className="introduce">
      <div className="ourPurpose">
        <div className="wrapImg">
          <div className="bigImg">
            <img
              src={BIG_INTRODUCE}
              alt=""
            />
          </div>
          <div className="smallImg">
            <img
              src={SMALL_INTRODUCE}
              alt=""
            />
          </div>
        </div>
        <div className="wrapContent">
          <div className="ourTitle">
            We will Make you Happy with our Service
          </div>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            officiis animi, omnis ea odit nesciunt unde, sit eligendi deleniti
            facere modi at, quo voluptas quod. Consequatur, magnam magni!
            Aliquam, rerum.
          </span>
          <div className="statistics">
            <div className="statisticsItem">
              100+<span>Destinations</span>
            </div>
            <div className="statisticsItem">
              200+<span>Hotels</span>
            </div>
            <div className="statisticsItem">
              10+<span>Years Experience</span>
            </div>
          </div>
        </div>
      </div>
      <div className="ourApp">
        <div className="wrapContent">
          <div className="ourTitle">
            Simple Way to Book your Room
          </div>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            officiis animi, omnis ea odit nesciunt unde, sit eligendi deleniti
            facere modi at, quo voluptas quod. Consequatur, magnam magni!
            Aliquam, rerum.
          </span>
          <div className="wrapItem">
            <div className="googlePlay">
              <img src={googlePlay} alt="" />
            </div>
            <div className="appStore">
              <img src={appStore} alt="" />
            </div>
          </div>
        </div>
        <div className="wrapImg">
            <div className="rectangle"></div>
          <div className="smallImg">
            <img src={mockupUi} alt="" />
          </div>
          <div className="bigImg">
            <img src={mockup} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
