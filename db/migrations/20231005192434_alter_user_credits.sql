-- migrate:up
ALTER TABLE users
ADD credits INT DEFAULT 1000000;

-- migrate:down

