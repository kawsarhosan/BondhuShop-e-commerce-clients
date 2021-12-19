import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            {/* <!-- Footer --> */}
<footer className="text-center text-lg-start bg-light ">
  {/* <!-- Section: Social media --> */}
  <div className='custom-bg'>
  {/* <section
    className="container d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
  >
    
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
   
    <div>
      <NavLink to="/facebook" className="me-4 ">
        <i className="fab fa-facebook-f"></i>
      </NavLink>
      <NavLink to="/twitter" className="me-4 ">
        <i className="fab fa-twitter"></i>
      </NavLink>
      <NavLink to="/google" className="me-4 ">
        <i className="fab fa-google"></i>
      </NavLink>
      <NavLink to="/instagram" className="me-4 ">
        <i className="fab fa-instagram"></i>
      </NavLink>
      <NavLink to="/linkdin" className="me-4 ">
        <i className="fab fa-linkedin"></i>
      </NavLink>
      <NavLink to="/github" className="me-4 ">
        <i className="fab fa-github"></i>
      </NavLink>
    </div>
    
  </section> */}
  {/* <!-- Section: Social media -->

  <!-- Section: Links  --> */}
  <section>
    <div className="container  text-center text-md-start mt-3 pt-5">
      {/* <!-- Grid row --> */}
      <div className="row mt-3">
        {/* <!-- Grid column --> */}
        <div className="col-md-3  col-lg-4 col-xl-3 mx-auto mb-4">
          {/* <!-- Content --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            <img style={{width: "250px"}} src="/Images/bs-logo.png" alt="" />
          </h6>
          <p className=''>
          Find all Flats for Rent in Dhaka.  Flats and Apartments for Rent in Dhaka and contact houserent.com agents for enquiries
          </p>
        </div>
        {/* <!-- Grid column -->

        <!-- Grid column --> */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            Services
          </h6>
          <p>
            <NavLink to="//ambulance" className="">Family Float</NavLink>
          </p>
          <p>
            <NavLink to="//React" className="">Bacelor Float</NavLink>
          </p>
          <p>
            <NavLink to="//vue" className="">Rent</NavLink>
          </p>
          <p>
            <NavLink to="//laravel" className="">Hotel</NavLink>
          </p>
        </div>
        {/* <!-- Grid column -->

        <!-- Grid column --> */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <NavLink to="/corona" className="">Helpline</NavLink>
          </p>
          <p>
            <NavLink to="/care" className="">Emaergency Care</NavLink>
          </p>
          <p>
            <NavLink to="/dgfp" className="">Govt</NavLink>
          </p>
          <p>
            <NavLink to="/help" className="">Help</NavLink>
          </p>
        </div>
        {/* <!-- Grid column -->

        <!-- Grid column --> */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 foot">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><i className="fas fa-home me-3"></i> Farmgate, Tejgaon, Dhaka.</p>
          <p>
            <i className="fas fa-envelope me-3"></i> contact@bondhushop.com
          </p>
          <p><i className="fas fa-phone me-3"></i> 01758216414</p>
          <p><i className="fas fa-print me-3"></i> 01854256485</p>
        </div>
        {/* <!-- Grid column --> */}
      </div>
      {/* <!-- Grid row --> */}
    </div>
  </section>
  </div>
  {/* <!-- Section: Links  -->

  <!-- Copyright --> */}
  <div className="text-center text-light custom-bg2 p-4" >
    © 2021 Copyright BondhuShop.com || All rights reserved
  </div>
  {/* <!-- Copyright --> */}
</footer>
{/* <!-- Footer --> */}
        </div>
    );
};

export default Footer;