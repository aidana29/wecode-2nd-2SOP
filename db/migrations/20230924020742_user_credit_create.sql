-- migrate:up
ALTER TABLE `users` ADD `credit` INT DEFAULT 1000000;


-- migrate:down

