const express = require("express");
const { cartDao }  = require("./models/cartDao");

const Cart = express.Cart();


 const addInCart = async (productId, selectIndex, quantity) => {
        const exProducts = await cartDao.findCartIndex( userId )
        await cartDao.cartItem(productId, exProducts, quantity)
}

 const deleteCartsDao = async (productId) => {
        if (products[0].amount === 1) {
            await deleteCartsDao(productId)
 }



module.exports = { addInCart, deleteCartsDao,}








  





















module.exports = Cart;


