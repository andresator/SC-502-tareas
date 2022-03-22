<?php
/**
 * Controles en formularios (2) 12-2 - controles-formularios-2-12-2.php
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
    Círculo o cuadrado Cuadrado (Resultado).
    Controles en formularios (2). Con formularios.
    Escriba aquí su nombre
  </title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css" title="Color">
</head>

<body>
  <h1>Círculo o cuadrado (Resultado)</h1>

  <?php
    $sel = $_GET["forma"];
  ?>
  <svg>
    <?php if($sel == "cuadrado") : ?>
      <rect width="<?php echo $_GET["lado"]?>" height="<?php echo $_GET["lado"]?>"/>
    <?php elseif($sel == "circulo") : ?>
      <circle cx="<?php echo $_GET["lado"]?>" cy="<?php echo $_GET["lado"]?>" r="<?php echo $_GET["lado"]?>" stroke="black" fill="red" />
    <?php endif; ?>
  </svg>

  <p><a href="controles-formularios-2-12-1.php">Volver al formulario.</a></p>

</body>
</html>
