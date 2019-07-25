import React from "react";
import "./Content.scss";
import work1 from "../img/how-it-works-1.png";
import work2 from "../img/how-it-works-2.png";
import work3 from "../img/how-it-works-3.png";

const content = () => (
  <section className="contents">
    <div className="content">
      <h3>How it works.</h3>
      <div className="content_wrapper">
        <div className="content1">
          <img src={work1} alt="How it work 1" />
          <div className="contentchild">
            <span className="num">1.</span>
            <span>Type a name and hit enter to start searching</span>
          </div>
        </div>
        <div className="content2">
          <img src={work2} alt="How it work 2" />
          <div className="contentchild">
            <span className="num">2.</span>
            <span>Get instant result with contact details</span>
          </div>
        </div>

        <div className="content3">
          <img src={work3} alt="How it work 3" />
          <div className="contentchild">
            <span className="num">3.</span>
            <span>Sign up or sign in reveal more information</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default content;
