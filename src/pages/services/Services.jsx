import React from 'react'
import './../../styles/services.css';
import NewsLetter from '../../component/common/NewsLetter';
import Faq from '../../component/pricing/Faq';
import ServiceBanner from '../../component/services/ServiceBanner';
import ServicesSlider from '../../component/services/ServicesSlider';


export default function Services() {
  return (
    <>
      <ServiceBanner />
      <section className="company-section section-spacing">
        <div className="custom-container">
          <h2 className="section-heading text-center">
            Company Background Section Descriptions
          </h2>
          <div className="company-card d-flex flex-wrap justify-content-center align-items-stretch">
            <div className="company-info">
              <div className="company-img-section d-flex justify-content-center align-items-center">
                <img
                  src="/images/services/company_1.svg"
                  alt="company-img"
                  className="company-img"
                  height={80}
                  width={80}
                />
              </div>
              <h6 className="cards-title text-center">Market Analysis</h6>
              <p className="cards-text text-center">
                Leverage data-driven insights to uncover profitable
                opportunities and make informed investment decisions.
              </p>
            </div>
            <div className="company-info">
              <div className="company-img-section">
                <img
                  src="/images/services/company_2.svg"
                  alt="company-img"
                  className="company-img"
                  height={80}
                  width={80}
                />
              </div>
              <h6 className="cards-title text-center">Investment Strategy</h6>
              <p className="cards-text text-center">
                Tailored strategies to help you achieve long-term success and
                minimize risks in multifamily investments.
              </p>
            </div>
            <div className="company-info">
              <div className="company-img-section">
                <img
                  src="/images/services/company_3.svg"
                  alt="company-img"
                  className="company-img"
                  height={80}
                  width={80}
                />
              </div>
              <h6 className="cards-title text-center">Property Valuation</h6>
              <p className="cards-text text-center">
                Get precise property assessments to ensure competitive pricing
                and maximize profitability.
              </p>
            </div>
          </div>
          <div className="company-btn d-flex justify-content-center align-items-center">
            <button className="primary-btn">Get Started</button>
          </div>
        </div>
      </section>
      <section className="compreh-section section-spacing">
        <div className="custom-container">
          <div className="row justify-content-center align-items-center ">
            <div className="col-md-7">
              <div className="compreh-info">
                <h2 className="section-heading">
                  Comprehensive Multifamily Real Estate Services
                </h2>
                <p className="compreh-text">
                  Explore our tailored solutions designed to simplify your real
                  estate journey and ensure your success. Our expert team
                  provides the tools and insights you need to make confident,
                  profitable decisions.
                </p>
                <button className="compreh-btn primary-btn">
                  List Your Property Today
                </button>
              </div>
            </div>
            <div className="col-md-5">
              <div className="compreh-img-section d-flex justify-content-center align-items-center">
                <img src="/images/services/compreh.svg" alt="compreh-img" className="compreh-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="closing-section section-spacing">
        <div className="custom-container">
          <div>
            <h2 className="section-heading text-center">
              Closing Coordination
            </h2>
            <p className="closing-para text-center">
              Save More, Stress Less The Best in Multifamily Real Estate
            </p>
          </div>
          <div className="closing-card d-flex flex-wrap justify-content-center align-items-center">
            <div className="closing-card-info">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src="/images/services/closing_1.svg"
                  alt="closing-img"
                  className="closing-img"
                  height={130}
                  width={130}
                />
              </div>
              <h6 className="closing-card-title text-center">
                Document Preparation
              </h6>
              <p className="closing-card-text text-center">
                We handle all the paperwork to ensure an efficient process.
              </p>
            </div>

            <div className="closing-card-info">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src="/images/services/closing_2.svg"
                  alt="closing-img"
                  className="closing-img"
                  height={120}
                  width={140}
                />
              </div>
              <h6 className="closing-card-title text-center">
                Coordination with Parties
              </h6>
              <p className="closing-card-text text-center">
                We ensure seamless communication with all stakeholders.
              </p>
            </div>
            <div className="closing-card-info">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src="/images/services/closing_3.svg"
                  alt="closing-img"
                  className="closing-img"
                  height={130}
                  width={130}
                />
              </div>
              <h6 className="closing-card-title text-center">
                Close the Deal and Save Thousands
              </h6>
              <p className="closing-card-text text-center">
                Finalize your deal smoothly and confidently, saving you money in
                the process.
              </p>
            </div>
          </div>
          <div className="closing-btn d-flex justify-content-center align-items-center">
            <button className="secondary-btn">Get Closing Support</button>
          </div>
        </div>
      </section>
      <section className="negotiation-section section-spacing">
        <div className="custom-container">
          <div className="negotiation-description">
            <h2 className="section-heading text-center">Negotiation Support</h2>
            <p className="section-text text-center">
              Secure the best deals with our skilled negotiation support. Our
              experienced negotiators work tirelessly to ensure you receive the
              most favorable terms in your real estate transactions. Trust us to
              handle negotiations with professionalism and precision.
            </p>
          </div>
          <div className="negotiation-card d-flex flex-wrap justify-content-center align-items-stretch">
            <div className="negotiation-card-info">
              <div><img src="/images/services/negotiation_1.svg" alt="negotiation-img" className="negotiation-img" height={80}
                width={80} /></div>
              <h6 className="negotiation-card-title">Effective Representation</h6>
              <p className="negotiation-card-text">We represent your interests with professionalism and precision, ensuring the best possible outcomes.</p>
            </div>
            <div className="negotiation-card-info">
              <div><img src="/images/services/negotiation_2.svg" alt="negotiation-img" className="negotiation-img" height={80}
                width={80} /></div>
              <h6 className="negotiation-card-title">Favorable Terms</h6>
              <p className="negotiation-card-text">Secure the best deals with our skilled negotiation support.</p>
            </div>
            <div className="negotiation-card-info">
              <div><img src="/images/services/negotiation_3.svg" alt="negotiation-img" className="negotiation-img" height={80}
                width={80} /></div>
              <h6 className="negotiation-card-title">Experienced Negotiators</h6>
              <p className="negotiation-card-text">Our experienced negotiators work tirelessly to ensure you get the most favorable terms in your transactions.</p>
            </div>
          </div>
          <div className="negotiation-btn d-flex  justify-content-center align-items-center">
            <button className="primary-btn">Discover How We Can Help You</button>
          </div>
        </div>
      </section>

      <section className='dynamic-listing-section'>
        <div className='custom-container'>
          <h3 className='section-heading text-center'>Dynamic Listing Services</h3>
          <p className='section-text text-center'>Maximize your property's exposure with our innovative marketing techniques. We ensure your listings reach the right audience, increasing the chances of a successful sale with high-quality photography and engaging descriptions.</p>
          <ServicesSlider />

        </div>
      </section>
      <section className='newsletter-section'>
        <NewsLetter />
      </section>
    </>
  )
}
