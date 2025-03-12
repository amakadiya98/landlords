import '../../styles/bannerSection.css'

function ServiceBanner() {
    return(
        <>
            <div className="common-banner-section service-banner-section">
            <div className='custom-container'>
                <div className="about-content">
                    <h2 className="banner-heading">Comprehensive Multifamily Real Estate Solutions</h2>
                    <p className="banner-discription">Making Real Estate Investment Easy, Profitable, and Seamless for You</p>
                    <button className="left-arrow-btn">
                        Explore Our Services
                        <div className='left-icon-part'>
                            <img src='/images/banner/left-arrow-btn.svg' alt="byn-icon" />
                        </div>
                    </button>
                    </div>
                </div>
            </div>
            <div className='main-content-section'>
                <div className='custom-container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='content'>
                                <h3>Investment Strategy Development</h3>
                                <p>Tailored Plans for Long-Term Success and Profitable Multifamily Investments</p>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='content right-small-content'>
                                <p>Achieve long-term success with our customized investment strategies. We work closely with you to understand your financial goals and create tailored plans that align with your objectives. </p>
                                <p>With our expertise in the multifamily real estate market, we provide strategic recommendations to maximize returns and minimize risks.</p>
                                <p> Trust us to guide you through the investment process with clarity and confidence.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ServiceBanner