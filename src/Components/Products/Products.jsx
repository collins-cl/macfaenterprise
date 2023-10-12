import React, { useState, useEffect } from "react";
import "../Products/Products.scss";
import productImage from "../../assets/cat1.jpeg";
import { productsDummy } from "../productsdummy";

const Products = () => {
  const data = productsDummy;
  const [itemclicked, setItem] = useState("");
  const [type, setType] = useState("");

  const handleQoute = (item) => {
    setItem(item.Type);
    setType(item.itemType);
  };

  useEffect(() => {
    console.log(itemclicked);
    console.log(type);

    let number = +2348060015910;
    let message = `Hi, i would love to know the quote for ${type} ${itemclicked}  sir, I got redirected from your website`;

    let url = `https://web.whatsapp.com/send?phone=${number}`;

    url += `&text=${encodeURI(message)}&app_absent=0`;

    window.open(url);
  }, [handleQoute]);

  return (
    <div className="products">
      <div className="wrapper">
        <div className="title">Check out our products</div>
        <h3>
          MacFa Enterprise is the home for every kinds and types of
          transfoermers, generators and sycnhronising panels, this sets our
          standard high in the industry. We plan to help you meet your needs
          with our equipments with our distribution and support system, and the
          continual consultation from our top engineers
        </h3>

        <div className="container">
          {data &&
            data.map((item, id) => (
              <div className="box" key={id}>
                <h3 className="head">{item.Type}</h3>

                <h2 className="power-rating">{item.rating}</h2>

                <img src={productImage} width={350} alt="" />

                <div className="type">
                  Product type: <span>{item.itemType}</span>
                </div>

                <p>{item.desc}</p>

                <div
                  className="get-quote"
                  onClick={() => {
                    handleQoute(item);
                  }}
                >
                  Get a quote
                </div>
              </div>
            ))}
        </div>

        <div className="inquire-more">
          To inquire more about varities of our products, contact us on any of
          our social handles below
        </div>
      </div>
    </div>
  );
};

export default Products;
