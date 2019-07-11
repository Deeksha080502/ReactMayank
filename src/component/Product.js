// 

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Card, CardImg, CardBody, CardSubtitle, CardTitle, CardText } from 'reactstrap';


import Detail from './Detail';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './Product.css';





export default class Product extends Component {








  render() {
    const main = this.props.data;
    //console.log("expert",main);
    return (


<div>

      <div class="container">

        <Card class="card">
          <CardImg class="img" top width="100%" src="001.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle class="card:hover"> <b>Name :</b> {this.props.data.name}</CardTitle>
            <CardSubtitle><b>modelNo :</b>{this.props.data.modelNo}</CardSubtitle>
            <CardText><b>warrantyPeriod :</b>{this.props.data.warrantyPeriod}</CardText>


            <Link to={{
              pathname: "/detail",
              state: { main }

            }}>

              <a><b>imei :</b>{this.props.data.imei}</a>

              {/* onClick={(e) => this.props.handleItemClick(this.props.data)} */}
            </Link>

            <Link to="/cart" className="ml-auto">

              <button className="btn btn-primary">
                <i className="fas fs-cart-plus">
                  Add to cart
</i>
              </button>

            </Link>


          </CardBody>
        </Card>

      </div>
      </div>


    );


  }
}







