CREATE DATABASE Meal_Sharing;


CREATE TABLE `Meal` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NOT NULL,
  `description` text,
  `location` varchar(255) NOT NULL,
  `Hosting_time` datetime NOT NULL,
  `max_reservations` int NOT NULL,
  `price` decimal NOT NULL,
  `created_date` date
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


INSERT INTO Meal(title,description,location,Hosting_time,max_reservations,price,created_date)
Values('crispy cheesy shrimp tacos','crispy cheesy shrimp tacos and homemade salsa naranja'     ,'Mexico City','2022-08-10 17:30:20',50,80,'2022-07-20'),
       ('Handmade Pasta','Homemade tagliatelle with a simple ragu (sauce)-
Panna cotta','Florence, Italy','2021-09-07 11:30:14',25,120,'2021-08-23'),
		('paella','Traditional Valencian paella',' Almeria, Spain ','2021-02-24 18:20:45',
        15,80,'2021-01-20'),
        (' French Quiche','Autumn quiche and Spiced poached pears','Cologne, Germany','2022-05-31 20:30:00',10,75,'2022-06-15'),
        (' South Indian Brunch','South Indian masala dosa, crispy, gluten-free rice+lentils crepe and Aloo masala, savory potato masala mash-A tangy cilantro coconut chutney','New York, USA','2022-05-14 11:30:30',25,90,'2022-04-12');


-- Queries to write: Meal
-- 1,  Get all meals
SELECT *
FROM Meal;

-- Add a new meal
INSERT INTO Meal(title,description,location,Hosting_time,max_reservations,price,created_date)
VALUES('Vegetarian Tagine',NULL,'Marrakech, Morocco ','2022-03-17 17:30:00',25,50,'2022-02-10');
 
 -- Get a meal with any id, fx 1
SELECT *
FROM Meal
WHERE id = 3;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Meal 
SET title = 'Paella',description=' Spanish classic, the Valencian paella'
WHERE title='paella';

-- Delete a meal with any id, fx 1
DELETE
FROM Meal
WHERE price >100;

-- Reservation

CREATE TABLE `Reservation` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY  ,
  `number_of_guests` int  NOT NULL ,
  `meal_id` int UNSIGNED NOT NULL,
  `created_date` date,
  `contact_phonenumber` varchar(255),
  `contact_name` varchar(255),
  `contact_email` varchar(255),
    CONSTRAINT `fk_Meal` FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


INSERT INTO Reservation(id,number_of_guests,meal_id,created_date,contact_phonenumber,contact_name,contact_email) 
VALUES(1,2,4,'2022-06-28','44 67850238','Mikkel','Mikkel@databse.dk'),
      (2,5,1,'2022-06-21','41 67855238','Simon','Simon@databse.dk'),
      (3,4,3,'2022-01-20','54 76844438','Lukas','Lukasl@databse.dk'),
      (4,8,5,'2022-04-16','31 67822238','Mikkel','Mikkel@databse.dk'),
      (5,5,4,'2022-10-30','01 67824238','Mikkel','Mikkel@databse.dk'),
      (6,2,4,'2022-02-19','22 61810238','Mikkel','Mikkel@databse.dk'),
      (7,8,1,'2022-09-07','98 67651238','Mikkel','Mikkel@databse.dk'),
      (8,8,2,'2022-12-01','40 13190238','Mikkel','Mikkel@databse.dk'),
      (9,2,3,'2022-04-21','35 12950238','Mikkel','Mikkel@databse.dk'),
      (10,9,5,'2022-05-14','61 91470238','Mikkel','Mikkel@databse.dk'),
      (11,3,3,'2022-11-09','29 67819438','Mikkel','Mikkel@databse.dk'),
      (12,5,2,'2022-01-05','11 67851238','Mikkel','Mikkel@databse.dk'),
      (13,10,1,'2022-07-15','23 67811238','Mikkel','Mikkel@databse.dk'),
      (14,3,4,'2022-08-26','45 49150238','Mikkel','Mikkel@databse.dk'),
      (15,2,3,'2022-10-01','45 65430238','Mikkel','Mikkel@databse.dk');


      -- Queries to write: Reservation

      -- Get all reservations
       SELECT *
       FROM Reservation;

       --Add a new reservation
INSERT INTO Reservation(number_of_guests,meal_id,created_date,contact_phonenumber,contact_name,contact_email) 
VALUES(3,5,'2022-04-29','21 19622238','Alihan','Alihan@splash.com');



-- Get a reservation with any id, fx 1
 SELECT *
FROM Reservation
WHERE id = 13;


-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Reservation 
SET number_of_guests = 10,contact_name = 'Sophia',contact_email ='Sphos@sof.com'
WHERE id=12;

-- 
--Delete a reservation with any id, fx 1

DELETE
FROM Reservation
WHERE id=10;



-- Review 

CREATE TABLE `Review` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255),
  `description` text,
  `meal_id` int UNSIGNED NOT NULL,
  `stars` int,
  `created_date` date,
  CONSTRAINT `fk_Meal_Review` FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO Review(id,title,description,meal_id,stars,created_date)
