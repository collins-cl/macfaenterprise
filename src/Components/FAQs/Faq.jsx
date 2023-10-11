import React from "react";
import "../FAQs/Faq.scss";
import "../FAQs/Faq.css";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { FaPlus } from "react-icons/fa";

const Faq = () => {
  return (
    <div className="faq">
      <div className="wrapper">
        <div className="title">Frequently Asked Questions</div>

        <h2>Communication is everthing</h2>

        <h3>
          Here are some curated Frequently Asked Questions and the answers to
          these questions straight from our most trusted engineers
        </h3>

        <div className="accordion">
          <Accordion className="accordionbody">
            <AccordionSummary
              expandIcon={<FaPlus fill="#f9964b"/>}
              className="accordionsummary"
            >
              What types of Generators do you offer?
            </AccordionSummary>

            <AccordionSummary className="accordiondetails">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              temporibus enim. Molestiae similique modi quae illo aliquid eius
              nulla exercitationem consequuntur consequatur.
            </AccordionSummary>
          </Accordion>

          <Accordion className="accordionbody">
            <AccordionSummary
              expandIcon={<FaPlus fill="#f9964b"/>}
              className="accordionsummary"
            >
              Are your transformers customizable?
            </AccordionSummary>

            <AccordionSummary className="accordiondetails">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              temporibus enim. Molestiae similique modi quae illo aliquid eius
              nulla exercitationem consequuntur consequatur.
            </AccordionSummary>
          </Accordion>

          <Accordion className="accordionbody">
            <AccordionSummary
              expandIcon={<FaPlus fill="#f9964b"/>}
              className="accordionsummary"
            >
              How can i request for a quote for a product?
            </AccordionSummary>

            <AccordionSummary className="accordiondetails">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              temporibus enim. Molestiae similique modi quae illo aliquid eius
              nulla exercitationem consequuntur consequatur.
            </AccordionSummary>
          </Accordion>

          <Accordion className="accordionbody">
            <AccordionSummary
              expandIcon={<FaPlus fill="#f9964b"/>}
              className="accordionsummary"
            >
             What factors affect pricing of product?
            </AccordionSummary>

            <AccordionSummary className="accordiondetails">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              temporibus enim. Molestiae similique modi quae illo aliquid eius
              nulla exercitationem consequuntur consequatur.
            </AccordionSummary>
          </Accordion>

          <Accordion className="accordionbody">
            <AccordionSummary
              expandIcon={<FaPlus fill="#f9964b"/>}
              className="accordionsummary"
            >
              Is technical support available 24/7?
            </AccordionSummary>

            <AccordionSummary className="accordiondetails">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              temporibus enim. Molestiae similique modi quae illo aliquid eius
              nulla exercitationem consequuntur consequatur.
            </AccordionSummary>
          </Accordion>

          <Accordion className="accordionbody">
            <AccordionSummary
              expandIcon={<FaPlus fill="#f9964b"/>}
              className="accordionsummary"
            >
             What is your shipping process?
            </AccordionSummary>

            <AccordionSummary className="accordiondetails">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              temporibus enim. Molestiae similique modi quae illo aliquid eius
              nulla exercitationem consequuntur consequatur.
            </AccordionSummary>
          </Accordion>

          <Accordion className="accordionbody">
            <AccordionSummary
              expandIcon={<FaPlus fill="#f9964b"/>}
              className="accordionsummary"
            >
             Do your product come with a warranty?
            </AccordionSummary>

            <AccordionSummary className="accordiondetails">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              temporibus enim. Molestiae similique modi quae illo aliquid eius
              nulla exercitationem consequuntur consequatur.
            </AccordionSummary>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
