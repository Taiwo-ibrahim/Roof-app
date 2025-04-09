"use client"

import React, {useState} from "react"
import { IoLogoBuffer } from "react-icons/io"
import { RxHamburgerMenu } from "react-icons/rx"
import "./Navbar.css"
import { IoClose } from "react-icons/io5"
import Link from "next/link"


function Navbar() {

  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  }



    return (
      <div className="navbar__container">
        <div className="navbar__container-top">
          <p>Call: 090-000001</p>
        </div>
        <div className="navbar__container-bottom">
          <Link href="/" className="navbar__container-bottom_logo">
            <IoLogoBuffer />
          </Link>
          <div className="navbar__container-bottom_link">
            <p>Roof Inspection</p>
            <p>Services</p>
            <p>Reviews </p>
            <p>About us</p>
          </div>
          <div className="navbar__container-bottom_button">
            <button>Contact</button>
          </div>
          <div className="navbar__container-responsive">
            <div className="navbar__container-responsive_top">
              <Link href="/">
                <IoLogoBuffer className="RI" />              
              </Link>
              {show ? <IoClose className="RI" onClick={toggleShow} /> : <RxHamburgerMenu className="RI" onClick={toggleShow} /> }
            </div>
            <div className={show ? "navbar__container-responsive_bottom" : "hide"}>
              <p>Roof Inspection</p>
              <p>Services</p>
              <p>Reviews</p>
              <p>About us</p>
              <button>Contact</button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Navbar