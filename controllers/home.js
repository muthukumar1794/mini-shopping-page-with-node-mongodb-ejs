const Product = require('../models/adminModels/add-product')
const User = require('../models/adminModels/user')
const path = require('path')
import gpath from '../utility/path'

exports.getHome = (req,res,next)=>{
    Product.fetchall()
    .then(products=>{

        res.render(path.join(gpath,'views','product-pages','home'),{products:products})
        // res.send(products)

    })
    .catch(error=>{
        console.log("fetch error",error)
    })
}

exports.addToCart = (req,res,next)=>{

    const prodID = req.body.add_to_cart_id.toString()
    console.log("object,req.body.add_to_cart_id",req.body.add_to_cart_id)
    const userCart = new User(req.user)
    console.log("1111111111111",req.user)
userCart.updateCart(prodID)
.then(cart=>{
    console.log("updated")
    res.redirect('/shop/cart')
}).catch(err=>{console.log("error update cart on controller",err)})
}

exports.cartView = (req,res,next)=>{
    
    User.getCart(req.user)
    .then(cart=>{
        console.log("cart get",cart)
        res.render(path.join(gpath,'views','product-pages','cart'),{cartproducts:cart})
    })
    .catch(error=>{console.log("error on get prd",error)})
}

exports.DeleteCartProduct = (req,res,next)=>{
    const prodID = req.params.prodID
    User.deleteCartProduct(prodID,req.user)
    .then(result=>{
        console.log("resulttttt")
        res.redirect('/shop/cart')
    })
}

exports.Checkout = (req,res,next)=>{
    User.cartCheckout(req.user).then(checkout=>{
        
        console.log("checkout successful")
        res.redirect('/shop/cart')
    })
}

exports.myOrders = (req,res,next)=>{
    User.myOrders(req.user)
    .then(myorders=>{
        console.log("orrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",myorders)
        res.render(path.join(gpath,'views','product-pages','my-orders'),{orders:myorders})
    })


    
}