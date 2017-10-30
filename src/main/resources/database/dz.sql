/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50716
Source Host           : localhost:3306
Source Database       : fun

Target Server Type    : MYSQL
Target Server Version : 50716
File Encoding         : 65001

Date: 2017-10-26 15:38:10
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for dz
-- ----------------------------
DROP TABLE IF EXISTS `dz`;
CREATE TABLE `dz` (
  `d_id` char(21) NOT NULL,
  `d_title` varchar(128) DEFAULT NULL,
  `d_content` text NOT NULL,
  `publish_time` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  `publisher_id` char(21) NOT NULL,
  `has_image` smallint(1) NOT NULL,
  `d_type` varchar(64) NOT NULL,
  `d_tag` varchar(256) DEFAULT NULL,
  `d_brower_num` int(10) NOT NULL,
  `d_nice_num` int(10) NOT NULL,
  `d_unnice_num` int(10) NOT NULL,
  `d_comment_num` int(10) NOT NULL,
  `d_share_num` int(10) NOT NULL,
  `d_score` double NOT NULL,
  `d_collection_num` int(10) NOT NULL,
  `d_sensitive` smallint(1) NOT NULL,
  `d_report` smallint(1) NOT NULL,
  `d_available` smallint(1) NOT NULL,
  PRIMARY KEY (`d_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` char(21) NOT NULL,
  `login_account` varchar(256) NOT NULL,
  `password` varchar(64) NOT NULL,
  `user_name` varchar(64) NOT NULL,
  `sex` char(2) DEFAULT NULL,
  `email_address` varchar(128) DEFAULT NULL,
  `phone_number` varchar(32) DEFAULT NULL,
  `signature` varchar(256) DEFAULT NULL,
  `age` int(3) DEFAULT NULL,
  `interest_area` varchar(256) DEFAULT NULL,
  `register_time` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  `last_login_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `register_ip` varchar(15) DEFAULT NULL,
  `last_login_ip` varchar(15) DEFAULT NULL,
  `available` smallint(1) NOT NULL,
  `avatar` varchar(128) NOT NULL,
  `province` varchar(32) DEFAULT NULL,
  `city` varchar(32) DEFAULT NULL,
  `role` varchar(16) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
SET FOREIGN_KEY_CHECKS=1;
