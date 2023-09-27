const { myDataSource } = require("./dataSource");

// const myDataSource = new DataSource({
//     type: process.env.TYPEORM_TYPE,
//     host: process.env.TYPEORM_HOST,
//     username: process.env.TYPEORM_USERNAME,
//     password: process.env.TYPEORM_PASSWORD,
//     database: process.env.TYPEORM_DB,
//     port: process.env.TYPEORM_PORT,
// })
// 위의 부분은 필요없습니다! 저희가 dataSource에서 다 선언 해둬서 가져다 쓰기만 하면 돼요!

const findCartIndex = async (user_id) => {
  //js에서 쿼리문을 바로 쓸때는 이렇게 쓰면 안됩니다! typeorm을 사용해서 써야해요! 아래에는 잘 적어주셨군요
  //아래와 같이 myDataSource.query로 사용해야 합니다. 그리고 이 함수는 인덱스를 찾아서 return을 해줘야하니 변수를 선언할게요.
  const userId = await myDataSource.query(`
    SELECT id
    FROM user_id = ${user_id}
`);
  return userId;
};

//아래에서 처럼 req를 사용하고 싶으시면 참조를 해주셔야해요 아래처럼 asynd를 공란으로 두시면 안됩니다 + 컨벤션 맞추는 문제가 있으니 이건 제가 추가로 작업후에 아래에 달아 놓을게요 보고 참조 해주세요
const addInCart = async (req) => {
  await myDataSource.query(`
    INSERT INTO carts (user_id) VALUE
    (${req.user_id});
    `);
  const cart_id = findCartIndex(req.user_id);
  //이부분은 그때 테이블 2개 필요하다고 해서 만드신거 같아요 제가 db에서 값 불러오는 쿼리를 새로 만들어 둘게요 보고 참조하시면 될 거 같아요
  await myDataSource.query(`
  INSERT INTO cart_items (product_id,cart_id,price,quntity) VALUE
  (${req.body.productId},${cart_id},${price} 1);
    `);
  //price부분은 변수 추가로 선언할거에요 다른것만 우선 보세요.
};

const showCart = async () => {
  await myDataSource.query(`
    SELECT 
    cart_items.cart_id,
    cart_items.price,
    cart_items.quntity,
    cart_items.product_id,
    cart.id FROM
    cart.id = cart_items.cart_id;
    `);
};

const exProductsDao = async (userId, productId) => {
  try {
    await myDataSource.query(
      `
        SELETE * FROM cart WHERE user_id =???, product_id = ??`,
      [user_id, product_id]
    );
  } catch (err) {
    const error = new Error("Error Dao");
    error.statusCode = 500;
    throw error;
  }
};

//try-catch로 핸들링할때는 컨트롤러 단에서 주로 합니다.
const deleteCartsDao = async (productId) => {
  try {
    await myDataSource.query(
      `
        SELETE FROM cart WHERE product_id =??`,
      [productId]
    );
  } catch (err) {
    const error = new Error("Error Dao");
    error.statusCode = 500;
    throw error;
  }
};

//서비스 단에서 사용하기 위해서는 export해주는 부분이 필요해요
module.exports = { findCartIndex, showCart, exProductsDao, deleteCartsDao };
