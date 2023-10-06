-- migrate:up
ALTER TABLE `shipments` 
RENAME COLUMN `state` TO detailed_address,
DROP COLUMN zip_code,
DROP COLUMN city,
DROP COLUMN shipment_date,
ADD COLUMN first_name VARCHAR (255) NOT NULL,
ADD COLUMN last_name VARCHAR (255) NOT NULL,
ADD COLUMN phone_number VARCHAR (20) NOT NULL;

-- migrate:down

