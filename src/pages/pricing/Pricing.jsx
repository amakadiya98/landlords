import React from 'react'
import PricingBanner from '../../component/pricing/Pricingbanner'
import Faq from '../../component/pricing/Faq'
import Newsletter from './../../component/common/NewsLetter'
import '../../styles/pricing.css'

export default function Pricing() {
  return (
    <div>
      <PricingBanner />
      <div className='pricing-page'>
        <section className='pricing-cards-section'>
          <div className='custom-container '>
            <div className='section-spacing'>
              <h2 className='section-heading text-center'>
                Sell smarter with Minneapolis Landlords using advanced AI tools.
              </h2>
              <div className='d-flex justify-content-center align-items-center pricing-cards'>
                <div className='pricing-card'>
                  <h4>Essential Listing</h4>
                  <p className='price-text'>Free <span>/Month</span></p>
                  <button className='choose-btn'>
                    Choose This Plan
                  </button>
                  <hr className='divider' />
                  <ul>
                    <li><strong>Best For:</strong> Entry-level sellers exploring MLS exposure</li>
                    <li><strong>MLS Listing:</strong> Live within 24 hours on Zillow, Realtor Trulia & more</li>
                    <li><strong>Photos:</strong> Standard MLS limit</li>
                    <li><strong>Marketing Support:</strong>  Self-service (FAQs, Guides, Videos)</li>
                    <li><strong>Listing Period:</strong> 3 Months</li>
                    <li><strong>Compliance Fee:</strong> 0.25% at closing</li>
                  </ul>
                </div>
                <div className='pricing-card'>
                  <h4>MarketBlast Pro</h4>
                  <p className='price-text'>$59 <span>/Month</span></p>
                  <button className='choose-btn'>
                    Choose This Plan
                  </button>
                  <hr className='divider' />
                  <ul>
                    <li><strong>Best For:</strong> Serious sellers aiming for maximum exposure & expert support</li>
                    <li><strong>MLS Listing:</strong> Everything in MarketBlast, plus priority support & more features</li>
                    <li><strong>Photos:</strong> Unlimited (MLS Max)</li>
                    <li><strong>Marketing Support:</strong> Weekly Marketing Review & Refresh</li>
                    <li><strong>Listing Period:</strong> 12 Months</li>
                    <li><strong>Compliance Fee:</strong> 0.25% at closing</li>
                  </ul>
                </div>
                <div className='pricing-card'>
                  <h4>MarketBlast</h4>
                  <p className='price-text'>$29 <span>/Month</span></p>
                  <button className='choose-btn'>
                    Choose This Plan
                  </button>
                  <hr className='divider' />
                  <ul>
                    <li><strong>Best For:</strong>Intermediate sellers wanting better visibility & professional reviews</li>
                    <li><strong>MLS Listing:</strong> Everything in Essential, plus enhanced marketing</li>
                    <li><strong>Photos:</strong>(MLS Max)</li>
                    <li><strong>Marketing Support:</strong>Monthly Marketing Review & Refresh</li>
                    <li><strong>Listing Period:</strong> 6 Months</li>
                    <li><strong>Compliance Fee:</strong> 0.25% at closing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='faq-section'>
          <div className='custom-container'>
            <div className='heading-content'>
              <h3 className='section-heading text-center'>
                Your Questions Answered Expert Guidance You Can Trust
              </h3>
              <p>
                Our team is here to help you navigate the multifamily real estate market with confidence. Explore answers to our most frequently asked questions or contact us for personalized advice.
              </p>
              <div className='d-flex button-container justify-content-center'>
                <button className='secondary-btn bold'>Investment</button>
                <button className='secondary-btn bold'>Valuation</button>
              </div>
            </div>
            <div className='faq-part'>
              <Faq />
            </div>
          </div>
        </section>
        <section className='newsletter-part'>
          <Newsletter/>
        </section>
      </div>
    </div>
  )
}
