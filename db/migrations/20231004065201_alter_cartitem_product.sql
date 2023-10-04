-- migrate:up
ALTER TABLE `cart_items` RENAME COLUMN `quntity` TO `quantity`;

ALTER TABLE `product` ADD COLUMN `size` INT;


-- migrate:down

