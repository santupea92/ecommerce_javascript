// Selección Productos

let productoSeleccionado = prompt("¿Qué producto quiere comprar? (Escoja un N°)" + "\n" + 
                                    "1- EFFECT X CPU COOLER CCW3000" + "\n" +
                                    "2- FLICK SERIES" + "\n" +
                                    "3- GAIA C211" + "\n" +
                                    "4- JUPITER G809" + "\n" +
                                    "5- HITMAN GW800" + "\n" +
                                    "6- PELOPS H818" + "\n" +
                                    "7- RUBY 144165 HZ" + "\n" +
                                    "8- TAILGATE GC702" + "\n");

// Productos & Precios

let COOLER = 13000;
let FLICK = 1600;
let GAIA = 35000;
let JUPITER = 5000;
let HITMAN = 6500;
let FELOPS = 8000;
let RUBY = 55000;
let TAILGATE = 14000;

// Método de Pago

let metodoDePago = prompt("Qué Método de Pago elige?" + "\n" + "1) Efectivo" + "\n" + "2) Tarjeta (1, 3, 6 & 12 cuotas sin interés)").toUpperCase();

    switch (productoSeleccionado) {
        case "1":
            productoSeleccionado = COOLER;
            break;

        case "2":
            productoSeleccionado = FLICK;
            break;
            
        case "3":
            productoSeleccionado = GAIA;
            break;

        case "4":
            productoSeleccionado = JUPITER;
            break;

        case "5":
            productoSeleccionado = HITMAN;
            break;

        case "6":
            productoSeleccionado = FELOPS;
            break;

        case "7":
            productoSeleccionado = RUBY;
            break;

        case "8":
            productoSeleccionado = TAILGATE;
            break;

        default:
            alert("Error");
            break;
    }

// Precio en Efectivo

if (metodoDePago == "EFECTIVO") {
    alert("El monto a pagar es $" + productoSeleccionado + " en efectivo.");
}

// Precio en Cuotas

let cantidadCuotas;

if (metodoDePago == "TARJETA") {
    cantidadCuotas = parseInt(prompt("¿Cantidad de Cuotas (hasta 12)?"));
}

function precioCuota (precio, cuota) {
    return precio / cuota;
}

if (cantidadCuotas > 1) {
    alert("Usted pagará " + cantidadCuotas + " cuotas de $" + precioCuota(productoSeleccionado, cantidadCuotas) + ".");
} 