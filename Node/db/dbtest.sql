-- Active: 1699621771993@@127.0.0.1@3306@hyt
DROP TABLE IF EXISTS `matriz`;
CREATE TABLE `matriz` (
  `odt` int,
  `cliente` text,
  `grupo` text,
  `clasificacion` text,
  `cantidad` int DEFAULT 1,
  `remision` text,
  `descripcion` text,
  `estadoCliente` text,
  `informe` text,
  `estadoPlanta` text,
  `cotizacion` text,
  `factura` text,
  `cotizacion2` text,
  `cotizacion3` text,
  `precio` int DEFAULT 0
);