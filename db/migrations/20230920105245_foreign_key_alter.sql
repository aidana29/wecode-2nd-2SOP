-- migrate:up

ALTER TABLE `2_category` ADD FOREIGN KEY (`1_categorty_id`) REFERENCES `1_category` (`id`) ON DELETE CASCADE;

ALTER TABLE `product` ADD FOREIGN KEY (`2_category_id`) REFERENCES `2_category` (`id`) ON DELETE CASCADE;

ALTER TABLE `discount` ADD FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE;

ALTER TABLE `order` ADD FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE;

ALTER TABLE `cart_items` ADD FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`) ON DELETE CASCADE;

ALTER TABLE `cart_items` ADD FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE;

ALTER TABLE `carts` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

ALTER TABLE `payments` ADD FOREIGN KEY (`order_id`) REFERENCES `order` (`id`) ON DELETE CASCADE;

ALTER TABLE `payments` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

ALTER TABLE `shipment` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

ALTER TABLE `product_image` ADD FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE;

ALTER TABLE `product_info` ADD FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE;

ALTER TABLE `shipment` ADD FOREIGN KEY (`order_id`) REFERENCES `order` (`id`) ON DELETE CASCADE;

-- migrate:down

