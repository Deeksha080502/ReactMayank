import React, { Component } from 'react'
import {storeProducts} from './data';


const ProductContext = React.createContext();

 class ProductProvider extends Component {

    state = {
        product : storeProducts 
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state.product
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};