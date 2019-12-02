import React, { Component } from "react";
import {IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoVk} from "react-icons/io";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            {/* footer list */}
            <div className="col-12 col-md-3">
              <h6 className="footer__title">Download Our App</h6>
              <ul className="footer__app">
                <li>
                  <a href="#">
                    <img src="./image/Download_on_the_App_Store_Badge.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="./image/google-play-badge.png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
            {/* end footer list */}
            {/* footer list */}
            <div className="col-6 col-sm-4 col-md-3">
              <h6 className="footer__title">Resources</h6>
              <ul className="footer__list">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Pricing Plan</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
              </ul>
            </div>
            {/* end footer list */}
            {/* footer list */}
            <div className="col-6 col-sm-4 col-md-3">
              <h6 className="footer__title">Legal</h6>
              <ul className="footer__list">
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
              </ul>
            </div>
            {/* end footer list */}
            {/* footer list */}
            <div className="col-12 col-sm-4 col-md-3">
              <h6 className="footer__title">Contact</h6>
              <ul className="footer__list">
                <li>
                  <a href="tel:+84936140397">+84 936 140 397</a>
                </li>
                <li>
                  <a href="mailto:minhtuannguyen140397@gmail.com">minhtuannguyen140397@gmail.com</a>
                </li>
              </ul>
              <ul className="footer__social">
                <li className="facebook">
                  <a href="#"style={{color:"#3b5999"}}>
                    <i><IoLogoFacebook /></i> 
                  </a>
                </li>
                <li className="instagram">
                  <a href="#"style={{color:"#ff5860"}} >
                    <i><IoLogoInstagram /></i>
                  </a>
                </li>
                <li className="twitter">
                  <a href="#"style={{color:"#1da1f2"}}>
                    <i ><IoLogoTwitter /></i>
                  </a>
                </li>
                <li className="vk">
                  <a href="#"style={{color:"#45668e"}}>
                    <i><IoLogoVk /></i>
                  </a>
                </li>
              </ul>
            </div>
            {/* end footer list */}
            {/* footer copyright */}
            <div className="col-12">
              <div className="footer__copyright">
                <small>
                  © 2019 FlixGo. 
                </small>
                <ul>
                  <li>
                    <a href="#">Copyright @Minh Tuan</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* end footer copyright */}
          </div>
        </div>
      </footer>
    );
  }
}
