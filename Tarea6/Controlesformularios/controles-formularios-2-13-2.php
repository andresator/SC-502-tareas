<?php
/**
 * Controles en formularios (2) 13-2 - controles-formularios-2-13-2.php
 *
 * @author Andres y Diego Chavarria
 *
 */
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>
    Gradiente en cuadrado (Resultado).
    Controles en formularios (2). Con formularios.
    Escriba aquí su nombre
  </title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css" title="Color">
</head>

<body>
  <h1>Gradiente en cuadrado (Resultado)</h1>

<?php

  $lado = $_GET["lado"];
  $inicial = $_GET["inicial"];
  $final = $_GET["final"];

  print " <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" \n" 
      ."  width=\"" . ($lado + 10) . "px\" height=\"" . ($lado + 10) . "px\">\n"; 
  print " <defs>\n" 
      ."    <linearGradient id=\"gradient\">\n"
      ."      <stop offset=\"5%\" stop-color=\"$inicial\" />\n" 
      ."      <stop offset=\"95%\" stop-color=\"$final\" />\n"
      ."    </linearGradient>\n" 
      ."  </defs>\n"; 
  print " <rect fill=\"url(#gradient)\" stroke=\"black\" stroke-width=\"10\" " 
      . "x=\"5\" y=\"5\" width=\"$lado\" height=\"$lado\" />\n";
  print " </svg>\n"; 
  print "\n"; 
?>

<img src="imagenes/code.jpg" alt="código">
  <p><a href="controles-formularios-2-13-1.php">Volver al formulario.</a></p>

  <footer>
    <p>Gradiente en cuadrado</p>
  </footer>
</body>
</html>
