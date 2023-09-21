const { DataSource } = require("typeorm");

const myDataSource = new DataSource ({
    type: process.env.TYPEORM_TYPE,
    host: process.env.TYPEORM_HOST,
    user: process.env.TYPEORM_USER,
    password: process.env.TYPEORM_PASSWORD,
    db: process.env.TYPEORM_DB,
    port: process.env.TYPEORM_PORT
});

module.exports = {
    myDataSource
}