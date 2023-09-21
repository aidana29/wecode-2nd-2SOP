-- migrate:up
CREATE TABLE `users` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `email` VARCHAR(255) NOT NULL ,
  `password` VARCHAR(255) NOT NULL,
  `lastname` VARCHAR(255) NOT NULL,
  `firstname` VARCHAR(255) NOT NULL,
  `phone_number` VARCHAR(255) NOT NULL,
  `birth_day` TIMESTAMP NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `1_category` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255)
);

CREATE TABLE `2_category` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  `1_categorty_id` INT NOT NULL,
  `name` VARCHAR(255)
);

CREATE TABLE `product` (
  `id` INT NOT NULL PRIMARY KEY,
  `name` VARCHAR(255),
  `description` VARCHAR(255),
  `price` INT NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  `2_category_id` INT NOT NULL
);

CREATE TABLE `product_info` (
  `id` INT NOT NULL PRIMARY KEY,
  `suited_to` VARCHAR(255),
  `aroma` VARCHAR(255),
  `key_ingredients` VARCHAR(255),
  `ingredients` VARCHAR(255),
  `product_id` INT NOT NULL
);

CREATE TABLE `carts` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `user_id` INT,
  `status` INT,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `cart_items` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `product_id` INT NULL,
  `cart_id` INT NULL,
  `price` INT NULL,
  `quntity` INT NULL
);

CREATE TABLE `order` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  `user_id` INT NOT NULL,
  `order_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  `content` VARCHAR(255),
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `discount` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  `product_id` INT NOT NULL,
  `dc_percent` INT NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `product_image` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  `product_id` INT NOT NULL,
  `img_url` VARCHAR(255),
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `shipment` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  `shipment_date` DATE,
  `address` VARCHAR(255),
  `city` VARCHAR(255),
  `state` VARCHAR(255),
  `country` VARCHAR(255),
  `zip_code` VARCHAR(255),
  `user_id` INT NOT NULL,
  `order_id` INT NOT NULL
);

CREATE TABLE `payments` (
  `id` INT NOT NULL PRIMARY KEY,
  `user_id` INT NOT NULL,
  `order_id` INT NOT NULL,
  `address` VARCHAR(255),
  `payment_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `payment_method` VARCHAR(255)
);

-- migrate:down

