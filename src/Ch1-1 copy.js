import "./css/CH1_1.css";
import ch1 from "./img/Rectangle 372.png";
import ch2 from "./img/image_237.png";
import ch3 from "./img/image_238.png";
import axios from 'axios';

var name = sessionStorage.getItem('name');

const CH1_1 = () => {
  return (
    <div className="ch1-1-div">
      <div className="rectangle-div1" />
      <img className="polygon-icon" alt="" src={ch1} />
      <b className="b">
        <p className="p" id="test4"></p>
        <p className="p" id="test5"></p>
        <p className="p">&nbsp;</p>
        <p className="p2" id="test6"></p>
      </b>
      <img className="image-237-icon" alt="" src={ch2} />
      <img className="image-238-icon" alt="" src={ch3} />
    </div>
  );
};

export default CH1_1;