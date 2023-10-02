const express = require("express");
const { cartDao }  = require("./models/cartDao");

const Cart = express.Cart();


 const addInCart = async (userId) => {
        const exProducts = await cartDao.exProductsDao( productId, userId )
        

     
        
  
}

 const deleteCartsDao = async (productId) => {
    try {
        const products = await showCart(productId)
        if (products[0].amount === 1) {
            await deleteCartsDao(productId)
        }
        
    } catch (err) {
        const error = new Error ("Error sevices")
        error.statusCode = 500;
        throw error
        
    }
 }



module.exports = { addInCart, deleteCartsDao,}








  





















module.exports = Cart;


