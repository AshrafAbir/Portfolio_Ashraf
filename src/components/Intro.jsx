import React from "react";
import "./intro.css";
import Me from "../img/me.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-Wrapper">
          <h2 className="intro-introduction">Hello, My name is AA</h2>
          <h1 className="intro-name">Ashraf Abir and a</h1>

          <div className="intro-title">
            <div className="into-title-wrapper">
              <div className="intro-title-item">Web Developer</div>
              <div className="intro-title-item">Gamer</div>
              <div className="intro-title-item">Movie Lover</div>
              <div className="intro-title-item">Coder</div>
              <div className="intro-title-item">Hodophile</div>
            </div>
          </div>

          <p className="intro-description">
            Hello, visitors. I am a BSC engineer from Computer Science. My
            ability is in Web developing mainly in Frontend designing and
            developing. My ambition is to give users a better experince in
            online world by providing easy and uniquely designed web sites with
            the help of recent and advanced technology.
          </p>
        </div>
        <svg 
         className="intro-scrollIcon"
         stroke="yellow"
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 576 512">
         <path d="M0 80v48c0 17.7 14.3 32 32 32H48 96V80c0-26.5-21.5-48-48-48S0 53.5 0 80zM112 32c10 13.4 16 30 16 48V384c0 35.3 28.7 64 64 64s64-28.7 64-64v-5.3c0-32.4 26.3-58.7 58.7-58.7H480V128c0-53-43-96-96-96H112zM464 480c61.9 0 112-50.1 112-112c0-8.8-7.2-16-16-16H314.7c-14.7 0-26.7 11.9-26.7 26.7V384c0 53-43 96-96 96H368h96z" />
        </svg>
      </div>

      <div className="intro-right">
        <div className="intro-backGround"></div>
        <img src={Me} alt="" className="intro-image" />
      </div>
    </div>
  );
};

export default Intro;
