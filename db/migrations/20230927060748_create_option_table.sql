-- migrate:up
ALTER TABLE `2_category`
DROP FOREIGN KEY `2_category_ibfk_1`; -- Drop the existing foreign key constraint

ALTER TABLE `2_category`
CHANGE COLUMN `1_categorty_id` `1_category_id` INT NOT NULL; -- Rename the column

ALTER TABLE `2_category`
ADD CONSTRAINT `2_category_ibfk_1` FOREIGN KEY (`1_category_id`) REFERENCES `1_category` (`id`) ON DELETE CASCADE; -- Recreate the foreign key constraint with the new column name

CREATE TABLE `product_option` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  `product_id` INT NOT NULL,
  `price` INT NOT NULL,
  `size` VARCHAR(255)
);

ALTER TABLE `product_option` ADD FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE;

ALTER TABLE `product` DROP COLUMN `price`;

-- migrate:down

