<?php
/**
 * Controles en formularios (2) 1-2 - controles-formularios-2-01-2.php
 *
 * @author Escriba aquí su nombre
 *
 */
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>
    Datos personales 1 (Resultado).
    Controles en formularios (2). Con formularios.
    Escriba aquí su nombre
  </title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css" title="Color">
</head>

<body>
  <h1>Datos personales 1 (Resultado)</h1>

  Su nombre es: <?php echo $_GET["nombre"]; ?> </br>  
  Sus apellidos son: <?php echo $_GET["apellidos"]; ?>

  <p><a href="controles-formularios-2-01-1.php">Volver al formulario.</a></p>

</body>
</html>
