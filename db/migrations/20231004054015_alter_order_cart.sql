-- migrate:up
--order 테이블에서 product_id 열의 이름을 cart_id로 변경
ALTER TABLE `order` CHANGE `product_id` `cart_id` INT NOT NULL;
--product 테이블과의 외래 키 관계 삭제
ALTER TABLE `order` DROP FOREIGN KEY `order_ibfk_1`;
--carts 테이블에 id 열 추가 및 외래 키 관계 설정
ALTER TABLE `carts` ADD `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY;
ALTER TABLE `order` ADD CONSTRAINT `order_ibfk_1` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`) ON DELETE CASCADE;

-- order의 id와 외래키 연결
ALTER TABLE `order` ADD CONSTRAINT `order_user_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

-- migrate:down

