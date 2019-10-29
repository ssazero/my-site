import React from "react";
import { Link } from "react-scroll";

import "./NavigationItem.scss";

const NavigationItem = props => {
  const navigationItemClasses = ["navigation-item"];
  if (props.opened) {
    navigationItemClasses.push("navigation-item--show-on");
  }
  return (
    <li className={navigationItemClasses.join(" ")}>
      <Link
        className="navigation-item__link"
        data-hover={props.children}
        to={props.to}
        spy={true}
        smooth={true}
        hashSpy={true}
        duration={500}
        isDynamic={true}
        offset={-50}
        delay={50}
        activeClass="navigation-item--active"
        ignoreCancelEvents={false}
        onClick={props.clicked}
      >
        {props.children}
      </Link>
    </li>
  );
};

export default NavigationItem;
