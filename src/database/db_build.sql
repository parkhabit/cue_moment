BEGIN;

DROP TABLE IF EXISTS emails cascade;

CREATE TABLE emails (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL
);

CREATE TABLE admins (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL,
  pword VARCHAR(255) NOT NULL
);

INSERT INTO emails (email) VALUES ('k.allen91@gmail.com');
INSERT INTO emails (email) VALUES ('k.allen911@gmail.com');
INSERT INTO emails (email) VALUES ('k.allen914@gmail.com');


COMMIT;