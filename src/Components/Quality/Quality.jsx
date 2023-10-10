import React from "react";
import "../Quality/Quality.scss";
import cat1 from "../../assets/cat1.jpeg";
import { FaArrowRight } from "react-icons/fa";

const Quality = () => {
  return (
    <div className="quality">
      <div className="wrapper">
        <h3>What we offer</h3>

        <h2>
          Innovative <span>energy solutions</span>
        </h2>

        <div className="container">
          <div className="box1">
            <img src={cat1} width={90} alt="" />

            <p>Generator</p>

            <div className="desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
              sunt sint neque, commodi alias asperiores! Perferendis recusandae
              impedit modi quaerat.
            </div>
          </div>

          <div className="box1">
            <img src={cat1} width={90} alt="" />

            <p>Transformer</p>

            <div className="desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
              sunt sint neque, commodi alias asperiores! Perferendis recusandae
              impedit modi quaerat.
            </div>
          </div>

          <div className="box1">
            <img src={cat1} width={90} alt="" />

            <p>Panels</p>

            <div className="desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
              sunt sint neque, commodi alias asperiores! Perferendis recusandae
              impedit modi quaerat.
            </div>
          </div>

          <div className="box2">
            <span>Quality is our specialty</span>

            <div className="desc">
              Get a quote and get to experience first hand our artwork
            </div>

            <div className="get-quote">
              Get a quote <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
