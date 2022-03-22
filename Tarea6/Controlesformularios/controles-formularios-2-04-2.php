<?php
/**
 * Controles en formularios (2) 4-2 - controles-formularios-2-04-2.php
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
    Datos personales 4 (Resultado).
    Controles en formularios (2). Con formularios.
    Escriba aquí su nombre
  </title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css" title="Color">
</head>

<body>
  <h1>Datos personales 4 (Resultado)</h1>

  <?php 
  $mail1 = $_GET["correo"];
  $mail2 = $_GET["correo2"];

  if($mail1 === $mail2){
    echo "Su correo electronico: ";
    echo $mail1;
    echo "\n";

    if($_GET["recibir"] == 1){
      echo "Se ha suscrito para recibir nuestros correos.";
    } else{
      echo "No se a suscrito para recibir nuestros correos.";
    }
  } else {
      echo "Por favor regrese al formulario y confirme su correo electronico.";

  }

   
?>

  <p><a href="controles-formularios-2-04-1.php">Volver al formulario.</a></p>

</body>
</html>
