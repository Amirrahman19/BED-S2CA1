CREATE DATABASE  IF NOT EXISTS `sp_it` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `sp_it`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: sp_it
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `categoryid` int NOT NULL AUTO_INCREMENT,
  `category` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `categorypics` varchar(255) NOT NULL,
  PRIMARY KEY (`categoryid`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Macbook Pro','Light and high performance laptops for school','tile_macos_large.jpg'),(2,'iPhone','Portable, high performance and easy for different modes of communication','1643118306486-iphone_x_large.jpg'),(3,'iPad','Portable, high performance and larger screen','Ipad.jpg'),(4,'Touch-screen laptop','Portable, can use applications not compatible with iPad','1643118418596-thinkpad.jpg'),(5,'Gaming laptop','Higher CPU and GPU for gaming and still portable','1643118390606-lenovo_gaming_preview_rev_1.png'),(6,'Android','Portable, high perfomance, easy to use for transferring data to the cloud for backup','1642406675081-product-design-phone-blue.jpg'),(8,'Audio','Wireless, over-ear, detachable wired plug, USB fast charging','1643118354516-beats_preview_rev_1.png'),(9,'iMac','Desktop PC with amazing display and color clarity','1643118372422-imac_large.jpg'),(10,'Smart Watch','Portable, easy to charge, steps tracker and heart rate tracker','1643118509689-watch_series_3_large.jpg');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `interests`
--

DROP TABLE IF EXISTS `interests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `interests` (
  `interestid` int NOT NULL AUTO_INCREMENT,
  `userid` int NOT NULL,
  `categoryid` int NOT NULL,
  PRIMARY KEY (`interestid`),
  KEY `Interests_users_userid_idx` (`userid`),
  KEY `Interests_category_categoryid_idx` (`categoryid`),
  CONSTRAINT `Interests_category_categoryid` FOREIGN KEY (`categoryid`) REFERENCES `category` (`categoryid`),
  CONSTRAINT `Interests_users_userid` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `interests`
--

LOCK TABLES `interests` WRITE;
/*!40000 ALTER TABLE `interests` DISABLE KEYS */;
INSERT INTO `interests` VALUES (11,1,5),(12,1,8),(13,1,6),(14,1,10);
/*!40000 ALTER TABLE `interests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `productid` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `categoryid` int NOT NULL,
  `brand` varchar(255) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  PRIMARY KEY (`productid`),
  KEY `Product_category_categoryid_idx` (`categoryid`),
  CONSTRAINT `Product_category_categoryid` FOREIGN KEY (`categoryid`) REFERENCES `category` (`categoryid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (10,'Oppo Find X Pro 3','Portable, high perfomance, easy to use for transferring data to the cloud for backup',6,'Oppo',1000),(11,'Macbook','Light and high performance laptops for school',1,'Apple',3000),(21,'iPhone 13','Portable, high performance and easy for different modes of communication',2,'Apple',1299),(22,'iPad Pro','Apple Pencil, keyboard attached to cover and very protective cover',3,'Apple',999),(23,'Beats','Wireless, over-ear, detachable wired plug, USB fast charging',8,'SP IT',400),(24,'iMac','Desktop PC with amazing display and color clarity',9,'Apple',4000),(25,'Lenovo LegioN 5i','Gaming laptop with Harman Audio and NVIDIA Display',5,'Microsoft',2222),(26,'Lenovo ThinkPad','Portable, can use applications not compatible with iPad',4,'Microsoft',1100),(28,'Smart Watch','Portable, easy to charge, steps tracker and heart rate tracker',10,'Apple',300),(48,'xiaomi','xiaomi',6,'Samsung',1000),(49,'samsung galaxy s10','samsung galaxy s10',6,'Samsung',1600),(50,'iphone10','iphone10',2,'Apple',1000),(53,'jbl','jbl',8,'SP IT',1000),(54,'airpords','china-made',8,'Apple',269);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_image`
--

DROP TABLE IF EXISTS `product_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_image` (
  `productid` int NOT NULL,
  `product_image` varchar(255) NOT NULL,
  PRIMARY KEY (`productid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_image`
--

LOCK TABLES `product_image` WRITE;
/*!40000 ALTER TABLE `product_image` DISABLE KEYS */;
INSERT INTO `product_image` VALUES (10,'1643119024047-product-design-phone-blue.jpg'),(11,'1643118968358-macbook_large.jpg'),(21,'1643118306486-iphone_x_large.jpg'),(22,'1643118342169-ipad_pro_large.jpg'),(23,'1643118354516-beats_preview_rev_1.png'),(24,'1643118372422-imac_large.jpg'),(25,'1643118390606-lenovo_gaming_preview_rev_1.png'),(26,'1643118418596-thinkpad.jpg'),(28,'1643118509689-watch_series_3_large.jpg'),(48,'1643189848896-xiaomi-redmi-note-8-cosmic-purple.jpg'),(49,'1643189878566-samsung-galaxy-s10-1.jpg'),(50,'1643191051113-depositphotos_183023210-stock-photo-silver-apple-iphone-x-back.jpg'),(53,'1643441723604-JBL_earpiece_preview_rev_1.png'),(54,'1643954613443-airpods_large.jpg');
/*!40000 ALTER TABLE `product_image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `promotion_product`
--

DROP TABLE IF EXISTS `promotion_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `promotion_product` (
  `promotion_id` int NOT NULL AUTO_INCREMENT,
  `productId` int NOT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `discount` decimal(10,0) NOT NULL,
  PRIMARY KEY (`promotion_id`),
  KEY `promotion_product_product_productid_idx` (`productId`),
  CONSTRAINT `promotion_product_product_productid` FOREIGN KEY (`productId`) REFERENCES `product` (`productid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `promotion_product`
--

LOCK TABLES `promotion_product` WRITE;
/*!40000 ALTER TABLE `promotion_product` DISABLE KEYS */;
INSERT INTO `promotion_product` VALUES (4,10,'2021-12-25 10:00:00','2021-12-31 11:59:00',15);
/*!40000 ALTER TABLE `promotion_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `productid` int NOT NULL,
  `userid` int NOT NULL,
  `rating` int DEFAULT NULL,
  `review` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `reviewID` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`reviewID`),
  KEY `Review_users_userid_idx` (`userid`),
  CONSTRAINT `Review_users_userid` FOREIGN KEY (`userid`) REFERENCES `users` (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (23,1,8,'Test','2022-01-29 07:17:44',1),(23,1,7,'Test 2','2022-01-29 07:18:24',2),(23,1,6,'Test 3','2022-01-29 07:19:35',3),(10,2,9,'this is a sample review2','2022-01-29 07:20:00',4),(11,4,10,'this is a sample review','2022-01-29 07:30:00',5),(10,1,7,'very good','2022-01-31 02:22:09',6),(10,1,7,'very good','2022-01-31 02:22:11',7),(23,3,8,'vvvv gd','2022-01-31 02:25:00',8),(53,3,8,'vvvvv gd','2022-01-31 02:30:00',9);
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `userid` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact` int NOT NULL,
  `role` varchar(255) NOT NULL,
  `profile_pic_url` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`userid`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Terry Tan','terry@gmail.com',98765432,'Customer','1644143554865-IMG_20210902_145141.jpg','2021-12-15 12:27:21','123'),(2,'Amir Rahman','amirramen@gmail.com',96209012,'Admin','1644136761240-WhatsApp Image 2021-07-02 at 19.25.04 (5).jpeg','2021-12-15 12:58:33','123'),(3,'Percy Jackson','percyjackson@gmail.com',98765123,'Customer','','2021-12-16 10:00:06','123'),(4,'Harry Potter','harrypotter@yahoomail.com',93255093,'Admin','','2022-01-03 01:18:32','123'),(14,'sultana','rahman_sultana@yahoo.com',96612145,'Customer','','2022-01-20 13:42:08','12345');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-06 19:16:20
