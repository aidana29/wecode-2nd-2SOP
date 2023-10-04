-- migrate:up
ALTER TABLE `products`
ADD `size` INT DEFAULT NULL;

-- migrate:down

