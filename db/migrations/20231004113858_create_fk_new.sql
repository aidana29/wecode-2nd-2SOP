-- migrate:up
ALTER TABLE `2_category`
ADD CONSTRAINT `2_category_1_category_fk`
FOREIGN KEY (`1_category_id`)
REFERENCES `1_category` (`id`)
ON DELETE CASCADE;

ALTER TABLE `products`
ADD CONSTRAINT `products_2_category_fk`
FOREIGN KEY (`2_category_id`)
REFERENCES `2_category` (`id`)
ON DELETE CASCADE;

ALTER TABLE `product_info`
ADD CONSTRAINT `product_info_product_fk`
FOREIGN KEY (`product_id`)
REFERENCES `products` (`id`)
ON DELETE CASCADE;

ALTER TABLE `product_image`
ADD CONSTRAINT `product_image_product_fk`
FOREIGN KEY (`product_id`)
REFERENCES `products` (`id`)
ON DELETE CASCADE;


ALTER TABLE `carts`
ADD CONSTRAINT `carts_user_fk`
FOREIGN KEY (`user_id`)
REFERENCES `users` (`id`)
ON DELETE CASCADE;

ALTER TABLE `cart_items`
ADD CONSTRAINT `cart_items_product_fk`
FOREIGN KEY (`product_id`)
REFERENCES `products` (`id`)
ON DELETE CASCADE;

ALTER TABLE `cart_items`
ADD CONSTRAINT `cart_items_cart_fk`
FOREIGN KEY (`cart_id`)
REFERENCES `carts` (`id`)
ON DELETE CASCADE;

ALTER TABLE `orders`
ADD CONSTRAINT `orders_user_fk`
FOREIGN KEY (`user_id`)
REFERENCES `users` (`id`)
ON DELETE CASCADE;

ALTER TABLE `orders`
ADD CONSTRAINT `orders_cart_fk`
FOREIGN KEY (`cart_id`)
REFERENCES `carts` (`id`)
ON DELETE CASCADE;

ALTER TABLE `discounts`
ADD CONSTRAINT `discounts_product_fk`
FOREIGN KEY (`product_id`)
REFERENCES `products` (`id`)
ON DELETE CASCADE;

ALTER TABLE `shipments`
ADD CONSTRAINT `shipments_user_fk`
FOREIGN KEY (`user_id`)
REFERENCES `users` (`id`)
ON DELETE CASCADE;

ALTER TABLE `shipments`
ADD CONSTRAINT `shipments_order_fk`
FOREIGN KEY (`order_id`)
REFERENCES `orders` (`id`)
ON DELETE CASCADE;

ALTER TABLE `payments`
ADD CONSTRAINT `payments_user_fk`
FOREIGN KEY (`user_id`)
REFERENCES `users` (`id`)
ON DELETE CASCADE;

ALTER TABLE `payments`
ADD CONSTRAINT `payments_order_fk`
FOREIGN KEY (`order_id`)
REFERENCES `orders` (`id`)
ON DELETE CASCADE;


-- migrate:down

