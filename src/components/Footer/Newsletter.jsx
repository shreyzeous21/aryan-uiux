import React from "react";

import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Order Box" />
      <h1 className="headtext__cormorant">Give Your Order Here</h1>
      <p className="p__opensans">Be Ready to Eat!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <form action="https://formspree.io/f/meqwbbwp" method="POST">
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
        />
        <input name="message" placeholder="Your Name" />
        <input name="message" placeholder="Table No" />
        <input name="message" placeholder="what you like to eat" />
        <button type="submit" className="custom__button">Send Order</button>
      </form>
      
    </div>
  </div>
);

export default Newsletter;
