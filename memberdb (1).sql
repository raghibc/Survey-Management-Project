-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 24, 2020 at 11:15 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `memberdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

CREATE TABLE `answers` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `title` varchar(60) NOT NULL,
  `answer_1` varchar(200) NOT NULL,
  `answer_2` varchar(200) NOT NULL,
  `answer_3` varchar(200) NOT NULL,
  `answer_4` varchar(200) NOT NULL,
  `answer_5` varchar(200) NOT NULL,
  `answer_6` varchar(200) NOT NULL,
  `answer_7` varchar(200) NOT NULL,
  `answer_8` varchar(200) NOT NULL,
  `answer_9` varchar(200) NOT NULL,
  `answer_10` varchar(200) NOT NULL,
  `answer_11` varchar(200) NOT NULL,
  `answer_12` varchar(200) NOT NULL,
  `answer_13` varchar(200) NOT NULL,
  `answer_14` varchar(200) NOT NULL,
  `answer_15` varchar(200) NOT NULL,
  `answer_16` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `answers`
--

INSERT INTO `answers` (`id`, `name`, `title`, `answer_1`, `answer_2`, `answer_3`, `answer_4`, `answer_5`, `answer_6`, `answer_7`, `answer_8`, `answer_9`, `answer_10`, `answer_11`, `answer_12`, `answer_13`, `answer_14`, `answer_15`, `answer_16`) VALUES
(4, 'Cristiano Ronaldo', 'Soccer Survey', 'Portugal', 'Goalkeeper', '6', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(21, 'Scottie Pippen', 'drgdrg', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(24, 'Luka Doncic', 'Joes NBA Survey', 'a', 'b', 'c', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(25, 'Hakeem Olajuwon', 'drgdrg', 'a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c', '', '', '', '', '', '', ''),
(26, 'Carmelo Anthony', 'Joes NBA Survey', '10 inches', 'right', '500', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(27, 'Kylian Mbappe', 'Joes NBA Survey', '45 inches', 'ambidextrous', '999', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(28, 'Zion Williamson', '16 part survey', '0001', '0001', '0001', '0001', '0001', '0001', '0001', '0001', '0001', '0001', '0001', '0001', '0001', '0001', '0001', '0001'),
(29, 'Larry Bird', 'dfvfdv', 'srfssf', 'srwgr', 'trhtr', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(31, 'Luka Doncic', 'nonuiuh', 'tes', 'rhs', 'ok', 'ok', '', '', '', '', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE `members` (
  `id` int(11) NOT NULL,
  `firstName` varchar(30) NOT NULL,
  `lastName` varchar(30) NOT NULL,
  `dob` varchar(30) NOT NULL,
  `position` varchar(30) NOT NULL,
  `email` varchar(60) NOT NULL,
  `phone` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`id`, `firstName`, `lastName`, `dob`, `position`, `email`, `phone`) VALUES
(1, 'Michael', 'Jordan', '1980-06-17T04:00:00.000Z', 'Faculty', 'mj@yahoo.com', '9298919090'),
(2, 'Scottie', 'Pippen', '1981-11-15T05:00:00.000Z', 'Alumni', 'scotpip@gmail.com', '9293892289'),
(6, 'Vince', 'Carter', '1987-08-12T04:00:00.000Z', 'Alumni', 'vcarter@yahoo.com', '6464527377'),
(9, 'Kyrie', 'Irving', '1990-05-06T04:00:00.000Z', 'Student', 'kyirv22@gmail.com', '6464334333'),
(10, 'Luka', 'Doncic', '1995-12-09T05:00:00.000Z', 'Student', 'lukadon95@yahoo.com', '8182929900'),
(11, 'Hakeem', 'Olajuwon', '1978-09-24T04:00:00.000Z', 'Faculty', 'thedream@yahoo.com', '3138235539'),
(12, 'Gary', 'Payton', '1978-05-03T04:00:00.000Z', 'Alumni', 'theglove78@outlook.com', '9283892222'),
(13, 'Larry', 'Bird', '1970-10-02T04:00:00.000Z', 'Faculty', 'lbird00@gmail.com', '4238327109'),
(14, 'Carmelo', 'Anthony', '1986-02-05T05:00:00.000Z', 'Faculty', 'melo0o@gmail.com', '8583221998'),
(15, 'Damian', 'Lillard', '1990-10-12T04:00:00.000Z', 'Student', 'damelil@gmail.com', '2145256123'),
(21, 'Cristiano', 'Ronaldo', '1988-02-05T05:00:00.000Z', 'Faculty', 'cr7@gmail.com', '3818313133'),
(22, 'Kylian', 'Mbappe', '1995-07-21T04:00:00.000Z', 'Student', 'kymbappe95@outlook.com', '4367323235'),
(23, 'Mohamed', 'Salah', '2003-12-16T05:00:00.000Z', 'Alumni', 'mosalah@gmail.com', '3545925325'),
(27, 'Zion', 'Williamson', '1999-02-22T05:00:00.000Z', 'Student', 'zion@outlook.com', '7654345676'),
(42, 'Christian', 'pulisic', '1980-02-21T05:00:00.000Z', 'Alumni', 'cpulis@gmail.com', '9929999999');

-- --------------------------------------------------------

--
-- Table structure for table `surveys`
--

CREATE TABLE `surveys` (
  `id` int(11) NOT NULL,
  `title` varchar(30) NOT NULL,
  `question_1` varchar(200) NOT NULL,
  `question_2` varchar(200) NOT NULL,
  `question_3` varchar(200) NOT NULL,
  `question_4` varchar(200) NOT NULL,
  `question_5` varchar(200) NOT NULL,
  `question_6` varchar(200) NOT NULL,
  `question_7` varchar(200) NOT NULL,
  `question_8` varchar(200) NOT NULL,
  `question_9` varchar(200) NOT NULL,
  `question_10` varchar(200) NOT NULL,
  `question_11` varchar(200) NOT NULL,
  `question_12` varchar(200) NOT NULL,
  `question_13` varchar(200) NOT NULL,
  `question_14` varchar(200) NOT NULL,
  `question_15` varchar(200) NOT NULL,
  `question_16` varchar(200) NOT NULL,
  `question_17` varchar(200) NOT NULL,
  `question_18` varchar(200) NOT NULL,
  `question_19` varchar(200) NOT NULL,
  `question_20` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `surveys`
--

INSERT INTO `surveys` (`id`, `title`, `question_1`, `question_2`, `question_3`, `question_4`, `question_5`, `question_6`, `question_7`, `question_8`, `question_9`, `question_10`, `question_11`, `question_12`, `question_13`, `question_14`, `question_15`, `question_16`, `question_17`, `question_18`, `question_19`, `question_20`) VALUES
(1, 'Basketball Survey', 'What is your favorite team?', 'What position do you play?', 'Who is your favorite player?', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(2, 'Soccer Survey', 'What is your favorite national team?', 'What is your least favorite position to play?', 'What are the most number of goals you have scored in one game ?', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(3, 'Joes NBA Survey', 'What is your vertical?', 'What hand do you dribble with?', 'How many NBA games have you gone to?', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(13, 'oooooooooooo', '00000000', '11111111', '222222222222', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(22, 'pjpjpj', 'oohoh', 'oihoih', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(23, 'oijoih', 'w4s4', 'jouhuh', 'EDITED QUESTIONS', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(24, 'ergeh', 'hrthrth', 'etg44', 'wewefwe', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(27, 'dfvfdv', 'sfsfv', 'rerg', 'ijijoi', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(28, 'nonuiuh', 'igiugui', 'ytgyutbvg', 'trcfryy', 'ytfytfyft', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(32, 'drgdrg', '9i', 'koj', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(39, '16 part survey', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '', '', '', ''),
(44, 'testing 124', '3w3', 'et43', 'e543', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(54, 'sdfsf', 'dfbvf', 'dfvsdv', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `surveys`
--
ALTER TABLE `surveys`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answers`
--
ALTER TABLE `answers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `members`
--
ALTER TABLE `members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `surveys`
--
ALTER TABLE `surveys`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
