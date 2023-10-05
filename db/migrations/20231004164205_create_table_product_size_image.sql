-- migrate:up
CREATE TABLE PRODUCT_SIZE_IMAGE (   --새로운 테이블 생성
    id INT NOT NULL AUTO_INCREMENT,
    product_id INT,
    size VARCHAR(255),
    option VARCHAR(255),
    price DECIMAL(10, 2),   --decimal로 해야하나?
    product_image VARCHAR(3000) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);
-- products에서 칼럼 삭제
ALTER TABLE `products`
DROP COLUMN `price`,
DROP COLUMN `size`;


-- migrate:down

