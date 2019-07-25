import React from "react";
import "./Contact.scss";
const contact = () => (
  <section className="contact">
    <div className="segment1">
      <h1>Need more information on a contact?</h1>
      <p>
        Get started with your account today and access up to 500,000 with our
        instant search. if you are ready have an account with us, simply sign
        in.
      </p>
      <a href="/">Get Started</a>
    </div>

    <div className="segment2">
      <div className="placeholder1 card">
        <div className="circle" />
        <div className="lines">
          <div className="line1" />
          <div className="line2" />
        </div>
      </div>
      <div className="placeholder2 card">
        <div className="circle" />
        <div className="lines">
          <div className="line1" />
          <div className="line2" />
        </div>
      </div>
      <div className="placeholder3 card">
        <div className="placeholder-top">
          <div className="circle" />
          <div className="lines">
            <div className="line1" />
            <div className="line2" />
          </div>
        </div>
        <div className="placeholder-bottom">
          <div className="circle-small">
            <div className="circle-small-item" />
            <div className="circle-small-item" />
          </div>
          <div className="lines">
            <div className="line1 last-item-1" />
            <div className="line2 last-item-2" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default contact;
