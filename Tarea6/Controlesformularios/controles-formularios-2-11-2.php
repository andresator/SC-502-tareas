<?php
/**
 * Controles en formularios (2) 11-2 - controles-formularios-2-11-2.php
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
    Cuadrado con bordes redondeados (Resultado).
    Controles en formularios (2). Con formularios.
    Escriba aquí su nombre
  </title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css" title="Color">
</head>

<body>
  <h1>Cuadrado con bordes redondeados (Resultado)</h1>

  
  <svg>
    <rect width="<?php echo $_GET["lado"]?>" height="<?php echo $_GET["lado"]?>" rx="<?php echo $_GET["esquina"]?>" ry="<?php echo $_GET["esquina"]?>"/>
  </svg> 


  <p><a href="controles-formularios-2-11-1.php">Volver al formulario.</a></p>

</body>
</html>
