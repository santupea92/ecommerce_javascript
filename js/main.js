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

let cantidadCuotas;
let metodoDePago;

// Productos & Precios

class Producto {
    constructor (nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.stock = stock;
        this.vendido = false;
    }

    seleccion() {
        alert("Usted eligió el producto denominado " + this.nombre + ".");
    }

    sumaIVA() {
        return this.precio = this.precio * 1.21; // 1.21 es la cuenta del 21% sumado directamente.
    }

    vender() {
        if (this.stock > 0) {
            this.vendido = false;
            this.stock = this.stock - 1;
        } else {
        this.vendido = true;
        }
    }

    metodoPago() {

    // PAGOS

    if (this.vendido == false) {
        // Método de Pago

        metodoDePago = prompt("Qué Método de Pago elige?" + "\n" + "1) Efectivo" + "\n" + "2) Tarjeta (1, 3, 6 & 12 cuotas sin interés)").toUpperCase();

        // Precio en Efectivo

        if ((metodoDePago == "EFECTIVO") || (metodoDePago == "1")) {
            alert("El monto a pagar (con IVA incluído) es $" + this.sumaIVA() + " en efectivo.");
        }

        // Precio en Cuotas

        if ((metodoDePago == "TARJETA") || (metodoDePago == "2")) {
        cantidadCuotas = parseInt(prompt("¿Cantidad de Cuotas (hasta 12)?"));
        }

        function precioCuota (precio, cuota) {
            return (precio / cuota).toFixed(2);
        }

        if (cantidadCuotas > 1) {
            alert("Usted pagará " + cantidadCuotas + " cuotas de $" + precioCuota(this.sumaIVA(), cantidadCuotas) + " (con IVA incluído).");
        } 
    } else if (this.vendido == true) {
        alert("¡El producto " + this.nombre + " no tiene stock!");
        } else {
            alert("Error");
        }
    }
}

const COOLER = new Producto ("EFFECT X CPU COOLER CCW3000", 13000, 0);
const FLICK = new Producto ("FLICK SERIES", 1600, 10);
const GAIA = new Producto ("GAIA C211", 35000, 10);
const JUPITER = new Producto ("JUPITER G809", 5000, 5);
const HITMAN = new Producto ("HITMAN GW800", 6500, 0);
const FELOPS = new Producto ("PELOPS H818", 8000, 10);
const RUBY = new Producto ("RUBY 144165 HZ", 55000, 5);
const TAILGATE = new Producto ("TAILGATE GC702", 14000, 0);

    switch (productoSeleccionado) {
        case "1":
            productoSeleccionado = COOLER;
            COOLER.seleccion();
            COOLER.vender();
            COOLER.metodoPago();
            break;

        case "2":
            productoSeleccionado = FLICK;
            FLICK.seleccion();
            FLICK.vender();
            FLICK.metodoPago();
            break;
            
        case "3":
            productoSeleccionado = GAIA;
            GAIA.seleccion();
            GAIA.vender();
            GAIA.metodoPago();
            break;

        case "4":
            productoSeleccionado = JUPITER;
            JUPITER.seleccion();
            JUPITER.vender();
            JUPITER.metodoPago();
            break;

        case "5":
            productoSeleccionado = HITMAN;
            HITMAN.seleccion();
            HITMAN.vender();
            HITMAN.metodoPago();
            break;

        case "6":
            productoSeleccionado = FELOPS;
            FELOPS.seleccion();
            FELOPS.vender();
            FELOPS.metodoPago();
            break;

        case "7":
            productoSeleccionado = RUBY;
            RUBY.seleccion();
            RUBY.vender();
            RUBY.metodoPago();
            break;

        case "8":
            productoSeleccionado = TAILGATE;
            TAILGATE.seleccion();
            TAILGATE.vender();
            TAILGATE.metodoPago();
            break;

        default:
            alert("Error");
            break;
    }