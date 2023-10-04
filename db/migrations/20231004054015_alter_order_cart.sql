-- migrate:up
ALTER TABLE `order` RENAME COLUMN `product_id` TO `cart_id`;

ALTER TABLE `order` DROP FOREIGN KEY `order_ibfk_1`;

ALTER TABLE `order` ADD CONSTRAINT `order_ibfk_1` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`) ON DELETE CASCADE;

ALTER TABLE `order` ADD CONSTRAINT `order_user_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
-- migrate:down

