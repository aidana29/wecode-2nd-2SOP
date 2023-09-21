-- migrate:up
CREATE TABLE users (
  `id` integer,
  `email` varchar(255),
  `password` varchar(255),
  `last_name` varchar(255),
  `first_name` varchar(255),
  `phone_number` varchar(255),
  `birthday` timestamp,
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `carts` (
  `id` integer,
  `user_id` integer,
  `status` boolean,
  `created_at` date,
  `updated_at` date
);

CREATE TABLE cart_items (
  `id` integer,
  `product_id` integer,
  `price` integer,
  `quntity` integer,
  `cart_id` integer
);

CREATE TABLE `1_category` (
  `id` integer PRIMARY KEY,
  `name` varchar(255)
);

CREATE TABLE `2_category` (
  `id` integer PRIMARY KEY,
  `1_categorty_id` int,
  `name` varchar(255)
);

CREATE TABLE `product` (
  `id` int PRIMARY KEY,
  `name` varchar(255),
  `description` varchar(255),
  `price` int,
  `created_at` timestamp,
  `updated_at` timestamp,
  `2_category_id` int
);

CREATE TABLE `product_info` (
  `id` int PRIMARY KEY,
  `suited_to` varchar(255),
  `aroma` varchar(255),
  `key_ingredients` varchar(255),
  `ingredients` varchar(255),
  `product_id` int
);

CREATE TABLE `order` (
  `id` integer PRIMARY KEY,
  `user_id` int,
  `order_id` int,
  `product_id` int,
  `content` varchar(255),
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `discount` (
  `id` integer PRIMARY KEY,
  `product_id` int,
  `dc_percent` int,
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `product_image` (
  `id` integer PRIMARY KEY,
  `product_id` int,
  `img_url` varchar(255),
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `shipment` (
  `id` integer PRIMARY KEY,
  `shipment_date` date,
  `address` varchar(255),
  `city` varchar(255),
  `state` varchar(255),
  `country` varchar(255),
  `zip_code` varchar(255),
  `user_id` int,
  `order_id` int
);

CREATE TABLE `payments` (
  `id` int PRIMARY KEY,
  `user_id` int,
  `order_id` int,
  `address` varchar(255),
  `payment_date` timestamp,
  `payment_method` varchar(255)
);



-- migrate:down