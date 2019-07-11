import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo1 from '../images/logo1.svg';

import { NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

//import styled from 'styled-components';

export default class Navbar extends Component {
  render() {


    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo1} height="100" alt="store" className="navbar-brand" />

          <b>Home</b>
        </Link>

        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
        </Link>

          </li>

        </ul>

       



        {/* <NavItem>
          <NavLink href="/components/">Inactive Link</NavLink>
        </NavItem> */}
        <UncontrolledDropdown setActiveFromChild>
          <DropdownToggle tag="a" className="nav-link" caret>
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a" active onClick={() => this.props.loadProducts("All Product")}>All Products</DropdownItem>
            <DropdownItem tag="a" active onClick={() => this.props.loadProducts("Expired Product")}>ExpiredProducts</DropdownItem>
            <DropdownItem tag="a" active onClick={() => this.props.loadProducts("GoingToExpire Product")}>AlmostExpiredProducts</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>






      </nav>






    );
  }
}

