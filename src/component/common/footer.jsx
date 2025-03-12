import React from 'react'
import '../../styles/footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='footer-section'>
            <div className="custom-container">
                <div className='footer-logo'><img src="/images/header/logo.svg" alt="logo" /></div>
                <div className="row gy-4">
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className='d-flex align-items-center gap-3 footer-brands'>
                            <img src="/images/footer/realtor-logo.svg" alt="logo" />
                            <img src="/images/footer/house-logo.svg" alt="logo" />
                            <p>We fully support the principles of the Fair Housing Act and the Equal Opportunity Act.</p>
                        </div>
                        <div><img src="/images/footer/northstar.svg" className='northstar-logo' alt="logo" /></div>
                        <div className='social-icons'>
                            <Link to='/'><img src="/images/footer/Facebook.svg" alt="logo" /></Link>
                            <Link to='/'><img src="/images/footer/Instagram.svg" alt="logo" /></Link>
                            <Link to='/'><img src="/images/footer/Twitter.svg" alt="logo" /></Link>
                            <Link to='/'><img src="/images/footer/LinkedIn.svg" alt="logo" /></Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className='License-part'>
                            <h4>Licensed & Registered Brokerage</h4>
                            <ul>
                                <li><strong> MN License: </strong> AiRE LLC DBA AiRE Brokers</li>
                                <li><strong> FL License:  </strong> AiRE LLC DBA AiRE Brokers</li>
                                <li><strong> NC License:  </strong> AiRE LLC DBA AiRE Brokers</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-6 col-md-6">
                        <h4>Address</h4>
                        <h6>2801 Hennepin Ave #258 Minneapolis, MN 55408</h6>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <h4>Contact</h4>
                        <div className='d-flex flex-column'>
                            <Link to='#'><img src="/images/footer/mail.svg" alt="icon" /> minneapolis@minneapolis.com</Link>
                            <Link to='#'><img src="/images/footer/call.svg" alt="icon" /> 612-235-4700</Link>
                        </div>
                    </div>
                </div>
                <div className="term-and-condition">
                    <div className='d-flex align-items-center gap-3'>
                        <Link to='/'>Privacy Policy</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <Link to='/'>Terms of Service</Link>
                </div>
            </div>
        </div>
    )
}
