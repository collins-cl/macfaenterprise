import React from "react";
import "../WhyUs/WhyUs.scss";
import banner from "../../assets/cat1.jpeg";

const WhyUs = () => {
  return (
    <div className="whyus">
      <div className="wrapper">
        <div className="img">
          <div className="border"></div>
          <img src={banner} width={380} alt="" />
        </div>

        <div className="container">
          <div className="head">Expertise</div>

          <div className="reason">Why you should choose us</div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, perspiciatis consectetur quas eaque nisi eveniet
            accusantiumquod harum dolorem totam. Suscipit, quia.
          </p>

          <div className="details">
            <div className="project">
              <span>50+</span>
              <p>Project Completed</p>
            </div>

            <div className="install">
              <span>Installation Included</span>
              <p>
                Just in case you're not a licensed electrician with your own
                installation crew.
              </p>
            </div>

            <div className="plans">
              <span>We've got your back</span>
              <p>
                We're with you every step of the way, from the initial plans to
                the permits and paperwork.
              </p>
            </div>

            <div className="customers">
              <span>70+</span>
              <p>Unique Customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
