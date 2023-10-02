-- migrate:up

-- users 테이블에서 phone_number 열을 제거합니다.
ALTER TABLE users
DROP COLUMN phone_number;

-- order 테이블에서 orderid 열을 제거합니다.
ALTER TABLE `order`
DROP COLUMN order_id;

-- migrate:down