VALUES(1,'Paella experience',"Juan cooked a delicious paella! We had a wonderful time,     learned about Spain's food and culture and had an amazing meal",3,5,'2021-02-26'),
       (2,'Paella night','This was a fun way to get together with family. Juan Provided some nice background about the history of the dish we ate',3,4,'2021-02-27'),
       (3,'Spanish food','He was attentive to each person. He wanted to see what we think about food. He was informative and the paella was AMAZING',3,5,'2021-02-25'),
       (4,'Lovely Tacos','What a wonderful experience eating',1,4,'2022-08-12'),
       (5,'Mexican food','This host was wonderful,fun and was such an authentic experience! The hosts were very gracious, kind, I would definitely do this again',1,5,'2022-08-11'),
       (6,'Shrimp Tacos',' NOT the BEST shrimp tacos I’ve ever tasted-in my life',1,3,'2022-08-13'),
       (7,'French Quiche','The host was a great cook and  food was tasty. Thank you',4,4,'2022-06-02'),
             (8,'French Dinner','food was tasty.',4,3,'2022-06-02'),
                   (9,' Quiche',' food was tasty.I wish I could attach a photo - the rustic quiche was beautiful AND delicious.',4,5,'2022-06-04'),
                   (10,'South Indian food'," I'm really grateful. The spicy potato filling and accompanying chutney were great, a really excellent brunch.",5,5,'2022-05-14'),
                   (11,' Indian Brunch',"I highly recommend this food for your next indian food experince",5,5,'2022-05-15'),
				 (12,'Amazing Indian Brunch',"great food and good host",5,5,'2022-05-15'),
				(13,'Vegetarian Tagine',"I highly recommend this food for your next authentic food experince",2,5,'2022-03-25'),
				(14,' Tagine',"it was a good food",2,3,'2022-03-18'),
                 (15,'Morrocan food',"We had a delicious dinner that night",2,4,'2022-03-20'),
			 (16,'Vegetarian food'," Shared our dinner with friends and they loved the food",2,5,'2022-03-19');


             -- Queries to write: Reviews
--Get all reviews
SELECT *
FROM Review;


-- Add a new review
INSERT INTO Review(title,description,meal_id,stars,created_date)
VALUES('south Indian brunch',"very delicious. We had a wonderful time,learned about indian food and culture and had an amazing meal",5,5,'2022-05-19');


-- Get a review with any id, fx 1

SELECT *
FROM Review
WHERE id = 15;


-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Review
SET description ='Food was good but customer service could improve , and price was a bit too much', stars=3
WHERE title LIKE' Indian Brunch';



-- Delete a review with any id, fx 1
DELETE
FROM Review
WHERE title LIKE 'French Dinner';

--Now add a couple of different meals, reservations and reviews 
--with different attributes. With those meals create the
--following queries






