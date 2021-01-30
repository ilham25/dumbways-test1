-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 30, 2021 at 03:13 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dumb_school`
--

-- --------------------------------------------------------

--
-- Table structure for table `school_tb`
--

CREATE TABLE `school_tb` (
  `id` int(11) NOT NULL,
  `npsn` int(11) NOT NULL,
  `name_school` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `logo_school` varchar(255) NOT NULL,
  `school_level` varchar(100) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `school_tb`
--

INSERT INTO `school_tb` (`id`, `npsn`, `name_school`, `address`, `logo_school`, `school_level`, `user_id`) VALUES
(1, 981237, 'SMKN 1 Kota Solok', 'Jl. Ki Hajar Dewantoro', 'logo.png', 'Negeri', 1),
(5, 981237129, 'SMKN 2 Kota Solok', 'Jl. Tanjung Paku', 'logo.png', 'Negeri', 1),
(8, 121234, 'SMKN 3 Kota Solok', 'Jl. Laing Nan Balimo', 'logo.png', 'Negeri', 2);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`) VALUES
(1, 'user1', 'user1@gmail.com', 'testing123'),
(2, 'user2', 'user2@gmail.com', 'testing123'),
(3, 'user3', 'user3@gmail.com', 'testing123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `school_tb`
--
ALTER TABLE `school_tb`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `school_tb`
--
ALTER TABLE `school_tb`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
