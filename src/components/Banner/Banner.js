import React from 'react';
import banner1 from './../../images/banner1.png'
import banner2 from './../../images/banner2.png'
import banner3 from './../../images/banner3.png'
import bannerbg from './../../images/img2.jpg'
import './Banner.css'




const Banner = () => {
    const bannerStyle = {
        backgroundImage: `url(${bannerbg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',

    }
    return (
        <div style={bannerStyle}>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className='container-fluid'>
                    <div className=" carousel-item active">
                      <div className="row ">
                          <div className="col-md-6">
                           <div className="banner-heading " >
                           <h2><span>Making Health Easier</span> <br /> So Life Can be Better.</h2>
                            <p>We come through for you whether you’re in the hospital, on our mobile web site, in a Banner clinic, on the phone or helping you use your health plan to the fullest..</p>
                            <a className="btn btn-dark mt-5" href="/" role="button">EXPLORE NOW!</a>
                           </div>
                   
                          </div>
                          <div className="col-md-6">
                          <img src={banner1} className="d-block slider-img" alt="..." />
                          </div>
                      </div>
                    </div>
                   
                    <div className=" carousel-item">
                    <div className="row">
                          <div className="col-md-6">
                          <div className="banner-heading">
                           <h2><span>Making Health Easier</span> <br /> So Life Can be Better.</h2>
                            <p>We come through for you whether you’re in the hospital, on our mobile web site, in a Banner clinic, on the phone or helping you use your health plan to the fullest..</p>
                            <a className="btn btn-dark mt-5" href="/" role="button">VIEW COLLECTION</a>
                           </div>
                   
                          </div>
                          <div className="col-md-6">
                          <img src={banner2} className="d-block slider-img" alt="..." />
                          </div>
                      </div>
                    </div>
                    <div className=" carousel-item">
                    <div className="row">
                          <div className="col-md-6">
                          <div className="banner-heading ">
                          <h2><span>Making Health Easier</span> <br /> So Life Can be Better.</h2>
                            <p>We come through for you whether you’re in the hospital, on our mobile web site, in a Banner clinic, on the phone or helping you use your health plan to the fullest..</p>
                            <a className="btn btn-dark mt-5" href="/" role="button">VIEW COLLECTION</a>
                           </div>
                   
                          </div>
                          <div className="col-md-6">
                          <img src={banner3} className="d-block slider-img" alt="..." />
                          </div>
                      </div>
                    </div>
                 
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
           
        </div>
    );
};

export default Banner;