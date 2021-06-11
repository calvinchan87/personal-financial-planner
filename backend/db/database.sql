CREATE DATABASE personalfp;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE accountTypes (
  id SERIAL PRIMARY KEY NOT NULL,
  account_name VARCHAR(255)
);

CREATE TABLE userAccountDetails (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  account_type_id INTEGER REFERENCES accountTypes(id) ON DELETE CASCADE,
  description VARCHAR(255),
  name_of_institution VARCHAR(255),
  balance DECIMAL(12,2)
);

CREATE TABLE category (
  id SERIAL PRIMARY KEY NOT NULL,
  category_name VARCHAR(255)
);

CREATE TABLE transactions (
  id SERIAL PRIMARY KEY NOT NULL,
  user_account_details_id INTEGER REFERENCES userAccountDetails(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  category_id INTEGER REFERENCES category(id) ON DELETE CASCADE,
  description VARCHAR(255),
  date VARCHAR(255),
  amount DECIMAL(12,2)
);

CREATE TABLE badges (
  id SERIAL PRIMARY KEY NOT NULL,
  badge_name VARCHAR(255),
  badge_description VARCHAR(255)
);

CREATE TABLE userBadges (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  badge_id INTEGER REFERENCES badges(id) ON DELETE CASCADE,
  date DATE
);