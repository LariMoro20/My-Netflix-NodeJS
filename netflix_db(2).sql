-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 17-Dez-2019 às 00:05
-- Versão do servidor: 10.4.6-MariaDB
-- versão do PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `netflix_db`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `interations`
--
-- Erro ao ler a estrutura para a tabela netflix_db.interations: #1932 - Table 'netflix_db.interations' doesn't exist in engine
-- Erro ao ler dados para tabela netflix_db.interations: #1064 - Você tem um erro de sintaxe no seu SQL próximo a 'FROM `netflix_db`.`interations`' na linha 1

-- --------------------------------------------------------

--
-- Estrutura da tabela `interations2`
--

CREATE TABLE `interations2` (
  `date` datetime NOT NULL DEFAULT current_timestamp(),
  `id_interation` int(10) NOT NULL,
  `id_movie` int(10) NOT NULL,
  `id_user` int(10) NOT NULL,
  `type` varchar(10) NOT NULL,
  `Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `interations2`
--

INSERT INTO `interations2` (`date`, `id_interation`, `id_movie`, `id_user`, `type`, `Id`) VALUES
('2019-12-15 21:43:53', 2, 9, 2, '2', 2),
('2019-12-16 08:56:50', 2, 9, 2, '2', 3),
('2019-12-16 09:01:20', 2, 7, 2, '2', 4),
('2019-12-16 09:08:03', 2, 2, 2, '1', 5),
('2019-12-16 09:18:48', 2, 1, 2, '1', 8),
('2019-12-16 10:53:54', 2, 9, 2, '2', 9),
('2019-12-16 11:10:15', 2, 1, 2, '1', 11),
('2019-12-16 11:10:26', 2, 30, 2, '1', 12),
('2019-12-16 11:16:15', 2, 2, 2, '1', 13),
('2019-12-16 11:19:30', 1, 3, 2, '2', 14),
('2019-12-16 11:39:12', 2, 31, 19, '1', 16),
('2019-12-16 13:52:51', 1, 7, 19, '2', 17),
('2019-12-16 14:07:46', 2, 9, 19, '2', 18),
('2019-12-16 14:08:28', 1, 9, 19, '2', 19),
('2019-12-16 14:13:03', 1, 7, 19, '2', 20),
('2019-12-16 14:13:19', 1, 7, 19, '2', 21),
('2019-12-16 14:15:27', 1, 7, 19, '2', 22),
('2019-12-16 14:18:05', 1, 7, 19, '2', 23),
('2019-12-16 14:21:10', 1, 7, 19, '2', 24),
('2019-12-16 14:23:07', 1, 7, 19, '2', 25),
('2019-12-16 14:24:41', 1, 7, 19, '2', 26),
('2019-12-16 14:24:42', 1, 0, 19, '2', 27),
('2019-12-16 14:24:42', 1, 0, 19, '2', 28),
('2019-12-16 14:24:42', 1, 0, 19, '2', 29),
('2019-12-16 14:24:42', 1, 0, 19, '2', 30),
('2019-12-16 14:24:42', 1, 0, 19, '2', 31),
('2019-12-16 14:24:42', 1, 0, 19, '2', 32),
('2019-12-16 14:24:42', 1, 0, 19, '2', 33),
('2019-12-16 14:24:42', 1, 0, 19, '2', 34),
('2019-12-16 14:24:43', 1, 0, 19, '2', 35),
('2019-12-16 14:24:43', 1, 0, 19, '2', 36),
('2019-12-16 14:25:40', 1, 7, 19, '2', 37),
('2019-12-16 14:25:44', 1, 0, 19, '2', 38),
('2019-12-16 14:25:44', 1, 0, 19, '2', 39),
('2019-12-16 14:25:44', 1, 0, 19, '2', 40),
('2019-12-16 14:25:44', 1, 0, 19, '2', 41),
('2019-12-16 14:25:44', 1, 0, 19, '2', 42),
('2019-12-16 14:25:45', 1, 0, 19, '2', 43),
('2019-12-16 14:25:45', 1, 0, 19, '2', 44),
('2019-12-16 14:25:45', 1, 0, 19, '2', 45),
('2019-12-16 14:25:45', 1, 0, 19, '2', 46),
('2019-12-16 14:25:45', 1, 0, 19, '2', 47),
('2019-12-16 14:26:19', 1, 7, 19, '2', 48),
('2019-12-16 14:26:31', 1, 7, 19, '2', 49),
('2019-12-16 14:26:32', 1, 0, 19, '2', 50),
('2019-12-16 14:26:32', 1, 0, 19, '2', 51),
('2019-12-16 14:26:32', 1, 0, 19, '2', 52),
('2019-12-16 14:26:32', 1, 0, 19, '2', 53),
('2019-12-16 14:26:32', 1, 0, 19, '2', 54),
('2019-12-16 14:26:32', 1, 0, 19, '2', 55),
('2019-12-16 14:26:32', 1, 0, 19, '2', 56),
('2019-12-16 14:26:32', 1, 0, 19, '2', 57),
('2019-12-16 14:26:32', 1, 0, 19, '2', 58),
('2019-12-16 14:26:32', 1, 0, 19, '2', 59),
('2019-12-16 14:26:58', 1, 7, 19, '2', 60),
('2019-12-16 14:27:59', 1, 7, 19, '2', 61),
('2019-12-16 14:28:12', 1, 7, 19, '2', 62),
('2019-12-16 14:29:12', 1, 7, 19, '2', 63),
('2019-12-16 14:31:12', 1, 7, 19, '2', 64),
('2019-12-16 14:31:47', 1, 7, 19, '2', 65),
('2019-12-16 14:33:43', 1, 7, 19, '2', 66),
('2019-12-16 14:34:42', 1, 7, 19, '2', 67),
('2019-12-16 14:34:55', 1, 7, 19, '2', 68),
('2019-12-16 14:35:06', 1, 7, 19, '2', 69),
('2019-12-16 14:35:12', 1, 7, 19, '2', 70),
('2019-12-16 14:35:50', 1, 7, 19, '2', 71),
('2019-12-16 14:36:11', 1, 7, 19, '2', 72),
('2019-12-16 14:37:02', 1, 7, 19, '2', 73),
('2019-12-16 14:37:13', 1, 7, 19, '2', 74),
('2019-12-16 14:37:22', 1, 7, 19, '2', 75),
('2019-12-16 14:37:32', 1, 7, 19, '2', 76),
('2019-12-16 14:37:50', 1, 7, 19, '2', 77),
('2019-12-16 14:38:42', 1, 7, 19, '2', 78),
('2019-12-16 14:50:27', 1, 2, 19, '1', 79),
('2019-12-16 15:04:38', 2, 7, 19, '2', 80),
('2019-12-16 15:12:57', 1, 7, 19, '2', 81),
('2019-12-16 15:19:19', 2, 9, 1, '2', 82),
('2019-12-16 15:19:23', 1, 9, 1, '2', 83),
('2019-12-16 15:20:18', 1, 9, 1, '2', 84),
('2019-12-16 15:20:44', 1, 9, 1, '2', 85),
('2019-12-16 15:21:07', 1, 9, 1, '2', 86),
('2019-12-16 15:21:50', 1, 9, 1, '2', 87),
('2019-12-16 15:23:18', 1, 9, 1, '2', 88),
('2019-12-16 15:24:06', 1, 9, 1, '2', 89),
('2019-12-16 15:48:41', 1, 37, 1, '1', 90),
('2019-12-16 15:49:37', 1, 37, 1, '1', 91),
('2019-12-16 15:49:46', 1, 37, 1, '1', 92),
('2019-12-16 15:51:08', 1, 37, 1, '1', 93),
('2019-12-16 15:51:18', 1, 37, 1, '1', 94),
('2019-12-16 15:51:50', 1, 1, 1, '1', 95),
('2019-12-16 15:52:26', 1, 1, 1, '1', 96),
('2019-12-16 15:52:43', 1, 1, 1, '1', 97),
('2019-12-16 15:52:57', 1, 1, 1, '1', 98),
('2019-12-16 15:53:05', 1, 1, 1, '1', 99),
('2019-12-16 15:54:12', 1, 37, 1, '1', 100),
('2019-12-16 15:54:31', 1, 37, 1, '1', 101),
('2019-12-16 15:55:04', 1, 37, 1, '1', 102),
('2019-12-16 15:56:19', 1, 1, 1, '1', 103),
('2019-12-16 15:56:59', 1, 1, 1, '1', 104),
('2019-12-16 15:57:47', 1, 3, 1, '1', 105),
('2019-12-16 15:58:00', 1, 4, 1, '1', 106),
('2019-12-16 15:59:11', 1, 30, 1, '1', 107),
('2019-12-16 15:59:20', 1, 31, 1, '1', 108),
('2019-12-16 15:59:38', 1, 7, 1, '2', 109),
('2019-12-16 17:19:16', 2, 1, 20, '1', 112),
('2019-12-16 17:19:41', 1, 1, 20, '1', 114),
('2019-12-16 19:38:06', 1, 2, 1, '1', 132),
('2019-12-16 19:39:11', 1, 2, 1, '1', 133),
('2019-12-16 19:40:50', 1, 2, 1, '1', 134),
('2019-12-16 19:42:49', 1, 2, 1, '1', 135),
('2019-12-16 19:43:19', 1, 2, 1, '1', 136),
('2019-12-16 19:43:52', 1, 2, 1, '1', 137),
('2019-12-16 19:43:59', 1, 2, 1, '1', 138),
('2019-12-16 19:44:21', 1, 2, 1, '1', 139),
('2019-12-16 19:45:04', 1, 2, 1, '1', 140),
('2019-12-16 19:47:15', 1, 2, 1, '1', 141),
('2019-12-16 19:47:32', 1, 2, 1, '1', 142),
('2019-12-16 19:49:56', 1, 2, 1, '1', 143),
('2019-12-16 19:50:14', 1, 2, 1, '1', 144),
('2019-12-16 19:55:46', 2, 31, 21, '1', 145),
('2019-12-16 19:56:01', 1, 7, 21, '2', 146),
('2019-12-16 19:56:13', 1, 2, 21, '1', 147),
('2019-12-16 20:03:20', 1, 10, 21, '2', 148);

-- --------------------------------------------------------

--
-- Estrutura da tabela `interations_data`
--

CREATE TABLE `interations_data` (
  `Id` int(11) NOT NULL,
  `Title` varchar(500) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `interations_data`
--

INSERT INTO `interations_data` (`Id`, `Title`, `description`) VALUES
(1, 'Assistiu', 'Vídeos que foram assistidos'),
(2, 'Adicionou na Lista', 'Vídeos que foram adicionados na Lista'),
(3, 'Avaliou', 'Vídeos que foram avaliados');

-- --------------------------------------------------------

--
-- Estrutura da tabela `movies`
--

CREATE TABLE `movies` (
  `Id` int(11) NOT NULL,
  `Mname` varchar(255) DEFAULT NULL,
  `Mdescription` text DEFAULT NULL,
  `Mgenre` varchar(255) DEFAULT NULL,
  `Mdate` datetime DEFAULT NULL,
  `Mimage` varchar(2505) DEFAULT NULL,
  `Mvideo` varchar(2505) DEFAULT NULL,
  `Mdestaque` int(10) DEFAULT 0,
  `Mtype` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `movies`
--

INSERT INTO `movies` (`Id`, `Mname`, `Mdescription`, `Mgenre`, `Mdate`, `Mimage`, `Mvideo`, `Mdestaque`, `Mtype`) VALUES
(1, 'A chave do vale encantado', 'Filme de Osvaldo Montenegro', 'Diverso', NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfpOJgZTSIVKIMR_fsO_PzafOfa-MgjJAgkeH9w1oVNqGiQSOg', 'uploadsa_chave_do_vale_encantado_filme_completo.mp4', 0, 2),
(2, 'O Perfume da Memória', 'Filme de Osvaldo Montenegro', 'Diverso', '2019-04-10 09:00:00', 'https://i.ytimg.com/vi/v6P2cLd_eUo/maxresdefault.jpg', 'uploadso_perfume_da_memoria_completo.mp4', 1, 1),
(3, 'Solidões', 'Filme de Osvaldo Montenegro', 'Diverso', '2016-02-14 00:00:00', 'https://i.ytimg.com/vi/ng9nrA9o0o0/maxresdefault.jpg', 'uploadssolidoes_completo.mp4', 0, 1),
(4, 'Léo e Bia', 'Filme de Osvaldo Montenegro', 'Diverso', '2015-11-04 00:00:00', 'https://i.ytimg.com/vi/1eK3HRlz-dY/maxresdefault.jpg', 'uploadsleo-e-bia.mp4', 0, 1),
(30, 'A Cabana', 'Quando uma tragédia acontece na família, um homem recebe um convite misterioso', 'Drama', NULL, 'https://cdn.mensagenscomamor.com/content/images/p000023721.jpg', 'uploadsA_Cabana-filme.mp4', 0, 1),
(31, 'Aladdin 2019', 'Filme live action 2019 do clássico da Disney', 'Diverso', NULL, 'https://i1.wp.com/valkirias.com.br/wp-content/uploads/2019/06/valkirias-aladdin-2019.png', 'uploadsAladdin.2019.mp4', 1, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `movies_type`
--

CREATE TABLE `movies_type` (
  `Id_type` int(10) NOT NULL,
  `Title` varchar(500) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `movies_type`
--

INSERT INTO `movies_type` (`Id_type`, `Title`, `description`) VALUES
(1, 'Filmes', 'Filmes'),
(2, 'Series', 'Series');

-- --------------------------------------------------------

--
-- Estrutura da tabela `series`
--

CREATE TABLE `series` (
  `Id` int(11) NOT NULL,
  `Titulo` varchar(500) NOT NULL,
  `Description` varchar(500) NOT NULL,
  `Sgenre` varchar(900) NOT NULL,
  `Simage` varchar(600) NOT NULL,
  `Stype` varchar(500) NOT NULL,
  `Sdestaque` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `series`
--

INSERT INTO `series` (`Id`, `Titulo`, `Description`, `Sgenre`, `Simage`, `Stype`, `Sdestaque`) VALUES
(7, 'Rei Leão', 'Series do filme', 'Drama', 'https://studiosol-a.akamaihd.net/uploadfile/letras/playlists/e/7/f/e/e7fe0def1675451997fc60bcb880eab4.jpg', '2', 1),
(10, 'Teste', 'Teste de serie', 'Drama', '', '2', 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `series_video`
--

CREATE TABLE `series_video` (
  `Id` int(11) NOT NULL,
  `path` varchar(400) NOT NULL,
  `title` varchar(400) NOT NULL,
  `id_serie` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `series_video`
--

INSERT INTO `series_video` (`Id`, `path`, `title`, `id_serie`) VALUES
(6, 'uploadsfiles-1576176638450.mp4', '', 7),
(7, 'uploadsfiles-1576176638795.mp4', '', 7),
(8, 'uploadsfiles-1576176638904.mp4', '', 7),
(9, 'uploadsfiles-1576176641611.mp4', '', 7),
(10, 'uploadsfiles-1576176640432.mp4', '', 7),
(11, 'uploadsfiles-1576178277218.mp4', '', 8),
(12, 'uploadsfiles-1576178277574.mp4', '', 8),
(13, 'uploadsfiles-1576178277725.mp4', '', 8),
(14, 'uploads1.cliclo.mp4-1576179616841.mp4', '', 9),
(16, 'uploads2.rei.mp4-1576179617387.mp4', '', 9),
(17, 'uploads3.hacuna.mp4-1576179617608.mp4', '', 9),
(19, 'uploadsfiles-1576179931970.mp4', '', 9),
(20, 'uploads2.rei.mp4-1576520343903.mp4', '', 9),
(21, 'uploads3.hacuna.mp4-1576520344167.mp4', '', 9),
(22, 'uploadsONestaNoiteo Amo Chegou.mp4-1576520592810.mp4', '', 9),
(23, 'uploads\reileao.mp4-1576520667117.mp4', '', 9),
(24, 'uploadsfiles-1576537325561.mp4', '', 10),
(25, 'uploadsfiles-1576537325936.mp4', '', 10);

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `Id` int(11) NOT NULL,
  `login` varchar(200) NOT NULL,
  `password` varchar(100) NOT NULL,
  `name` varchar(2000) NOT NULL,
  `email` varchar(2000) NOT NULL,
  `type` int(2) NOT NULL DEFAULT 0,
  `isadmin` int(11) NOT NULL,
  `cpf` varchar(200) NOT NULL,
  `Uimg` varchar(600) NOT NULL,
  `Uimgs` varchar(600) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`Id`, `login`, `password`, `name`, `email`, `type`, `isadmin`, `cpf`, `Uimg`, `Uimgs`) VALUES
(1, 'admin', 'admin', 'LariADM', 'lari.moro20@gmail.com', 1, 1, '', '', ''),
(2, 'undefined', '1234', 'Larissa Moro', 'lari.moro20@gmail.com', 0, 0, '0000000', 'uploadsimage-1576532776647.jpeg', ''),
(3, 'vicksazevedo', '12345', 'Vitoria Azevedo', 'vi_senha@gmail.com', 0, 0, '', '', ''),
(4, '', 'undefined', 'y', 'tyty', 0, 0, 'undefined', '', ''),
(5, '', 'undefined', 'test', 'tyty', 0, 0, 'undefined', '', ''),
(6, 'undefined', 'yrty', 'test', 'tyty', 0, 0, 'undefined', '', ''),
(7, 'yiuyiyuiy', 'fsddsff', 'test', 'lasdff', 0, 0, 'undefined', '', ''),
(19, 'undefined', '1234', 'Vitoria Azevedo', 'vi_senha@gmail.com', 0, 0, '00000000000', 'uploads/image-1576108845394.png', ''),
(20, 'undefined', 'chelli', 'Chelli', 'lari.moro20@gmail.com', 0, 0, '000000', 'uploadsimage-1576527208644.jpeg', ''),
(21, 'undefined', '1234', 'Vinicius', 'vinicius.machado@osorio.ifrs.edu.br', 0, 0, '12312312312', 'uploadsimage-1576536880305.png', '');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `interations2`
--
ALTER TABLE `interations2`
  ADD PRIMARY KEY (`Id`);

--
-- Índices para tabela `interations_data`
--
ALTER TABLE `interations_data`
  ADD PRIMARY KEY (`Id`);

--
-- Índices para tabela `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`Id`);

--
-- Índices para tabela `movies_type`
--
ALTER TABLE `movies_type`
  ADD PRIMARY KEY (`Id_type`);

--
-- Índices para tabela `series`
--
ALTER TABLE `series`
  ADD PRIMARY KEY (`Id`);

--
-- Índices para tabela `series_video`
--
ALTER TABLE `series_video`
  ADD PRIMARY KEY (`Id`);

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `interations2`
--
ALTER TABLE `interations2`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=149;

--
-- AUTO_INCREMENT de tabela `interations_data`
--
ALTER TABLE `interations_data`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `movies`
--
ALTER TABLE `movies`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT de tabela `movies_type`
--
ALTER TABLE `movies_type`
  MODIFY `Id_type` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `series`
--
ALTER TABLE `series`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `series_video`
--
ALTER TABLE `series_video`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
