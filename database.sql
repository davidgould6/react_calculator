-- Create database called "react_calculator"

-- Create table in database with sql query below
CREATE TABLE "calculator_data" (
"id" SERIAL PRIMARY KEY,
"first_number" INT NOT NULL,
"operator" VARCHAR (5) NOT NULL,
"second_number" INT NOT NULL, 
"answer" INT NOT NULL);