import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8 mb-5">
              <form action="#" className="p-5 bg-white border">
                <div className="row form-group">
                  <div className="col-md-12 mb-3 mb-md-0">
                    <label className="font-weight-bold" htmlFor="fullname">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      className="form-control"
                      placeholder="Full Name"
                    />
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="font-weight-bold" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="font-weight-bold" htmlFor="email">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="form-control"
                      placeholder="Enter Subject"
                    />
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="font-weight-bold" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      cols={30}
                      rows={5}
                      className="form-control"
                      placeholder="Say hello to us"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12">
                    <input
                      type="submit"
                      defaultValue="Send Message"
                      className="btn btn-primary  py-2 px-4 rounded-0"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <div className="p-4 mb-3 bg-white">
                <h3 className="h6 text-black mb-3 text-uppercase">
                  Contact Info
                </h3>
                <p className="mb-0 font-weight-bold">Address</p>
                <p className="mb-4">
                  203 Fake St. Mountain View, San Francisco, California, USA
                </p>
                <p className="mb-0 font-weight-bold">Phone</p>
                <p className="mb-4">
                  <a href="#">+1 232 3235 324</a>
                </p>
                <p className="mb-0 font-weight-bold">Email Address</p>
                <p className="mb-0">
                  <a href="#">youremail@domain.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section bg-light">
        <div className="container">
          <div className="row mb-5 justify-content-center">
            <div className="col-md-7">
              <div className="site-section-title text-center">
                <h2>Testimonies</h2>
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
                      Guest
                    </span>
                    <p className="mb-5">
                      “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Modi dolorem totam non quis facere blanditiis praesentium
                      est. ”
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
                      Guest
                    </span>
                    <p className="mb-5">
                      “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Modi dolorem totam non quis facere blanditiis praesentium
                      est. ”
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
                      Guest
                    </span>
                    <p className="mb-5">
                      “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Modi dolorem totam non quis facere blanditiis praesentium
                      est. ”
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
                      Guest
                    </span>
                    <p className="mb-5">
                      “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Modi dolorem totam non quis facere blanditiis praesentium
                      est. ”
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
                      Guest
                    </span>
                    <p className="mb-5">
                      “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Modi dolorem totam non quis facere blanditiis praesentium
                      est. ”
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
                      Guest
                    </span>
                    <p className="mb-5">
                      “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Modi dolorem totam non quis facere blanditiis praesentium
                      est. ”
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
                      Guest
                    </span>
                    <p className="mb-5">
                      “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Modi dolorem totam non quis facere blanditiis praesentium
                      est. ”
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
                      Guest
                    </span>
                    <p className="mb-5">
                      “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Modi dolorem totam non quis facere blanditiis praesentium
                      est. ”
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
                      Guest
                    </span>
                    <p className="mb-5">
                      “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Modi dolorem totam non quis facere blanditiis praesentium
                      est. ”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
