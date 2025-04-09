import React from "react";
import { IoCall } from "react-icons/io5"
import { CiMail } from "react-icons/ci"
import { HiLocationMarker } from "react-icons/hi"
import { FaLinkedin } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa6";
import { MdCopyright } from "react-icons/md"
import { IoLogoBuffer } from "react-icons/io"

import "./Footer.css"


function Footer() {
    return (
      <div className="footer__container">
        <div className="footer__container-top">
          <div className="footer__container-top_section1">
            <div className="section1-top">
              <IoLogoBuffer />
            </div>
            <div className="section1-body">
              <IoCall />
              <p>CALL: 090-000001</p>
            </div>
            <div className="section1-body">
              <CiMail />
              <p>Contact@roof-app.com</p>
            </div>
            <div className="section1-body">
              <HiLocationMarker />
              <p>12 Unilag road, Are-ago abule-oja</p>
            </div>
          </div>
          <div className="footer__container-top_section2">
            <h3>Services</h3>
            <div className="section2-body">
              <p>New Roofs</p>
              <p>Renovations</p>
              <p>Flat Roofs</p>
              <p>Tiled Roofs</p>
            </div>
          </div>
          <div className="footer__container-top_section2">
            <h3>Get Started</h3>
            <div className="section2-body">
              <p>Contact</p>
              <p>About us</p>
              <p>Portfolio</p>
              <p>Reviews</p>
              <p>Free quote</p>
            </div>
          </div>
          <div className="footer__container-top_section4">
            <h3>Contact Us</h3>
            <form className="section4-body">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email Address" />
              <input type="tel" placeholder="Phone Number: +234- " />
              <input type="text" placeholder="Residence" />
              <button>Send</button>
            </form>
          </div>
        </div>
        <div className="footer__container-bottom">
          <p>
            <MdCopyright /> All rights reserved{" "}
          </p>
          <div className="footer__container-bottom_right">
            <p>
              <FaLinkedin />
            </p>
            <p>
              <FaFacebookF />
            </p>
            <p>
              <FaInstagram />
            </p>
          </div>
        </div>
      </div>
    )
}

export default Footer