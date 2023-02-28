import React from "react";
import "../css/footer.css";
const Footer = () => {
  // initialize a new date method
  let Year = new Date().getFullYear();
  return (
    <div class="FooterContainer">
      <div class="FoTitle">
        <h2>© For news {Year} </h2>
      </div>
      <div class="contact">
        <div class="rows">
          <a href="https://developers.facebook.com/blog/" className="fb">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="https://newsapi.org/" className="google">
            {" "}
            <i class="fa-brands fa-google"></i>{" "}
          </a>
          <a href="https://github.com/raihan-jishan" className="github">
            {" "}
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
