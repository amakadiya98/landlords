import '../styles/bannerSection.css'
function PricingBanner() {
    return(
        <>
            <div className="common-banner-section pricing-banner-section">
            <div className='custom-container'>
                <div className="about-content">
                    <h2 className="banner-heading">Transparent Pricing and Exceptional Value with AI-Powered Selling</h2>
                    <p className="banner-discription">Choose Your Plan for AI-Powered Home Selling</p>
                    <button className="left-arrow-btn">
                    Get to Know Us
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
                                <h3>Cutting-Edge, Flat-Fee Real Estate Services for Maximum Savings</h3>
                                <p>Professional-grade tools and support at a fraction of the cost of traditional agents.</p>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='content right-small-content'>
                                <p>Welcome to a new era of real estate pricing. At Minneapolis Landlords, we believe in transparent, value-driven pricing that aligns with your success. Our innovative flat-fee model is designed to save you thousands compared to traditional real estate commissions, all while providing you with cutting-edge AI-powered tools and expert support.</p>
                                <p>We've reimagined the real estate service model, leveraging technology to reduce costs and increase efficiency. This allows us to offer professional-grade services at a fraction of traditional prices.</p>
                                <p>With Minneapolis Landlords, you're not just saving money – you're gaining control over your home sale and accessing tools previously available only to industry insiders.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PricingBanner