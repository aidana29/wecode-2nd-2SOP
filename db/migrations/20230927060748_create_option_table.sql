-- migrate:up
ALTER TABLE `2_category`
CHANGE COLUMN `1_categorty_id` `1_category_id` INT NOT NULL;

CREATE TABLE `product_option` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  `product_id` INT NOT NULL,
  `price` INT,
  `size` VARCHAR(255),
);

ALTER TABLE `product_option` ADD FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE;
-- migrate:down

