CREATE TABLE `User` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  PRIMARY KEY (`ID`)
);

CREATE TABLE `Clothing` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `weather` varchar(48) NOT NULL,
  `colour` varchar(63) NOT NULL,
  `type` varchar(6) NOT NULL,
  `favourite` tinyint(1) NOT NULL,
  `filepath` varchar(70) NOT NULL,
  `outfitID` int DEFAULT NULL,
  `userID` int NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `fkIdx_43` (`outfitID`),
  KEY `fkIdx_46` (`userID`),
  CONSTRAINT `FK_43` FOREIGN KEY (`outfitID`) REFERENCES `outfit` (`ID`),
  CONSTRAINT `FK_46` FOREIGN KEY (`userID`) REFERENCES `user` (`ID`)
);

CREATE TABLE `outfit` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `clothing` varchar(500) NOT NULL,
  `weather` varchar(48) NOT NULL,
  `date` date DEFAULT NULL,
  `favourite` tinyint(1) NOT NULL,
  `userID` int NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `fkIdx_25` (`userID`),
  CONSTRAINT `FK_25` FOREIGN KEY (`userID`) REFERENCES `user` (`ID`)
);



-- Weather: Clear,Overcast,Cloudy,Rainy,Thunderstorm,Snowing : length = 48

-- Black,White,Grey,Red,Blue,Green,Pink,Yellow,Orange,Purple,Other : length = 63
-- $2b$10$BJqOvcExsPsfv6pL79FWceYIpRznRaQ5ey61b38STUmOqf4uKDRS.jpg : length >= 63 & length <= 70