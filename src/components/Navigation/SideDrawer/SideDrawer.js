import React, { Fragment } from "react";

import logo from "../../../assets/images/logo.png";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawer.scss";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = props => {
  let sideDrawerClasses = ["side-drawer", "side-drawer--closed"];
  if (props.opened) {
    sideDrawerClasses = ["side-drawer", "side-drawer--opened"];
  }
  return (
    <Fragment>
      <Backdrop show={props.opened} clicked={props.closed} />
      <div className={sideDrawerClasses.join(" ")} onClick={props.closed}>
        <nav>
          <NavigationItems clicked={props.closed} opened={props.opened} />
        </nav>
        <div className="side-drawer__logo">
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </Fragment>
  );
};

export default SideDrawer;
