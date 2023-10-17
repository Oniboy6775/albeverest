import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Landing2 = () => {
  const [navOpen, setIsNavOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [priceList, setPriceList] = useState([]);
  const toggleNav = () => setIsNavOpen(!navOpen);
  const fetchPriceList = async () => {
    try {
      const response = await axios.get("/api/v1/prices");
      setPriceList(response.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  const navigate = useNavigate();
  useEffect(() => {
    fetchPriceList();
  }, []);
  return (
    <div>
      <header>
        <div className="top-header">
          <h2 className="site-name font-bold">
            Albeve<span className="header-orange">rest</span>
          </h2>
          <div className="hamburger" onClick={() => toggleNav()}>
            <img
              src={`./assets/images/${navOpen ? "close" : "menu"}.svg`}
              className={`hamburger-img ${navOpen ? "close" : "menu"}`}
              alt="menu"
            />
          </div>
          <nav className="desktop-navbar">
            <ul className="">
              <li>
                <a href="/">Home</a>
              </li>
              {/* <li>
                <a href="#">About Us</a>
              </li> */}
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="/priceList">Pricing</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/register">Register</a>
              </li>
            </ul>
          </nav>
        </div>
        <nav className={navOpen ? "navbar flex" : "navbar none"}>
          <ul className="">
            <li>
              <a href="/">Home</a>
            </li>
            {/* <li>
              <a href="/">About Us</a>
            </li> */}
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="/priceList">Pricing</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero-section">
          <div className="hero-section-contrast">
            <h1 className="font-extrabold">
              Welcome To <span className="green">Albeve</span>
              <span className="orange">rest!</span>
            </h1>
            <p>
              A technology platform that offers solutions to digital needs at
              best possible price without compromising quality.
            </p>
            <div className="register-buttons">
              <button
                onClick={() => navigate("/register")}
                className="btn bg-orange flex items-center justify-center"
              >
                <img src="./assets/register-icon.png" alt="register" />
                <h3>REGISTER</h3>
              </button>
              <button
                onClick={() => navigate("/login")}
                className="btn bg-green"
              >
                <img src="./assets/login-icon.png" alt="register" />
                <h3>LOGIN</h3>
              </button>
            </div>
          </div>
        </section>
        <section className="service-section">
          <div className="service-section-div">
            <div className="service-wrapper">
              <div className="service">
                <p className=" rounded p-1 automated">AUTOMATED</p>
                <img
                  src="./assets/images/icons/buy_airtime.svg"
                  alt="call"
                  className="service-img"
                />
                <p className="service-text">Buy Airtime</p>
              </div>
              <div className="service">
                <p className=" rounded p-1 automated">AUTOMATED</p>
                <img
                  src="./assets/images/icons/buy_data.svg"
                  alt="call"
                  className="service-img"
                />
                <p className="service-text">Buy Data</p>
              </div>
              <div className="service">
                <p className=" rounded p-1 automated">AUTOMATED</p>
                <img
                  src="./assets/images/icons/buy_electricity.svg"
                  alt="call"
                  className="service-img"
                />
                <p className="service-text">Buy Electricity</p>
              </div>
              <div className="service">
                <p className=" rounded p-1 automated">AUTOMATED</p>
                <img
                  src="./assets/images/icons/pay_cable.svg"
                  alt="call"
                  className="service-img"
                />
                <p className="service-text">Cable TV</p>
              </div>
              <div className="service">
                <p className=" rounded p-1 automated">AUTOMATED</p>
                <img
                  src="./assets/images/icons/pay_bills.svg"
                  alt="call"
                  className="service-img"
                />
                <p className="service-text">Wallet Summary</p>
              </div>
              <div className="service">
                <p className=" rounded p-1 automated">AUTOMATED</p>
                <img
                  src="./assets/images/icons/bulk_sms.svg"
                  alt="call"
                  className="service-img"
                />
                <p className="service-text">Bulk SMS</p>
              </div>
            </div>
            <div className="little-section">
              <h2 className="services-header">
                The Best Platform For Automated VTU Services
              </h2>
              <p className="services-paragraph">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptate debitis.
              </p>
            </div>
          </div>
        </section>
        <section className="section-whyus">
          <div className="whyus-div">
            <img
              src="./assets/images/home-facility-bg.png"
              alt=""
              className="whyus-img"
            />
            <div className="whyus-text">
              <h2 className="whyus-header">Why Choose Us?</h2>
              <p className="whyus-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                quis ea soluta ipsum cumque.
              </p>
              <div className="whylistwrapper">
                <div className="whyuslidiv">
                  <img src="assets/images/check.png" alt="check" />
                  <p>We're Fast</p>
                </div>
                <div className="whyuslidiv">
                  <img src="assets/images/check.png" alt="check" />
                  <p>Automated Services</p>
                </div>
                <div className="whyuslidiv">
                  <img src="assets/images/check.png" alt="check" />
                  <p>100% Secured</p>
                </div>
                <br className="whylistbreak" />
                <div className="whyuslidiv">
                  <img src="assets/images/check.png" alt="check" />
                  <p>We're Reliable</p>
                </div>
                <div className="whyuslidiv">
                  <img src="assets/images/check.png" alt="check" />
                  <p>Always Online</p>
                </div>
                <div className="whyuslidiv">
                  <img src="assets/images/check.png" alt="check" />
                  <p>24/7 Customer Suppot</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="stat-section">
          <div className="stat-div">
            <div className="stat-img-div">
              <img
                src="./assets/images/home-bg.png"
                alt=""
                className="stat-img"
              />
              {/* <img
                src="./assets/images/smartphone1.png"
                className="smartphone"
                alt=""
              /> */}
            </div>
            <div className="stat-text" id="services">
              <h2 className="whyus-header">We Provide Awesome Services</h2>
              <p className="whyus-paragraph">
                Certain things are hard 😓 but making payments shouldn't be one
                of them 😋💗. ALBEVEREST helps you make payments for services
                you enjoy right from the comfort of your home or office. The
                experience of total convenience,fast service delivery and easy
                payment is just at your fingertips.
              </p>
            </div>
          </div>
          <div className="ourstats">
            <div className="ourstats-div">
              <h1 className="ourstats-value">424k</h1>
              <p className="ourstats-paragraph">Registered Users</p>
            </div>
            <div className="ourstats-div">
              <h1 className="ourstats-value">345k</h1>
              <p className="ourstats-paragraph">Happy Clients</p>
            </div>
            <div className="ourstats-div">
              <h1 className="ourstats-value">319+</h1>
              <p className="ourstats-paragraph">Logged in Users</p>
            </div>
            <div className="ourstats-div">
              <h1 className="ourstats-value">3+</h1>
              <p className="ourstats-paragraph">Years of Experience</p>
            </div>
          </div>
        </section>
        <section className="data-section">
          <div className="data-section-div">
            <h1 className="data-header-text">
              Affordable Data Plans And Prices
            </h1>
            <div className="data-cards-wrapper ">
              <div className="data-pricing-card  mtn-data-card">
                <img
                  src="./assets//images//mtn.png"
                  alt=""
                  className="network-img"
                />
                <p className="network-name">MTN DATA</p>
                {loading ? (
                  <div>
                    <div className="data-price-line">
                      <div className="data-quantity">Loading...</div>
                      <div className="data-price">₦Loading...</div>
                      <div className="data-duration">Loading...</div>
                    </div>
                  </div>
                ) : (
                  <div>
                    {priceList
                      .filter((e) => e.plan_network === "MTN")
                      .map((e) => {
                        return (
                          <div key={e._id} className="data-price-line">
                            <div className="data-quantity">{e.plan}</div>
                            <div className="data-price">₦{e.apiPrice}</div>
                            <div className="data-duration">
                              {e.month_validate}
                            </div>
                          </div>
                        );
                      })}
                    <div className="order-btn order-mtn">Order now</div>
                  </div>
                )}
              </div>
              <div className="data-pricing-card  airtel-data-card">
                <img
                  src="./assets//images//airtel.png"
                  alt=""
                  className="network-img"
                />
                <p className="network-name">AIRTEL DATA</p>
                {loading ? (
                  <div>
                    <div className="data-price-line">
                      <div className="data-quantity">Loading...</div>
                      <div className="data-price">₦Loading...</div>
                      <div className="data-duration">Loading...</div>
                    </div>
                  </div>
                ) : (
                  <div>
                    {priceList
                      .filter((e) => e.plan_network === "AIRTEL")
                      .map((e) => {
                        return (
                          <div key={e._id} className="data-price-line">
                            <div className="data-quantity">{e.plan}</div>
                            <div className="data-price">₦{e.apiPrice}</div>
                            <div className="data-duration">
                              {e.month_validate}
                            </div>
                          </div>
                        );
                      })}
                    <div className="order-btn order-mtn">Order now</div>
                  </div>
                )}
              </div>
              <div className="data-pricing-card  glo-data-card">
                <img
                  src="./assets/images/glo.png"
                  alt=""
                  className="network-img"
                />
                <p className="network-name">GLO DATA</p>
                {loading ? (
                  <div>
                    <div className="data-price-line">
                      <div className="data-quantity">Loading...</div>
                      <div className="data-price">₦Loading...</div>
                      <div className="data-duration">Loading...</div>
                    </div>
                  </div>
                ) : (
                  <div>
                    {priceList
                      .filter((e) => e.plan_network === "GLO")
                      .map((e) => {
                        return (
                          <div key={e._id} className="data-price-line">
                            <div className="data-quantity">{e.plan}</div>
                            <div className="data-price">₦{e.apiPrice}</div>
                            <div className="data-duration">
                              {e.month_validate}
                            </div>
                          </div>
                        );
                      })}
                    <div className="order-btn order-mtn">Order now</div>
                  </div>
                )}
              </div>
              <div className="data-pricing-card  glo-data-card">
                <img
                  src="./assets/images/9mobile.png"
                  alt=""
                  className="network-img"
                />
                <p className="network-name">9MOBILE DATA</p>
                {loading ? (
                  <div>
                    <div className="data-price-line">
                      <div className="data-quantity">Loading...</div>
                      <div className="data-price">₦Loading...</div>
                      <div className="data-duration">Loading...</div>
                    </div>
                  </div>
                ) : (
                  <div>
                    {priceList
                      .filter((e) => e.plan_network === "9MOBILE")
                      .map((e) => {
                        return (
                          <div key={e._id} className="data-price-line">
                            <div className="data-quantity">{e.plan}</div>
                            <div className="data-price">₦{e.apiPrice}</div>
                            <div className="data-duration">
                              {e.month_validate}
                            </div>
                          </div>
                        );
                      })}
                    <div className="order-btn order-mtn">Order now</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        {/* <section className="testimonial-section">
          <div className="testimonial-section-div">
            <div>
              <h1 className="whyus-header text-center">Users Testimonials</h1>
              <p className="text-center mt-4">
                Checkout these feedbacks from some of our satisfied customers.
              </p>
            </div>
            <div className="testimonial-img-sect">
              <img
                src="./assets/images/carousel-sqare.png"
                className="carousel-square"
                alt=""
              />
              <img
                src="./assets/images/testimonial-img.png"
                className="testimonial-img"
                alt=""
              />
              <img
                src="./assets/images/carousel-round.png"
                className="carousel-round"
                alt=""
              />
              <div className="flex-center">
                <p className="whyus-paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati officiis deserunt reprehenderit dolorem.
                </p>
                <h2 className="mt-3 mb-3">Name Here</h2>
                <p>Student</p>
              </div>
            </div>
          </div>
        </section> */}

        <section className="ourpartner-section">
          <div className="ourpartner-section-div">
            <h1 className="ourpartner-header">OUR PARTNERS</h1>
            <p className="whyus-paragraph">
              Below is a list of some of our supported service provider(s)
            </p>
            <div className="logoswrapper">
              <div className="logo-container">
                <img
                  src="/assets/images/logo-1.png"
                  className="logo-img"
                  alt=""
                />
              </div>
              <div className="logo-container">
                <img
                  src="/assets/images/logo-2.png"
                  className="logo-img"
                  alt=""
                />
              </div>
              <div className="logo-container">
                <img
                  src="/assets/images/logo-5.png"
                  className="logo-img"
                  alt=""
                />
              </div>
              <div className="logo-container">
                <img
                  src="/assets/images/logo-7.png"
                  className="logo-img"
                  alt=""
                />
              </div>
              <div className="logo-container">
                <img
                  src="/assets/images/logo-8.png"
                  className="logo-img"
                  alt=""
                />
              </div>
              <div className="logo-container">
                <img
                  src="/assets/images/logo-9.png"
                  className="logo-img"
                  alt=""
                />
              </div>
              <div className="logo-container">
                <img
                  src="/assets/images/logo-11.png"
                  className="logo-img"
                  alt=""
                />
              </div>
              <div className="logo-container">
                <img
                  src="/assets/images/logo-12.png"
                  className="logo-img"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="footer-div">
            <div className="footer-about">
              <h2>
                <span className="green">Albeve</span>
                <span className="orange">rest</span>
              </h2>
              <p>
                We offer instant recharge of Airtime, Databundle, CableTV (DStv,
                GOtv & Startimes), Electricity Bill Payment and more.
              </p>
            </div>
            <div className="footer-useful-link">
              <h3>Useful Links</h3>
              <ul className="footer-list">
                <li>
                  <a href="/" className="footer-link">
                    Home
                  </a>
                </li>
                <li>
                  {/* <a href="#" className="footer-link">
                    About Us
                  </a> */}
                </li>
                <li>
                  <a href="#services" className="footer-link">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/login" className="footer-link">
                    Login
                  </a>
                </li>
                <li>
                  <a href="/register" className="footer-link">
                    Register
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-contact-info">
              <p>
                <span>Address 1</span>: 25 Atunnise street olowora Magodo Lagos
              </p>
              {/* <p>
                <span>Address 2</span>: Lorem ipsum dolor sit amet consectetur
                adipisicing elit. harum, veniam.
              </p> */}
              <p>
                <span>Email</span>: support@albeverest.com
              </p>
              <p>
                <span>Phone</span>: support@albeverest.com
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Landing2;
