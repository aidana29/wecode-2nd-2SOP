const { DataSource } = require("typeorm");

const myDataSource = new DataSource({
    type: process.env.TYPEORM_TYPE,
    host: process.env.TYPEORM_HOST,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DB,
    port: process.env.TYPEORM_PORT,
})
const findCartIndex = async(user_id) =>{`
    SELECT id
    FROM user_id = ${user_id}
`}
const addInCart = async () => {
    await myDataSource.query(`
    INSERT INTO carts (user_id, status) VALUE
    (${req.user_id}, 1);
    `)
    const cart_id = findCartIndex(req.user_id)
    await myDataSource.query(`
    
    `)

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
        SELETE * FROM cart WHERE user_id =???, product_id = ??`, [user_id, product_id])
    } catch (err) {
        const error = new Error("Error Dao")
        error.statusCode = 500
        throw error
    }
}

const deleteCartsDao = async (productId) => {
    try {
        await myDataSource.query(`
        SELETE FROM cart WHERE product_id =??` , [productId])
    } catch (err) {
        const error = new Error ("Error Dao")
        error.statusCode = 500
        throw error
    }
}



