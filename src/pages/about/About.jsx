import React from 'react'
import AboutBanner from '../../component/about/AboutBanner'
import '../../styles/about.css'
import NewsLetter from '../../component/common/NewsLetter'
export default function About() {
  return (
    <div>
      <AboutBanner />
      <div className='empoweing-section'>
        <div className="custom-container">
          <div className="content">
            <h4 className='section-heading text-center'>Empowering Homeowners Our Core Values</h4>
            <p className='section-text text-center'> To empower homeowners with innovative technology, making real estate transactions more accessible, transparent, and cost-effective.</p>
            <div className='empoweing-card-part'>
              <div className='empoweing-card'>
                <div className='empoweing-card-icon'><img src="/images/about/impowering-img1.svg" alt="logo" /></div>
                <h6>Innovation Excellence</h6>
              </div>
              <div className='empoweing-card'>
                <div className='empoweing-card-icon'><img src="/images/about/impowering-img2.svg" alt="logo" /></div>
                <h6>Customer Empowerment</h6>
              </div>
              <div className='empoweing-card'>
                <div className='empoweing-card-icon'><img src="/images/about/impowering-img3.svg" alt="logo" /></div>
                <h6>Transparency and Trust</h6>
              </div>
              <div className='empoweing-card'>
                <div className='empoweing-card-icon'><img src="/images/about/impowering-img4.svg" alt="logo" /></div>
                <h6>Continuous Improvement</h6>
              </div>
              <div className='empoweing-card'>
                <div className='empoweing-card-icon'><img src="/images/about/impowering-img5.svg" alt="logo" /></div>
                <h6>Collaboration and Support</h6>
              </div>
            </div>
            <div className='d-flex justify-content-center w-full'>
              <button className="left-arrow-btn">
                Explore  Minneapolis Landlords
                <div className='left-icon-part'>
                  <img src='/images/banner/left-arrow-btn.svg' alt="byn-icon" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className='achievements-section section-spacing'>
        <div className='custom-container'>
        <div className='heading-part'>
           <h3 className='section-heading text-center'>
           Our Achievements
           </h3>
           <p className='section-text text-center'>We are committed to revolutionizing the real estate industry through innovation and technology. Every milestone strengthens our mission to empower homeowners and reshape the market.</p>
         </div>
         <div className='cards-container d-flex align-items-stretch'>
            <div className='card'>
              <img src='/images/about/achivement-1.png' alt='card-img'/>
              <h6>Market Expansion</h6>
              <p className='section-text'>Now serving 15 major U.S. markets.</p>
            </div>
            <div className='card'>
              <img src='/images/about/achivement-2.png' alt='card-img'/>
              <h6>Financial Impact</h6>
              <p className='section-text'>Saved users over $50 million in commission fees.</p>
            </div>
            <div className='card'>
              <img src='/images/about/achivement-3.png' alt='card-img'/>
              <h6>User Success</h6>
              <p className='section-text'>Facilitated the sale of 100,000+ homes.</p>
            </div>
            <div className='card'>
              <img src='/images/about/achivement-4.png' alt='card-img'/>
              <h6>Industry Recognition</h6>
              <p className='section-text'>Recognized as a top real estate tech innovator.</p>
            </div>
         </div>
        </div>
      </section>



      <div className='about-page'>
        <section className="company-section section-spacing">
          <div className="custom-container">
            <h2 className="section-heading text-center">
              Company Background Section Descriptions
            </h2>
            <div className="company-card d-flex flex-wrap justify-content-center align-items-stretch">
              <div className="company-info">
                <div className="company-img-section d-flex justify-content-center align-items-center">
                  <img
                    src="/images/about/company_1.svg"
                    alt="company-img"
                    className="company-img"
                    height={80}
                    width={80}
                  />
                </div>
                <h6 className="cards-title text-center">Market Analysis</h6>
                <p className="cards-text text-center">
                  We provide data-driven insights to help you stay ahead of market
                  trends, maximizing profitability while minimizing risks.
                </p>
              </div>
              <div className="company-info">
                <div className="company-img-section">
                  <img
                    src="/images/about/company_2.svg"
                    alt="company-img"
                    className="company-img"
                    height={80}
                    width={80}
                  />
                </div>
                <h6 className="cards-title text-center">Investment Strategy</h6>
                <p className="cards-text text-center">
                  We craft personalized investment strategies aligned with your
                  financial goals, supporting growth and long-term success.
                </p>
              </div>
              <div className="company-info">
                <div className="company-img-section">
                  <img
                    src="/images/about/company_4.svg"
                    alt="company-img"
                    className="company-img"
                    height={80}
                    width={80}
                  />
                </div>
                <h6 className="cards-title text-center">Community Impact</h6>
                <p className="cards-text text-center">
                  We help strengthen Minneapolis’ multifamily housing market,
                  positively impacting residents and neighborhoods through local
                  support.
                </p>
              </div>
              <div className="company-info">
                <div className="company-img-section">
                  <img
                    src="/images/about/company_5.svg"
                    alt="company-img"
                    className="company-img"
                    height={80}
                    width={80}
                  />
                </div>
                <h6 className="cards-title text-center">Comprehensive Support</h6>
                <p className="cards-text text-center">
                  From navigating transactions to efficient property management,
                  we offer full support throughout your real estate journey.
                </p>
              </div>
            </div>
            <div className="company-btn d-flex justify-content-center align-items-center">
              <button className="primary-btn">Discover Your Best Price</button>
            </div>
          </div>
        </section>
      </div>

      <div className='about-newslatter'>
        <NewsLetter />
      </div>
    </div>
  )
}
