import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';
// import './Detail.css'


export default class Detail extends Component {
    render() {

        const main = this.props.location.state.main;
        console.log("mainmain", main);
        return (





            <div className="container-fluid" >
                <div className="row">
                <div className="col-sm-4">
               
   
                        <Card>
                            <CardBody>
                                <CardTitle><b>Name : </b>{main.name} </CardTitle>
                                <CardSubtitle><b>Serial no. : </b>{main.serialNo}</CardSubtitle>
                            </CardBody>
                            <CardImg class="con" className="card-img-top" width="50" src="001.jpg" alt="Card image cap" />
                           
                            <CardBody >
                                <CardText><b>Discount : </b>{main.discount.toString()}</CardText>
                                <CardText><b>Price : </b>{main.price.toString()}</CardText>

                            </CardBody>
                           
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}
