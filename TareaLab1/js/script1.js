function addCar() {

    var make = document.getElementById("make").value;		
    var model = document.getElementById("model").value;		
    var year = document.getElementById("year").value;		
    var colorCar = document.getElementById("colorCar").value;
    var count = document.getElementById("count").value;

    if (isNaN(count)) {
        alert("Conteo incorrecto de vehiculos. Utilice numeros mayores o iguales a 1.");

        
    } else{

        for (i = 0; i < count; i++) {
            var listCar = document.getElementById("list").innerHTML;
            document.getElementById("list").innerHTML = listCar + '<br>' + "Carro registrado: " + "<br>" + make + "<br>" + model + "<br>" + year + "<br>" + colorCar + "<br>";
        }
    } 		 
}