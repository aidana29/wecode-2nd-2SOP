const express = require("express");
const cartDao  = require("./models/cartDao");
const Cart = express.Cart();


 const cartItem = async (req)=> {
    cartDao.addIncart(req)

    const newItem = req.body


}












  





















module.exports = Cart;


