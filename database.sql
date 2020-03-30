CREATE TABLE `user` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `clothing` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `weather` varchar(100) NOT NULL,
  `colour` varchar(45) NOT NULL,
  `type` varchar(6) NOT NULL,
  `favourite` tinyint(1) NOT NULL,
  `filepath` varchar(200) NOT NULL,
  `outfitID` int DEFAULT NULL,
  `userID` int NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `fkIdx_43` (`outfitID`),
  KEY `fkIdx_46` (`userID`),
  CONSTRAINT `FK_43` FOREIGN KEY (`outfitID`) REFERENCES `outfit` (`ID`),
  CONSTRAINT `FK_46` FOREIGN KEY (`userID`) REFERENCES `user` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `outfit` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `clothing` varchar(500) NOT NULL,
  `weather` varchar(45) NOT NULL,
  `date` date DEFAULT NULL,
  `favourite` tinyint(1) NOT NULL,
  `userID` int NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `fkIdx_25` (`userID`),
  CONSTRAINT `FK_25` FOREIGN KEY (`userID`) REFERENCES `user` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci