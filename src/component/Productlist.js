import React, { Component } from 'react'
import Product from './Product'
import Title from './Title';
import axios from 'axios';
import Navbar from './Navbar';
import './Product.css' ;
//import Pagination1 from './Pagination';


var Tempproducts;


export default class Productlist extends Component {






    // console.log('fhvj',items.slice(1 * 9,(1 + 1) * 10));
    // handlePageChange(pageNumber) {
    //     console.log(`active page is ${pageNumber}`);
    //     this.setState({activePage: pageNumber});
    //   }






    constructor(props) {
        super(props)

        this.state = {

            activePage: 15,

            products: [],

            ExpiredProd: [],
            GoingtoExpiredProd: []
        };
        this.loadProducts = this.loadProducts.bind(this);

        // this.handleClick = this.handleClick.bind(this);
    }


    componentDidMount() {

        axios
            .get("product.json")
            .then(response => {

                const allProducts = this.getAllProduct(response.data);
                console.log('allProductsallProducts', allProducts);
                this.setState({ products: allProducts });
                Tempproducts = allProducts;

                this.getExpiredProducts(allProducts);

                this.Goingtoexpire(allProducts);

            })
            .catch(err => {
                console.log(err);
            });
    }


    // handleItemClick(element) {
    //     console.log("Clicked elelment ", element);


    // }




    render() {

        console.log(this.state.products);
        //console.log("responseresponse",this.props.response);

        return (
            <React.Fragment>

                <Navbar loadProducts={this.loadProducts} />
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products"></Title>
                        <img class="top" src="sony1.jpg" top width="100%" alt="">

                        </img>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        {this.state.products.map(element =>
                            <div className="col-sm-3">
                               
                                <Product handleItemClick={this.handleItemClick} data={element} />
                                
                            </div>)}

                    </div>
                </div>



            </React.Fragment>

            // <div>
            //   <Product/>
            // </div>
        )
    }




    getAllProduct(json, products = []) {
        if (json.hasOwnProperty("children")) {
            json.children.forEach(element => {
                this.getAllProduct(element, products);
            });
        } else {
            products.push(json);
        }
        return products;
    }

    getExpiredProducts(allProducts) {

        var expiredPro = allProducts.filter(function (element) {
            var warrantyP = element.warrantyPeriod.charAt(0);

            if (isNaN(warrantyP)) {
                warrantyP = 0;
            } else {
                warrantyP = parseInt(warrantyP);
            }

            var extendedW = element.extendedWarranty.charAt(0);

            if (isNaN(extendedW)) {
                extendedW = 0;
            } else {
                extendedW = parseInt(extendedW);
            }

            // warranty expiry time

            var orderedDate = new Date(element.orderedDate);
            var year = orderedDate.getFullYear();
            var month = orderedDate.getMonth();
            var day = orderedDate.getDate();
            var expiryDate = new Date(year + (warrantyP + extendedW), month, day);


            if (expiryDate < new Date()) {
                return element;
            }
        });
        console.log("ExpiredProducts", expiredPro);
        this.setState({ ExpiredProd: expiredPro });
    }



    Goingtoexpire(allProducts) {


        var goingToExpiredPro = allProducts.filter(function (element) {
            var warrantyP = element.warrantyPeriod.charAt(0);

            if (isNaN(warrantyP)) {
                warrantyP = 0;
            } else {
                warrantyP = parseInt(warrantyP);
            }

            var extendedW = element.extendedWarranty.charAt(0);

            if (isNaN(extendedW)) {
                extendedW = 0;
            } else {
                extendedW = parseInt(extendedW);
            }

            // warranty expiry time

            var orderedDate = new Date(element.orderedDate);
            var year = orderedDate.getFullYear();
            var month = orderedDate.getMonth();
            var day = orderedDate.getDate();
            var expiryDate = new Date(year + (warrantyP + extendedW), month, day);

            var currentDate = new Date();

            const diffTime = Math.abs(currentDate.getTime() - expiryDate.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            console.log(diffDays);


            if (diffDays <= 120) {
                return element;
            }
        });
        console.log("ExpireingProducts", goingToExpiredPro);
        this.setState({ GoingtoExpiredProd: goingToExpiredPro });
    }

    loadProducts(Title) {
        let newArr = Tempproducts;
        console.log("TitleTitle", Tempproducts)
        if (Title === 'All Product') {
            this.setState({ products: newArr });

        }

        else if (Title === 'Expired Product') {
            this.setState({ products: this.state.ExpiredProd });
        }

        else

            this.setState({ products: this.state.GoingtoExpiredProd });
    }







}
