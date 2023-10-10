import React from "react";
import "../Services/Services.scss";
import one from "../../assets/01.png";
import two from "../../assets/02.png";
import three from "../../assets/03.png";
import four from "../../assets/04.png";

const Services = () => {
  return (
    <div className="services">
      <div className="wrapper">
        <h3>What we do</h3>

        <h4>
          Ready to take our services to the nexy level? Check out the things we
          do and the services we provide to our unwavering customers
        </h4>

        <div className="container">
          <div className="box">
            <img src={one} width={50} alt="" />

            <h2>MacFa Equipments Maintenance & Repairs</h2>

            <p>
              Keep your MacFa equipment in top condition and ready to work. We
              provide fast, professional services for planned equipment
              maintenance and repairs
            </p>
          </div>

          <div className="box">
            <img src={two} width={50} alt="" />

            <h2>Generators and Transformers installation</h2>

            <p>
              Keep your MacFa equipment in top condition and ready to work. We
              provide fast, professional services for planned equipment
              maintenance and repairs
            </p>
          </div>

          <div className="box">
            <img src={three} width={50} alt="" />

            <h2>MacFa Engineers Consultation</h2>

            <p>
              Keep your MacFa equipment in top condition and ready to work. We
              provide fast, professional services for planned equipment
              maintenance and repairs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
