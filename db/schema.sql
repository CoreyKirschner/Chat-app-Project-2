DROP DATABASE IF EXISTS chat_app_db;
CREATE DATABASE chat_app_db;

USE chat_app_db;

CREATE TABLE IF NOT EXISTS users (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO users (name, password, email) VALUES ('test', 'test', 'test@test.com');

-- DROP DATABASE IF EXISTS chat_app_db;
-- CREATE DATABASE chat_app_db;

-- CREATE DATABASE IF NOT EXISTS `myapp` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
-- USE `nodelogin`;
 
-- CREATE TABLE IF NOT EXISTS `users` (
--   `id` int(11) NOT NULL,
--   `name` varchar(50) NOT NULL,
--   `password` varchar(255) NOT NULL,
--   `email` varchar(100) NOT NULL
-- ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
 
-- INSERT INTO `users` (`id`, `name`, `password`, `email`) VALUES (1, 'test', 'test', 'test@test.com');
 
-- ALTER TABLE `users` ADD PRIMARY KEY (`id`);
-- ALTER TABLE `users` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
