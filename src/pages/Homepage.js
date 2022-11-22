import React from "react";
import { Container } from "react-bootstrap";
import "./Homepage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import mainLogo from "./images/로고.png";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from 'react';
import axios from 'axios';


const Homepage = () => {

  const navigate = useNavigate();

  const gojoin = () => {
    navigate('/join');
  }

  const gologin = () => {
    navigate('/login');
  }

  const gologout = () => {
    alert('세션 제거전 => ' + sessionStorage.getItem('id') );
    sessionStorage.removeItem('id');
    alert('세션 제거후 => ' + sessionStorage.getItem('id') );
    navigate('/');
  }

  const firststory = () => {
    axios
      .post('http://localhost:8008/getstory', {
        scenario_num: 1,
        chapter_num: 1,
        scene_num: 1,
      })
      .then((res) => {
        console.log('스토리 리턴값 확인1 => ' + JSON.stringify(res));
        window.sessionStorage.setItem('scence 1-1-1', JSON.stringify(res.data[0].speak_story).substring(1,JSON.stringify(res.data[0].speak_story).length-1));
        window.sessionStorage.setItem('scence 1-1-2', JSON.stringify(res.data[1].speak_story).substring(1,JSON.stringify(res.data[1].speak_story).length-1));
        window.sessionStorage.setItem('scence 1-1-3', JSON.stringify(res.data[2].speak_story).substring(1,JSON.stringify(res.data[2].speak_story).length-1));      
        document.getElementById('test1').innerText = sessionStorage.getItem('scence 1-1-1');
        document.getElementById('test2').innerText = sessionStorage.getItem('scence 1-1-2');
        document.getElementById('test3').innerText = sessionStorage.getItem('scence 1-1-3');
      })
      .catch((e) => {
        console.error(e);
      });
  }
  
  if(sessionStorage.getItem('id') == null){
    return (
      <div className="containers">
        <Container>
          <div className="mainheader">
            <img className="mainLogo" src={mainLogo} />
            <div className="mainHeaderButtons">
              <button onClick={gojoin}>회원가입</button>
              <button onClick={gologin}>로그인</button>
            </div>
          </div>
          <div className="MainScreen">
            <div>안녕하세요</div>
          </div>
          <div className="Homepage-Nav">
            <Link to="/scecheck">홈페이지</Link>
            <Link to="/test" onClick={firststory}>테스트</Link>
            <Link to="/my">마이페이지</Link>
          </div>
        </Container>
      </div>
    );
  }else{
    return (
      <div className="containers">
        <Container>
          <div className="mainheader">
            <img className="mainLogo" src={mainLogo} />
            <div className="mainHeaderButtons">
              <button onClick={gologout}>로그아웃</button>
            </div>
          </div>
          <div className="MainScreen">
            <div>안녕하세요</div>
          </div>
          <div className="Homepage-Nav">
            <Link to="/scecheck">홈페이지</Link>
            <Link to="/test" onClick={firststory}>테스트</Link>
            <Link to="/my">마이페이지</Link>
          </div>
        </Container>
      </div>
    );
  }
};

export default Homepage;
