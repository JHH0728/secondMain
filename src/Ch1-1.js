import "./css/CH1_1.css";
import ch1 from "./img/Rectangle 372.png";
import ch2 from "./img/image_237.png";
import ch3 from "./img/image_238.png";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CH1_1 = () => {

  const navigate = useNavigate();

  var b = '';

  const a = () => {
    b = 2;
  } 

  const nextstory = () => {

  var name = sessionStorage.getItem('name');

  axios
      .post('http://localhost:8008/getstory', {
        scenario_num: 1,
        chapter_num: 1,
        scene_num: 5,
      })
      .then((res) => {
        console.log('스토리 리턴값 확인2 => ' + JSON.stringify(res));
        window.sessionStorage.setItem('scence 1-5-1', JSON.stringify(res.data[b].speak_story).substring(1,JSON.stringify(res.data[4].speak_story).length-1));
        window.sessionStorage.setItem('scence 1-5-2', JSON.stringify(res.data[6].speak_story).substring(1,JSON.stringify(res.data[6].speak_story).length-1));
        window.sessionStorage.setItem('scence 1-5-3', JSON.stringify(res.data[7].speak_story).substring(1,JSON.stringify(res.data[7].speak_story).length-1));
        document.getElementById('test4').innerText = '나 ' + name + ", " + sessionStorage.getItem('scence 1-5-1');
        document.getElementById('test5').innerText = sessionStorage.getItem('scence 1-5-2');
        document.getElementById('test6').innerText = sessionStorage.getItem('scence 1-5-3');
      })
      .catch((e) => {
        console.error(e);
      });  

      navigate('/test2')
  }
  
  return (
    <div className="ch1-1-div">
      <div className="rectangle-div1" onClick={nextstory} >
        <img className="polygon-icon" alt="" src={ch1} />
      </div>
      <b className="b" onClick={nextstory}>
        <p className="p" id="test1"></p>
        <p className="p" id="test2"></p>
        <p className="p">&nbsp;</p>
        <p className="p2" id="test3"></p>
        <button onClick={a}>다음</button>
      </b>
      <img className="image-237-icon" alt="" src={ch2} />
      <img className="image-238-icon" alt="" src={ch3} />
    </div>
  );
};

export default CH1_1;