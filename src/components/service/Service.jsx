import React from "react";
import { RxDoubleArrowRight } from "react-icons/rx"
import "./Service.css"
import Link from "next/link";


function Services(props) {
    return (
      <div className="service-container">
        <div className="service__container-top">
          <img src={props.image} alt="" />
        </div>
        <div className="service__container-bottom">
            <h2>{props.title}</h2>
            <p>
              {props.description}
            </p>
            <Link href={props.Link} className="service--link">READ MORE<RxDoubleArrowRight className="icon--forward" /></Link>
        </div>
      </div>
    )
}

export default Services