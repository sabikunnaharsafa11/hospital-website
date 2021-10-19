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
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div className='container-fluid'>
                    <div class=" carousel-item active">
                      <div className="row ">
                          <div className="col-md-6">
                           <div className="banner-heading">
                           <h2><span>Making Health Easier</span> <br /> So Life Can be Better.</h2>
                            <p>We come through for you whether you’re in the hospital, on our mobile web site, in a Banner clinic, on the phone or helping you use your health plan to the fullest..</p>
                            <a class="btn btn-dark" href="/" role="button">EXPLORE NOW!</a>
                           </div>
                   
                          </div>
                          <div className="col-md-6">
                          <img src={banner1} class="d-block slider-img" alt="..." />
                          </div>
                      </div>
                    </div>
                   
                    <div class=" carousel-item">
                    <div className="row">
                          <div className="col-md-6">
                          <div className="banner-heading">
                           <h2><span>Making Health Easier</span> <br /> So Life Can be Better.</h2>
                            <p>We come through for you whether you’re in the hospital, on our mobile web site, in a Banner clinic, on the phone or helping you use your health plan to the fullest..</p>
                            <a class="btn btn-dark" href="/" role="button">VIEW COLLECTION</a>
                           </div>
                   
                          </div>
                          <div className="col-md-6">
                          <img src={banner2} class="d-block slider-img" alt="..." />
                          </div>
                      </div>
                    </div>
                    <div class=" carousel-item">
                    <div className="row">
                          <div className="col-md-6">
                          <div className="banner-heading">
                          <h2><span>Making Health Easier</span> <br /> So Life Can be Better.</h2>
                            <p>We come through for you whether you’re in the hospital, on our mobile web site, in a Banner clinic, on the phone or helping you use your health plan to the fullest..</p>
                            <a class="btn btn-dark" href="/" role="button">VIEW COLLECTION</a>
                           </div>
                   
                          </div>
                          <div className="col-md-6">
                          <img src={banner3} class="d-block slider-img" alt="..." />
                          </div>
                      </div>
                    </div>
                 
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
           
        </div>
    );
};

export default Banner;