import '../../styles/bannerSection.css'
function AboutBanner() {
    return(
        <>
            <div className="common-banner-section about-banner-section">
            <div className='custom-container'>
                <div className="about-content">
                    <h2 className="banner-heading">Your Trusted Multifamily Real Estate Advisors</h2>
                    <p className="banner-discription">Expert Guidance to Make Investing in Minneapolis Easy & Profitable</p>
                    <button className="left-arrow-btn">
                        GetListed for Free
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
                                <h3>Our Mission & Vision</h3>
                                <p>Our mission at Minneapolis Landlords is to empower clients to achieve financial independence through strategic, well-informed real estate investments. We envision a thriving community of investors leveraging our expertise to build and manage profitable real estate portfolios.</p>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='content right-small-content mt-md-6'>
                                <p>At Minneapolis Landlords, we are your trusted partners in navigating the multifamily real estate market in Minneapolis, St. Paul, and the greater Twin Cities area. We specialize in helping you buy and sell multifamily properties seamlessly, saving you time and maximizing your returns.</p>
                                <p>Our team of Realtors who are also successful landlords combines firsthand experience with professional expertise to guide you through every step of the process. From market analysis to closing, we tailor our services to fit your unique needs and goals.</p>
                                <p>Whether you're a seasoned investor expanding your portfolio or new to real estate, we provide transparent processes, cutting-edge tools, and unparalleled local knowledge to help you achieve financial independence and long-term success.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutBanner