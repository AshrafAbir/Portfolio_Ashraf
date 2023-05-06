import React, { useRef, useState , useContext} from "react";
import "./contact.css";
import Phone from "../img/phone.png";
import Email from "../img/email.png";
import Address from "../img/address.png";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../context";


const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const theme = useContext(ThemeContext);

  const darkMode = theme.state.darkMode;



  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_cr2rwlp",
        "template_q03xk9a",
        formRef.current,
        "mSYywEgOqnwJccLwP"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">

        <div className="c-left">
          <h1 className="c-title">Let's discuss about project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              01521200421
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              abir0677@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              1113,East Shewrapara Mirpur Dahka-1216
            </div>

          </div>
          <div className="info-icon">
          <a href="https://www.facebook.com/sky.abir.94/" target="_blank" class="fa fa-facebook"></a>
          <a href="https://www.linkedin.com/in/ashraf-abir-a00019239/" target="_blank" class="fa fa-linkedin"></a>
          <a href="https://github.com/AshrafAbir" target="_blank" class="fa fa-github" ></a>
          </div>

        </div>

        <div className="c-right">
          <p className="c-desc">
            <b>What's your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onClick={handleSubmit}>
            <input style = {{backgroundColor : darkMode && "#3333"}} type="text" placeholder="Name" name="user_name" />
            <input style = {{backgroundColor : darkMode && "#3333"}}  type="text" placeholder="Subject" name="user_subject" />
            <input style = {{backgroundColor : darkMode && "#3333"}}  type="Email" placeholder="Email" name="user_email" />
            <textarea style = {{backgroundColor : darkMode && "#3333"}}  rows="5" placeholder="Message" name="message"></textarea>
            <button>Submit</button>
            {done && "Thank You..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
