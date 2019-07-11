export default function cartAddition(orderNo){
    return{
        type:"ADDTOCART" ,
        value: orderNo
    }
}

export default function Increament(orderNo){
    return{
        type:"INCREMENT",
        value: orderNo
    }
}

export default function Decreament(orderNo){
    return{
        type:"DECREMENT" ,
        value: orderNo
    }
}

export default function storeAllProductList(allProduct){
    return{
        type: "STOREDATA",
        value: allProduct
    }
}


