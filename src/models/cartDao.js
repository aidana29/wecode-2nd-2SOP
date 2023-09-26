const { DataSource } = require("typeorm");


const findCartIndex = async(user_id) =>{`
    SELECT id
    FROM user_id = ${user_id}
`}
return userId;

const addInCart = async () => {
    await myDataSource.query(`
    INSERT INTO carts (user_id, status) VALUE
    (${req.user_id}, 1);
    `)
    const cart_id = findCartIndex(req.user_id)
    await myDataSource.query(`
    INSERT INTO cart_items (product_id,cart_is,price,quntity) VALUE
    (${req.body.productId}, ${cart_id}, ${price} 1);
    
    `);

}

const showCart = async () => {
    await myDataSource.query(`
    SELECT 
    cart_items.cart_id,
    cart_items.price,
    cart_items.quntity,
    cart_items.product_id,
    cart.id FROM
    cart.id = cart_items.cart_id;
    `)
}

const exProductsDao = async (userId, productId) => {
    try{
        await myDataSource.query(`
        SELETE * FROM cart WHERE user_id =???, product_id = ??`, [user_id, product_id]
        );
    } catch (err) {
        const error = new Error("Error Dao");
        error.statusCode = 500;
        throw error;
    }
};

const deleteCartsDao = async (productId) => {
    try {
        await myDataSource.query(`
        SELETE FROM cart WHERE product_id =??` , [productId]
        );
    } catch (err) {
        const error = new Error ("Error Dao");
        error.statusCode = 500;
        throw error;
    }
};



module.exports = {findCartIndex, showCart, exProductsDao, deleteCartsDao};