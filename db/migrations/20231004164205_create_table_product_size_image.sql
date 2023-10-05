-- migrate:up
CREATE TABLE PRODUCT_SIZE_IMAGE (   --새로운 테이블 생성
    id INT NOT NULL AUTO_INCREMENT,
    product_id INT,
    product_size VARCHAR(255),--size is a reserved word
    product_option VARCHAR(255),--option is a reserved word
    price INT,   --decimal로 해야하나?//JY: 필요없을듯. INT로.
    product_image VARCHAR(3000) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);
-- products에서 칼럼 삭제
ALTER TABLE `products`
DROP COLUMN `price`,
DROP COLUMN `size`;


-- migrate:down

