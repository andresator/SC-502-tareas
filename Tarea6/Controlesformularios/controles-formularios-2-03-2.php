<?php
/**
 * Controles en formularios (2) 3-2 - controles-formularios-2-03-2.php
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
    Datos personales 3 (Resultado).
    Controles en formularios (2). Con formularios.
    Escriba aquí su nombre
  </title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css" title="Color">
</head>

<body>
  <h1>Datos personales 3 (Resultado)</h1>

  Su sexo: <?php echo $_GET["sexo"];?> <br/>
  Sus aficiones: <br/> <?php 
  $hobbies = $_GET["aficion"];
  
  foreach ($hobbies as $aficion){ 
    echo $aficion."<br />";
  }
  ?>

  <p><a href="controles-formularios-2-03-1.php">Volver al formulario.</a></p>

</body>
</html>
