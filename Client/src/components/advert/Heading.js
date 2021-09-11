import React from 'react';
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  Container
} from "reactstrap";

export const Heading = () => {
  return (
    <>
    <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Albelli Advertisement</a>
          </div>
          <ul className="nav navbar-nav">
                 <li><Link className="btn btn-primary" to="/AddAdvert">Add Advert</Link></li>         
          </ul>
        </div>
      </nav> 
      </>
 
  )
}