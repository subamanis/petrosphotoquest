DROP TABLE IF EXISTS `service`;
CREATE TABLE IF NOT EXISTS `service` (`id` INTEGER PRIMARY KEY , `name` varchar(50), `price` INTEGER);
INSERT INTO `service` VALUES (1, 'wedding', 222), (2, 'portrait', 111);

DROP TABLE IF EXISTS `service_package`;
CREATE TABLE IF NOT EXISTS `service_package` (`id` INTEGER PRIMARY KEY , `service_id` INTEGER, `descripiton` varchar(100));
INSERT INTO `service_package` VALUES (1, 1, 'mia wraia petalouda'), (2, 1, "mes ton kampo mia fora");