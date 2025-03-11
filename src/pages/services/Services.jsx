import React from 'react'
import './../../styles/services.css';
import ServicesSlider from '../../component/ServicesSlider';
import NewsLetter from '../../component/common/NewsLetter';
import Faq from '../../component/Faq';
import ServiceBanner from '../../component/ServiceBanner';

export default function Services() {
  return (
    <>
    <ServiceBanner/>
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
      <Faq />
    </>
  )
}
