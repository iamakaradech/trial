-- create table
CREATE TABLE "car_member" (
	"id" integer,
	"car_id" integer NOT NULL,
	"member_id" integer NOT NULL,
	PRIMARY KEY (id)
	FOREIGN KEY (car_id) REFERENCES cars(id) ON UPDATE CASCADE ON DELETE CASCADE
	FOREIGN KEY (member_id) REFERENCES members(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE "cars" (
	"id" integer,
	"name" varchar(128) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE "members" (
	"id" integer,
	"name" varchar(255) NOT NULL,
	PRIMARY KEY (id)
);


-- members table
INSERT INTO "members" ("id", "name") VALUES ('1', 'Rick');
INSERT INTO "members" ("id", "name") VALUES ('2', 'John');
INSERT INTO "members" ("id", "name") VALUES ('3', 'Zing');
INSERT INTO "members" ("id", "name") VALUES ('4', 'Nan');

-- cars table
INSERT INTO "cars" ("id", "name") VALUES ('1', 'Corvette Z06');
INSERT INTO "cars" ("id", "name") VALUES ('2', 'Lotus Exige S');
INSERT INTO "cars" ("id", "name") VALUES ('3', 'BMW M3');
INSERT INTO "cars" ("id", "name") VALUES ('4', 'BMW 320d');
INSERT INTO "cars" ("id", "name") VALUES ('5', 'Mercedes SLK AMG');
INSERT INTO "cars" ("id", "name") VALUES ('6', 'Toyota Alphard');
INSERT INTO "cars" ("id", "name") VALUES ('7', 'Mercedes Sprinter');
INSERT INTO "cars" ("id", "name") VALUES ('8', 'Toyota Camry');
INSERT INTO "cars" ("id", "name") VALUES ('9', 'BMW M5');
INSERT INTO "cars" ("id", "name") VALUES ('10', 'Porsche 911');
INSERT INTO "cars" ("id", "name") VALUES ('11', 'Jaguar');
INSERT INTO "cars" ("id", "name") VALUES ('12', 'TukTuk');
INSERT INTO "cars" ("id", "name") VALUES ('13', 'Mini Cooper');
INSERT INTO "cars" ("id", "name") VALUES ('14', 'Honda Jazz');

-- car_member table
INSERT INTO "car_member" ("id", "car_id", "member_id") VALUES ('1', '1', '1');
INSERT INTO "car_member" ("id", "car_id", "member_id") VALUES ('2', '2', '1');
INSERT INTO "car_member" ("id", "car_id", "member_id") VALUES ('3', '3', '1');
INSERT INTO "car_member" ("id", "car_id", "member_id") VALUES ('4', '4', '2');
INSERT INTO "car_member" ("id", "car_id", "member_id") VALUES ('5', '5', '2');
INSERT INTO "car_member" ("id", "car_id", "member_id") VALUES ('6', '6', '3');
INSERT INTO "car_member" ("id", "car_id", "member_id") VALUES ('7', '7', '3');
INSERT INTO "car_member" ("id", "car_id", "member_id") VALUES ('8', '8', '4');
INSERT INTO "car_member" ("id", "car_id", "member_id") VALUES ('9', '9', '4');
INSERT INTO "car_member" ("id", "car_id", "member_id") VALUES ('10', '10', '4');
INSERT INTO "car_member" ("id", "car_id", "member_id") VALUES ('11', '11', '4');
INSERT INTO "car_member" ("id", "car_id", "member_id") VALUES ('12', '12', '4');
INSERT INTO "car_member" ("id", "car_id", "member_id") VALUES ('13', '13', '4');
INSERT INTO "car_member" ("id", "car_id", "member_id") VALUES ('14', '14', '4');
INSERT INTO "car_member" ("id", "car_id", "member_id") VALUES ('15', '15', '4');
