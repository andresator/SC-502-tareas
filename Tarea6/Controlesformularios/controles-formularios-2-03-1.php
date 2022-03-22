<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>
    Datos personales 3 (Formulario).
    Controles en formularios (2). Con formularios.
    Escriba aquí su nombre
  </title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css" title="Color">
</head>

<body>
  <h1>Datos personales 3 (Formulario)</h1>

  <form action="controles-formularios-2-03-2.php" method="get">
    <p>Indique su sexo y aficiones:</p>

    <p>
      <strong>Sexo:</strong>
      <label><input type="radio" name="sexo" value="hombre">Hombre</label>
      <label><input type="radio" name="sexo" value="mujer">Mujer</label>
    </p>

    <p>
      <strong>Aficiones:</strong>
      <label><input type="checkbox" name="aficion[]" value="cine">Cine</label>
      <label><input type="checkbox" name="aficion[]" value="literatura">Literatura</label>
      <label><input type="checkbox" name="aficion[]" value="musica">Música</label>
    </p>

    <p>
      <input type="submit" value="Enviar">
      <input type="reset" value="Borrar">
    </p>
  </form>

  <footer>
    <p>Escriba aquí su nombre</p>
  </footer>
</body>
</html>