INSERT INTO Meal(title,description,location,Hosting_time,max_reservations,price,created_date)
Values('Ethiopian Injera and Tibs ','Injera, a traditional, fermented, spongy Ethiopian bread made with Teff flour','Addis Ababa, Ethiopia ','2022-09-10 17:50:20',10,50,'2022-07-20'),
	(' Vegan Pesto Pasta ','Cavatelli Pasta-Fresh Pesto','Noto, Italy','2022-03-10 17:30:20',15,40,'2022-02-20'),
    (' Samosa with Green Chutney','Samosa-Green Chutney (coriander dipping sauce)','Jaipur, India ','2022-04-10 17:30:20',20,30,'2022-03-20');



        INSERT INTO Reservation(number_of_guests,meal_id,created_date,contact_phonenumber,contact_name,contact_email) 
VALUES(2,7,'2022-07-28','44 67850238','Angi','Angi@databse.dk'),
      (6,7,'2022-07-28','44 67850238','Saron','Sarii@databse.dk'),
      (4,8,'2022-02-28','44 67850238','Maria','Mar@databse.dk'),
      (7,9,'2022-04-28','44 67850238','Mongo','Monk@databse.dk'),
      (8,9,'2022-04-28','44 67850238','Mik','Mikke@databse.dk');


      INSERT INTO Review(title,description,meal_id,stars,created_date)
VALUES('Ethiopian Injera'," We’ll definitely do this again",7,4,'2021-02-26'),
       ('Ethiopian food',"We had a wonderful time, learned about Ethiopian food and culture and had an amazing meal",7,5,'2021-02-26'), 
       ('Injera food',"Thank you so much for this nice experience",7,5,'2021-02-26'), 
       ('Vegan Pesto Pasta ',"It was a fun and unique experience! Thank you",8,4,'2021-02-26'), 
       (' Pesto Pasta '," I believe my white flour would have been better.",8,3,'2021-02-26'), 
       ('Vegan Pesto',"We had a great time. They were fantastic hosts ",8,4,'2021-02-26'), 
       ('Samosa with Green Chutney',"I got it as a gift for my daughter and her boyfriend because they love Smosa",9,5,'2021-02-26'), 
       ('Samosa ',"great meal",9,5,'2021-02-26'), 
       ('Samosa with Chutney'," an amazing experience and we’ll be back for sure.",9,5,'2021-02-26');


    --Functionality
-- Get meals that has a price smaller than a specific price fx 90

SELECT*
 FROM Meal
 WHERE price <50;
-- Get meals that still has available reservations
Select SUM(number_of_guests) AS reserved,meal_id,Meal.title,max_reservations
FROM Reservation 
JOIN Meal On Meal.id= Reservation.meal_id
-- Where Reservation.reserved < Meal.max_reservations
-- I tried to filter the result using the line above , but it did not worked
GROUP BY meal_id;
--Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde

SELECT * 
FROM Meal
WHERE title LIKE '%south indian%';
--Get meals that has been created between two dates
SELECT*
FROM Meal
WHERE created_date >'2022-03-20' AND created_date < '2022-06-20';
-- Get only specific number of meals fx return only 5 meals
SELECT * 
FROM Meal
LIMIT 3;
--Get the meals that have good reviews

Select avg(stars),meal_id,Meal.title
FROM Review 
JOIN Meal On Meal.id= Review.meal_id
WHERE Review.stars =5
GROUP BY meal_id
 ;
-- Get reservations for a specific meal sorted by created_date
SELECT Reservation.meal_id,Reservation.created_date,Reservation.number_of_guests,Meal.title
FROM Reservation 
JOIN Meal  ON Meal.id = Reservation.meal_id
WHERE Meal.title LIKE '%tacos%' 
ORDER BY created_date;
-- Sort all meals by average number of stars in the reviews
Select avg(stars) AS points,meal_id,Meal.title
FROM Review 
JOIN Meal On Meal.id= Review.meal_id
GROUP BY meal_id
ORDER BY points;