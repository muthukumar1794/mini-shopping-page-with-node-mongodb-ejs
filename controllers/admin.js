import gpath from '../utility/path'
const path = require('path')
const Product = require('../models/adminModels/add-product')


exports.addProducts = (req,res,next)=>{
    res.render(path.join(gpath,'views','admin-pages','edit-product'),{editing:false})
}

exports.addProductsData = (req,res,next)=>{
    const body = req.body
console.log(req.user)
    const createProduct = new Product(body,req.user._id,null)
    createProduct.save()
    .then(result=>{
        console.log(result)
        res.redirect('/admin/index')
    })
    .catch(err=>{

       console.log(err) 
    })
}

exports.getadminIndex = (req,res,next)=>{
    Product.fetchall()
    .then(products=>{
      
        res.render(path.join(gpath,'views','admin-pages','admin-index'),{products:products})
        // res.send(products)

    })
    .catch(error=>{
        console.log("fetch error",error)
    })
}
exports.getProductDetails = (req,res,next) =>{
    Product.findById(req.params.prodid)
    .then(product=>{
        res.render(path.join(gpath,'views','admin-pages','product-detail'),{product:product})
    })
}

exports.geteditProduct = (req,res,next) =>{
    Product.findById(req.params.prodID)
    .then(product=>{
        res.render(path.join(gpath,'views','admin-pages','edit-product'),{product:product,editing:req.query.edit})
    })
    .catch(err=>{
        console.log("edit prod error",err)
    })
}

exports.editProductsData = (req,res,next)=>{
    const body = req.body
    const prodid = req.body.prodid
    const updateProduct = new Product(body,prodid)
    updateProduct.save()
    .then(result=>{
        console.log("update result",result)
        Product.findById(prodid)
        .then(product=>{
            res.render(path.join(gpath,'views','admin-pages','product-detail'),{product:product})
        })
        .catch(err=>{
            console.log("errror")
        })
})
    .catch(err=>{
        console.log("update error",err)
    })

}

exports.deleteProduct = (req,res,next)=>{
    Product.deleteById(req.params.prodID)
    .then(result=>{
        console.log(result)
        res.redirect('/admin/index')
    })
    .catch(err=>{
        console.log("deleting error",err)
    })

}