import React from "react";
import { Accordion } from "react-bootstrap";
import './../styles/faq.css'

export default function Faq() {
  return (
   <div className="faq-section">
    <div className="custom-container">
    <div className="accordion-container">
    <Accordion defaultActiveKey="0">
        {/* Accordion Item 1 */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>What types of properties do you specialize in?</Accordion.Header>
          <Accordion.Body>
          We specialize in multifamily properties, including duplexes, triplexes, apartment buildings, and mixed-use developments. Our focus is primarily on the Minneapolis and Twin Cities area, ensuring deep market knowledge and tailored advice.
          </Accordion.Body>
        </Accordion.Item>

        {/* Accordion Item 2 */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>How can Minneapolis Landlords help me find a profitable investment?</Accordion.Header>
          <Accordion.Body>
          We specialize in multifamily properties, including duplexes, triplexes, apartment buildings, and mixed-use developments. Our focus is primarily on the Minneapolis and Twin Cities area, ensuring deep market knowledge and tailored advice.
          </Accordion.Body>
        </Accordion.Item>

        {/* Accordion Item 3 */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>What is included in your property valuation service?</Accordion.Header>
          <Accordion.Body>
          We specialize in multifamily properties, including duplexes, triplexes, apartment buildings, and mixed-use developments. Our focus is primarily on the Minneapolis and Twin Cities area, ensuring deep market knowledge and tailored advice.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
   </div>
   </div>
  );
}
