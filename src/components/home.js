import React from "react";
import { Link } from "react-router-dom";
import Contact from "./contact";
import About from "./about";

export default function Home() {
  return (
    <div>
      <div className="site-loader" />
      <div className="site-wrap">
        <div className="site-mobile-menu">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle" />
            </div>
          </div>
          <div className="site-mobile-menu-body" />
        </div>{" "}
        {/* .site-mobile-menu */}
        <div className="border-bottom bg-white top-bar">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-6 col-md-6">
                <p className="mb-0">
                  <a href="#" className="mr-3">
                    <span className="text-black fl-bigmug-line-phone351" />{" "}
                    <span className="d-none d-md-inline-block ml-2">
                      +2 102 3923 3922
                    </span>
                  </a>
                  <a href="#">
                    <span className="text-black fl-bigmug-line-email64" />{" "}
                    <span className="d-none d-md-inline-block ml-2">
                      info@domain.com
                    </span>
                  </a>
                </p>
              </div>
              <div className="col-6 col-md-6 text-right">
                <a href="#" className="mr-3">
                  <span className="text-black icon-facebook" />
                </a>
                <a href="#" className="mr-3">
                  <span className="text-black icon-twitter" />
                </a>
                <a href="#" className="mr-0">
                  <span className="text-black icon-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="site-navbar">
          <div className="container py-1">
            <div className="row align-items-center">
              <div className="col-8 col-md-8 col-lg-4">
                <h1 className>
                  <a href="index.html" className="h5 text-uppercase text-black">
                    <strong>
                      HomeSpace<span className="text-danger">.</span>
                    </strong>
                  </a>
                </h1>
              </div>
              <div className="col-4 col-md-4 col-lg-8">
                <nav
                  className="site-navigation text-right text-md-right"
                  role="navigation"
                >
                  <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
                    <a
                      href="#"
                      className="site-menu-toggle js-menu-toggle text-black"
                    >
                      <span className="icon-menu h3" />
                    </a>
                  </div>
                  <ul className="site-menu js-clone-nav d-none d-lg-block">
                    <li className="active">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="has-children">
                      <a href="properties.html">Properties</a>
                      <ul className="dropdown">
                        <li>
                          <a href="#">Buy</a>
                        </li>
                        <li>
                          <a href="#">Rent</a>
                        </li>
                        <li>
                          <a href="#">Lease</a>
                        </li>
                        <li className="has-children">
                          <a href="#">Menu</a>
                          <ul className="dropdown">
                            <li>
                              <a href="#">Menu One</a>
                            </li>
                            <li>
                              <a href="#">Menu Two</a>
                            </li>
                            <li>
                              <a href="#">Menu Three</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-one-item home-slider owl-carousel">
        <div
          className="site-blocks-cover"
          style={{ backgroundImage: "url(images/hero_bg_1.jpg)" }}
          data-aos="fade"
          data-stellar-background-ratio="0.5"
        >
          <div className="text">
            <h2>853 S Lucerne Blvd</h2>
            <p className="location">
              <span className="property-icon icon-room" /> Los Angeles, CA 90005
            </p>
            <p className="mb-2">
              <strong>$2,250,500</strong>
            </p>
            <p className="mb-0">
              <a
                href="#"
                className="text-uppercase small letter-spacing-1 font-weight-bold"
              >
                More Details
              </a>
            </p>
          </div>
        </div>
        <div
          className="site-blocks-cover"
          style={{ backgroundImage: "url(images/hero_bg_3.jpg)" }}
          data-aos="fade"
          data-stellar-background-ratio="0.5"
        >
          <div className="text">
            <h2>625 S. Berendo St</h2>
            <p className="location">
              <span className="property-icon icon-room" />
              607 Los Angeles, CA 90005
            </p>
            <p className="mb-2">
              <strong>$2,250,500</strong>
            </p>
            <p className="mb-0">
              <a
                href="#"
                className="text-uppercase small letter-spacing-1 font-weight-bold"
              >
                More Details
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <form className="row mb-5">
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="select-wrap">
                <span className="icon icon-arrow_drop_down" />
                <select
                  name="offer-types"
                  id="offer-types"
                  className="form-control d-block rounded-0"
                >
                  <option value>Lot Area</option>
                  <option value={1000}>1000</option>
                  <option value={800}>800</option>
                  <option value={600}>600</option>
                  <option value={400}>400</option>
                  <option value={200}>200</option>
                  <option value={100}>100</option>
                </select>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="select-wrap">
                <span className="icon icon-arrow_drop_down" />
                <select
                  name="offer-types"
                  id="offer-types"
                  className="form-control d-block rounded-0"
                >
                  <option value>Property Status</option>
                  <option value="For Sale">For Sale</option>
                  <option value="For Rent">For Rent</option>
                </select>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="select-wrap">
                <span className="icon icon-arrow_drop_down" />
                <select
                  name="offer-types"
                  id="offer-types"
                  className="form-control d-block rounded-0"
                >
                  <option value>Location</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Belgium">Belgium</option>
                </select>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="select-wrap">
                <span className="icon icon-arrow_drop_down" />
                <select
                  name="offer-types"
                  id="offer-types"
                  className="form-control d-block rounded-0"
                >
                  <option value>Lot Area</option>
                  <option value={1000}>1000</option>
                  <option value={800}>800</option>
                  <option value={600}>600</option>
                  <option value={400}>400</option>
                  <option value={200}>200</option>
                  <option value={100}>100</option>
                </select>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="select-wrap">
                <span className="icon icon-arrow_drop_down" />
                <select
                  name="offer-types"
                  id="offer-types"
                  className="form-control d-block rounded-0"
                >
                  <option value>Bedrooms</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value="5+">5+</option>
                </select>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="select-wrap">
                <span className="icon icon-arrow_drop_down" />
                <select
                  name="offer-types"
                  id="offer-types"
                  className="form-control d-block rounded-0"
                >
                  <option value>Bathrooms</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value="5+">5+</option>
                </select>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="mb-4">
                <div id="slider-range" className="border-primary" />
                <input
                  type="text"
                  name="text"
                  id="amount"
                  className="form-control border-0 pl-0 bg-white"
                  disabled
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
              <input
                type="submit"
                className="btn btn-primary btn-block form-control-same-height rounded-0"
                defaultValue="Search"
              />
            </div>
          </form>
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-3 mb-lg-0">
              <div className="feature d-flex align-items-start">
                <span className="icon mr-3 flaticon-house" />
                <div className="text">
                  <h2 className="mt-0">Wide Range of Properties</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                    rem sint debitis porro quae dolorum neque.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3 mb-lg-0">
              <div className="feature d-flex align-items-start">
                <span className="icon mr-3 flaticon-rent" />
                <div className="text">
                  <h2 className="mt-0">Rent or Sale</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                    rem sint debitis porro quae dolorum neque.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3 mb-lg-0">
              <div className="feature d-flex align-items-start">
                <span className="icon mr-3 flaticon-location" />
                <div className="text">
                  <h2 className="mt-0">Property Location</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                    rem sint debitis porro quae dolorum neque.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section site-section-sm bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12">
              <div className="site-section-title">
                <h2>New Properties for You</h2>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-6 col-lg-4 mb-4">
              <a href="property-details.html" className="prop-entry d-block">
                <figure>
                  <img
                    src="images/img_1.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </figure>
                <div className="prop-text">
                  <div className="inner">
                    <span className="price rounded">$1,930,000</span>
                    <h3 className="title">853 S Lucerne Blvd</h3>
                    <p className="location">Los Angeles, CA 90005</p>
                  </div>
                  <div className="prop-more-info">
                    <div className="inner d-flex">
                      <div className="col">
                        <span>Area:</span>
                        <strong>
                          240m<sup>2</sup>
                        </strong>
                      </div>
                      <div className="col">
                        <span>Beds:</span>
                        <strong>2</strong>
                      </div>
                      <div className="col">
                        <span>Baths:</span>
                        <strong>2</strong>
                      </div>
                      <div className="col">
                        <span>Garages:</span>
                        <strong>1</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <a href="property-details.html" className="prop-entry d-block">
                <figure>
                  <img
                    src="images/img_2.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </figure>
                <div className="prop-text">
                  <div className="inner">
                    <span className="price rounded">$2,438,000</span>
                    <h3 className="title">853 S Lucerne Blvd</h3>
                    <p className="location">Los Angeles, CA 90005</p>
                  </div>
                  <div className="prop-more-info">
                    <div className="inner d-flex">
                      <div className="col">
                        <span>Area:</span>
                        <strong>
                          240m<sup>2</sup>
                        </strong>
                      </div>
                      <div className="col">
                        <span>Beds:</span>
                        <strong>2</strong>
                      </div>
                      <div className="col">
                        <span>Baths:</span>
                        <strong>2</strong>
                      </div>
                      <div className="col">
                        <span>Garages:</span>
                        <strong>1</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <a href="property-details.html" className="prop-entry d-block">
                <figure>
                  <img
                    src="images/img_3.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </figure>
                <div className="prop-text">
                  <div className="inner">
                    <span className="price rounded">$5,320,000</span>
                    <h3 className="title">853 S Lucerne Blvd</h3>
                    <p className="location">Los Angeles, CA 90005</p>
                  </div>
                  <div className="prop-more-info">
                    <div className="inner d-flex">
                      <div className="col">
                        <span>Area:</span>
                        <strong>
                          240m<sup>2</sup>
                        </strong>
                      </div>
                      <div className="col">
                        <span>Beds:</span>
                        <strong>2</strong>
                      </div>
                      <div className="col">
                        <span>Baths:</span>
                        <strong>2</strong>
                      </div>
                      <div className="col">
                        <span>Garages:</span>
                        <strong>1</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <a href="property-details.html" className="prop-entry d-block">
                <figure>
                  <img
                    src="images/img_4.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </figure>
                <div className="prop-text">
                  <div className="inner">
                    <span className="price rounded">$2,350,000</span>
                    <h3 className="title">853 S Lucerne Blvd</h3>
                    <p className="location">Los Angeles, CA 90005</p>
                  </div>
                  <div className="prop-more-info">
                    <div className="inner d-flex">
                      <div className="col">
                        <span>Area:</span>
                        <strong>
                          240m<sup>2</sup>
                        </strong>
                      </div>
                      <div className="col">
                        <span>Beds:</span>
                        <strong>2</strong>
                      </div>
                      <div className="col">
                        <span>Baths:</span>
                        <strong>2</strong>
                      </div>
                      <div className="col">
                        <span>Garages:</span>
                        <strong>1</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <a href="property-details.html" className="prop-entry d-block">
                <figure>
                  <img
                    src="images/img_5.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </figure>
                <div className="prop-text">
                  <div className="inner">
                    <span className="price rounded">$1,550,000</span>
                    <h3 className="title">853 S Lucerne Blvd</h3>
                    <p className="location">Los Angeles, CA 90005</p>
                  </div>
                  <div className="prop-more-info">
                    <div className="inner d-flex">
                      <div className="col">
                        <span>Area:</span>
                        <strong>
                          240m<sup>2</sup>
                        </strong>
                      </div>
                      <div className="col">
                        <span>Beds:</span>
                        <strong>2</strong>
                      </div>
                      <div className="col">
                        <span>Baths:</span>
                        <strong>2</strong>
                      </div>
                      <div className="col">
                        <span>Garages:</span>
                        <strong>1</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <a href="property-details.html" className="prop-entry d-block">
                <figure>
                  <img
                    src="images/img_6.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </figure>
                <div className="prop-text">
                  <div className="inner">
                    <span className="price rounded">$4,291,000</span>
                    <h3 className="title">853 S Lucerne Blvd</h3>
                    <p className="location">Los Angeles, CA 90005</p>
                  </div>
                  <div className="prop-more-info">
                    <div className="inner d-flex">
                      <div className="col">
                        <span>Area:</span>
                        <strong>
                          240m<sup>2</sup>
                        </strong>
                      </div>
                      <div className="col">
                        <span>Beds:</span>
                        <strong>2</strong>
                      </div>
                      <div className="col">
                        <span>Baths:</span>
                        <strong>2</strong>
                      </div>
                      <div className="col">
                        <span>Garages:</span>
                        <strong>1</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="site-pagination">
                <a href="#" className="active">
                  1
                </a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <span>...</span>
                <a href="#">10</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 text-center mb-5">
              <div className="site-section-title">
                <h2>Our Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4">
              <a href="#" className="service text-center border rounded">
                <span className="icon flaticon-house" />
                <h2 className="service-heading">Research Subburbs</h2>
                <p>
                  <span className="read-more">Learn More</span>
                </p>
              </a>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <a href="#" className="service text-center border rounded">
                <span className="icon flaticon-sold" />
                <h2 className="service-heading">Sold Houses</h2>
                <p>
                  <span className="read-more">Learn More</span>
                </p>
              </a>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <a href="#" className="service text-center border rounded">
                <span className="icon flaticon-camera" />
                <h2 className="service-heading">Security Priority</h2>
                <p>
                  <span className="read-more">Learn More</span>
                </p>
              </a>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <a href="#" className="service text-center border rounded">
                <span className="icon flaticon-house" />
                <h2 className="service-heading">Research Subburbs</h2>
                <p>
                  <span className="read-more">Learn More</span>
                </p>
              </a>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <a href="#" className="service text-center border rounded">
                <span className="icon flaticon-sold" />
                <h2 className="service-heading">Sold Houses</h2>
                <p>
                  <span className="read-more">Learn More</span>
                </p>
              </a>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <a href="#" className="service text-center border rounded">
                <span className="icon flaticon-camera" />
                <h2 className="service-heading">Security Priority</h2>
                <p>
                  <span className="read-more">Learn More</span>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-7 text-center">
              <div className="site-section-title">
                <h2>Our Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-6 col-lg-4 mb-5"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <a href="#">
                <img src="images/img_4.jpg" alt="Image" className="img-fluid" />
              </a>
              <div className="p-4 bg-white">
                <span className="d-block text-secondary small text-uppercase">
                  Jan 20th, 2019
                </span>
                <h2 className="h5 text-black mb-3">
                  <a href="#">When To Sell &amp; How Much To Sell?</a>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias enim, ipsa exercitationem veniam quae sunt.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 mb-5"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <a href="#">
                <img src="images/img_2.jpg" alt="Image" className="img-fluid" />
              </a>
              <div className="p-4 bg-white">
                <span className="d-block text-secondary small text-uppercase">
                  Jan 20th, 2019
                </span>
                <h2 className="h5 text-black mb-3">
                  <a href="#">When To Sell &amp; How Much To Sell?</a>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias enim, ipsa exercitationem veniam quae sunt.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 mb-5"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <a href="#">
                <img src="images/img_3.jpg" alt="Image" className="img-fluid" />
              </a>
              <div className="p-4 bg-white">
                <span className="d-block text-secondary small text-uppercase">
                  Jan 20th, 2019
                </span>
                <h2 className="h5 text-black mb-3">
                  <a href="#">When To Sell &amp; How Much To Sell?</a>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias enim, ipsa exercitationem veniam quae sunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section">
        <div className="container">
          <div className="row mb-5 justify-content-center">
            <div className="col-md-7">
              <div className="site-section-title text-center">
                <h2>Our Agents</h2>
              </div>
            </div>
          </div>
          <div className="row block-13">
            <div className="nonloop-block-13 owl-carousel">
              <div className="slide-item">
                <div className="team-member text-center">
                  <img
                    src="images/person_1.jpg"
                    alt="Image"
                    className="img-fluid mb-4 w-50 rounded-circle mx-auto"
                  />
                  <div className="text p-3">
                    <h2 className="mb-2 font-weight-light text-black h4">
                      Megan Smith
                    </h2>
                    <span className="d-block mb-3 text-white-opacity-05">
                      Real Estate Agent
                    </span>
                    <p className="mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Modi dolorem totam non quis facere blanditiis praesentium
                      est.{" "}
                    </p>
                    <p>
                      <a href="#" className="text-black p-2">
                        <span className="icon-facebook" />
                      </a>
                      <a href="#" className="text-black p-2">
                        <span className="icon-twitter" />
                      </a>
                      <a href="#" className="text-black p-2">
                        <span className="icon-linkedin" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="team-member text-center">
                  <img
                    src="images/person_2.jpg"
                    alt="Image"
                    className="img-fluid mb-4 w-50 rounded-circle mx-auto"
                  />
                  <div className="text p-3">
                    <h2 className="mb-2 font-weight-light text-black h4">
                      Brooke Cagle
                    </h2>
                    <span className="d-block mb-3 text-white-opacity-05">
                      Real Estate Agent
                    </span>
                    <p className="mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Modi dolorem totam non quis facere blanditiis praesentium
                      est.{" "}
                    </p>
                    <p>
                      <a href="#" className="text-black p-2">
                        <span className="icon-facebook" />
                      </a>
                      <a href="#" className="text-black p-2">
                        <span className="icon-twitter" />
                      </a>
                      <a href="#" className="text-black p-2">
                        <span className="icon-linkedin" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="team-member text-center">
                  <img
                    src="images/person_3.jpg"
                    alt="Image"
                    className="img-fluid mb-4 w-50 rounded-circle mx-auto"
                  />
                  <div className="text p-3">
                    <h2 className="mb-2 font-weight-light text-black h4">
                      Philip Martin
                    </h2>
                    <span className="d-block mb-3 text-white-opacity-05">
                      Real Estate Agent
                    </span>
                    <p className="mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Modi dolorem totam non quis facere blanditiis praesentium
                      est.{" "}
                    </p>
                    <p>
                      <a href="#" className="text-black p-2">
                        <span className="icon-facebook" />
                      </a>
                      <a href="#" className="text-black p-2">
                        <span className="icon-twitter" />
                      </a>
                      <a href="#" className="text-black p-2">
                        <span className="icon-linkedin" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="team-member text-center">
                  <img
                    src="images/person_1.jpg"
                    alt="Image"
                    className="img-fluid mb-4 w-50 rounded-circle mx-auto"
                  />
                  <div className="text p-3">
                    <h2 className="mb-2 font-weight-light text-black h4">
                      Megan Smith
                    </h2>
                    <span className="d-block mb-3 text-white-opacity-05">
                      Real Estate Agent
                    </span>
                    <p className="mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Modi dolorem totam non quis facere blanditiis praesentium
                      est.{" "}
                    </p>
                    <p>
                      <a href="#" className="text-black p-2">
                        <span className="icon-facebook" />
                      </a>
                      <a href="#" className="text-black p-2">
                        <span className="icon-twitter" />
                      </a>
                      <a href="#" className="text-black p-2">
                        <span className="icon-linkedin" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="team-member text-center">
                  <img
                    src="images/person_2.jpg"
                    alt="Image"
                    className="img-fluid mb-4 w-50 rounded-circle mx-auto"
                  />
                  <div className="text p-3">
                    <h2 className="mb-2 font-weight-light text-black h4">
                      Brooke Cagle
                    </h2>
                    <span className="d-block mb-3 text-white-opacity-05">
                      Real Estate Agent
                    </span>
                    <p className="mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Modi dolorem totam non quis facere blanditiis praesentium
                      est.{" "}
                    </p>
                    <p>
                      <a href="#" className="text-black p-2">
                        <span className="icon-facebook" />
                      </a>
                      <a href="#" className="text-black p-2">
                        <span className="icon-twitter" />
                      </a>
                      <a href="#" className="text-black p-2">
                        <span className="icon-linkedin" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="team-member text-center">
                  <img
                    src="images/person_3.jpg"
                    alt="Image"
                    className="img-fluid mb-4 w-50 rounded-circle mx-auto"
                  />
                  <div className="text p-3">
                    <h2 className="mb-2 font-weight-light text-black h4">
                      Philip Martin
                    </h2>
                    <span className="d-block mb-3 text-white-opacity-05">
                      Real Estate Agent
                    </span>
                    <p className="mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Modi dolorem totam non quis facere blanditiis praesentium
                      est.{" "}
                    </p>
                    <p>
                      <a href="#" className="text-black p-2">
                        <span className="icon-facebook" />
                      </a>
                      <a href="#" className="text-black p-2">
                        <span className="icon-twitter" />
                      </a>
                      <a href="#" className="text-black p-2">
                        <span className="icon-linkedin" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="team-member text-center">
                  <img
                    src="images/person_1.jpg"
                    alt="Image"
                    className="img-fluid mb-4 w-50 rounded-circle mx-auto"
                  />
                  <div className="text p-3">
                    <h2 className="mb-2 font-weight-light text-black h4">
                      Megan Smith
                    </h2>
                    <span className="d-block mb-3 text-white-opacity-05">
                      Real Estate Agent
                    </span>
                    <p className="mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Modi dolorem totam non quis facere blanditiis praesentium
                      est.{" "}
                    </p>
                    <p>
                      <a href="#" className="text-black p-2">
                        <span className="icon-facebook" />
                      </a>
                      <a href="#" className="text-black p-2">
                        <span className="icon-twitter" />
                      </a>
                      <a href="#" className="text-black p-2">
                        <span className="icon-linkedin" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="team-member text-center">
                  <img
                    src="images/person_2.jpg"
                    alt="Image"
                    className="img-fluid mb-4 w-50 rounded-circle mx-auto"
                  />
                  <div className="text p-3">
                    <h2 className="mb-2 font-weight-light text-black h4">
                      Brooke Cagle
                    </h2>
                    <span className="d-block mb-3 text-white-opacity-05">
                      Real Estate Agent
                    </span>
                    <p className="mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Modi dolorem totam non quis facere blanditiis praesentium
                      est.{" "}
                    </p>
                    <p>
                      <a href="#" className="text-black p-2">
                        <span className="icon-facebook" />
                      </a>
                      <a href="#" className="text-black p-2">
                        <span className="icon-twitter" />
                      </a>
                      <a href="#" className="text-black p-2">
                        <span className="icon-linkedin" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div className="team-member text-center">
                  <img
                    src="images/person_3.jpg"
                    alt="Image"
                    className="img-fluid mb-4 w-50 rounded-circle mx-auto"
                  />
                  <div className="text p-3">
                    <h2 className="mb-2 font-weight-light text-black h4">
                      Philip Martin
                    </h2>
                    <span className="d-block mb-3 text-white-opacity-05">
                      Real Estate Agent
                    </span>
                    <p className="mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Modi dolorem totam non quis facere blanditiis praesentium
                      est.{" "}
                    </p>
                    <p>
                      <a href="#" className="text-black p-2">
                        <span className="icon-facebook" />
                      </a>
                      <a href="#" className="text-black p-2">
                        <span className="icon-twitter" />
                      </a>
                      <a href="#" className="text-black p-2">
                        <span className="icon-linkedin" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section site-section-sm bg-primary">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h2 className="text-white">
                Wide Range of Properties Just For You
              </h2>
              <p className="lead text-white-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <a
                href="#"
                className="btn btn-outline-primary btn-block py-3 btn-lg"
              >
                See Properties
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <About />
        <Contact />
      </div>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="mb-5">
                <h3 className="footer-heading mb-4">About HomeSpace</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Saepe pariatur reprehenderit vero atque, consequatur id
                  ratione, et non dignissimos culpa? Ut veritatis, quos illum
                  totam quis blanditiis, minima minus odio!
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="row mb-5">
                <div className="col-md-12">
                  <h3 className="footer-heading mb-4">Navigations</h3>
                </div>
                <div className="col-md-6 col-lg-6">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Buy</a>
                    </li>
                    <li>
                      <a href="#">Rent</a>
                    </li>
                    <li>
                      <a href="#">Properties</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 col-lg-6">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Terms</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h3 className="footer-heading mb-4">Follow Us</h3>
              <div>
                <a href="#" className="pl-0 pr-3">
                  <span className="icon-facebook" />
                </a>
                <a href="#" className="pl-3 pr-3">
                  <span className="icon-twitter" />
                </a>
                <a href="#" className="pl-3 pr-3">
                  <span className="icon-instagram" />
                </a>
                <a href="#" className="pl-3 pr-3">
                  <span className="icon-linkedin" />
                </a>
              </div>
            </div>
          </div>
          <div className="row pt-5 mt-5 text-center">
            <div className="col-md-12">
              <p>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © All rights reserved | This template is made with{" "}
                <i className="icon-heart text-danger" aria-hidden="true" /> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
