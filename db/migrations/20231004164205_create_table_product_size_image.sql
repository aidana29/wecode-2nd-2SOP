-- migrate:up
CREATE TABLE PRODUCT_SIZE_IMAGE (
    id INT NOT NULL AUTO_INCREMENT,
    product_id INT,
    product_size VARCHAR(255),
    product_option VARCHAR(255),
    price INT,   
    product_image VARCHAR(3000) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);
-- products에서 칼럼 삭제
ALTER TABLE `products`
DROP COLUMN `price`,
DROP COLUMN `size`;


-- migrate:down

