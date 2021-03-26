// Codigo para actualizar informacion de las mesas de un negocio de billar
//
// Autor: Gabriel Mar Barrio
// Fecha de elaboracion: 25 de marzo del 2021
//
// Aclaraciones:
// El billar tiene un precio por hora, sin embargo se cobra por fraccion de hora en base al precio ya mencionado,
// total a pagar se calcula cada segundo (este lapso se puede modficar, mas informacion en la linea 55)

// Arreglo para almacenar las horas de inicio
var valoresHorasInicio = [];

// Funcion para cambiar de estado una mesa segun su numero
const cambiarEstado = (numeroMesa) => {

    var mesaId = "mesa" + numeroMesa;
    var ruta = document.getElementById(mesaId);

    var horaDummy = new Date();

    // Le damos formato a la hora
    var horas = (horaDummy.getHours() > 10) ? horaDummy.getHours() : "0" + horaDummy.getHours();
    var minutos = (horaDummy.getMinutes() > 10) ? horaDummy.getMinutes() : "0" + horaDummy.getMinutes();
    var horaFormateada = "Hora de inicio: " + horas + ":" + minutos;

    if(ruta.src.match("disponible")){

        // Si estaba disponible que pase a estar ocupada y actualizamos su informacion
        ruta.src = "images/mesa_ocupada.png";
        document.getElementById("horaInicio" + numeroMesa).innerHTML = horaFormateada;
        document.getElementById("horaFinal" + numeroMesa).innerHTML = "Hora de fin: En uso";
        document.getElementById("total" + numeroMesa).innerHTML = "Total a pagar:";

        // Vamos llevando registro de las horas de inicio de las mesas
        valoresHorasInicio[numeroMesa] = horaDummy.getTime();

        // Comenzamos a calcular el total en tiempo real 
        // (recomiendo leer primero esta funcion para enteder mejor la siguiente parte de la condicion)
        calculoTiempoReal(numeroMesa, ruta);

    }else{

        // Si estaba ocupada que pase a estar disponible y actualizamos su informacion
        ruta.src = "images/mesa_disponible.png";
        document.getElementById("horaFinal" + numeroMesa).innerHTML = horaFormateada;

        // Actualizamos una ultima vez la informacion del total a pagar
        // Tenemos que asegurarnos de haccer esto por si la mesa cambia de estado a medio de actualizacion
        var momentoActual = new Date();
        var total = ( (momentoActual.getTime() - valoresHorasInicio[numeroMesa]) / 1000 / 60 / 60 ) * 50;
        document.getElementById("total" + numeroMesa).innerHTML = "Total a pagar: $ " + total.toFixed(2);

    }
}

// Funcion para ir calculando el total a pagar de la mesa cada x cantidad de tiempo, en este caso se calcula cada segundo
function calculoTiempoReal(numeroMesa, ruta){
    
    // Lapso de tiempo que esperara entre cada calculo del total (en milisegundos) 
    // multiplicar por 60 hasta 2 veces para pasarlo a minutos u horas respectivamente, 
    var lapsoDeActualizacion = 1000 // * 60 * 60; 

    // Calculo del total a pagar
    var momentoActual = new Date();
    // Calculamos la diferencia entre el momento actual, y la hora de inicio de la mesa en cuestion
    // Ya que utilizamos fechas para calcular el total, y estas se manejan en milisegundos,
    // la diferencia entre fechas esta dada en milisegundos, la convertimos a horas y la multiplicamos por 50
    var total = ( (momentoActual.getTime() - valoresHorasInicio[numeroMesa]) / 1000 / 60 / 60 ) * 50;
    // Actualizamos la informacion con la cantidad a 2 decimales
    document.getElementById("total" + numeroMesa).innerHTML = "Total a pagar: $ " + total.toFixed(2);

    // Al ternimo de cada lapso de actualizacion comprobamos si la mesa esta disponible u ocupada
    // si sigue ocupada volvemos a llamar esta funcion, para calcular el total a pagar
    setTimeout(() => {
        if(ruta.src.match("ocupada"))
            calculoTiempoReal(numeroMesa, ruta)
    }, lapsoDeActualizacion); 
    
}