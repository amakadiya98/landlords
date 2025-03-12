import React from "react";
import "./../../styles/newsletter.css";

export default function NewsLetter() {
  return (
    <div className="custom-container">
      <div className="newsletter-content">
        <div className="text-content">
            <h4>Maximize Your Success with Twin Cities Multifamily Experts</h4>
            <p>Local expertise to help you achieve your financial goals with confidence.</p>
            <div className="d-flex justify-content-center">
            <button className="secondary-btn white">Connect with an Expert Today</button>
            </div>
        </div>
      </div>
    </div>
  );
}
