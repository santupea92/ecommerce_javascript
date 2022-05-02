// Selección Productos

let productoSeleccionado = prompt("¿Qué producto quiere comprar? (Escoja un N°)" + "\n" + 
                                    "1- EFFECT X CPU COOLER CCW3000" + "\n" +
                                    "2- FLICK SERIES" + "\n" +
                                    "3- GAIA C211" + "\n" +
                                    "4- JUPITER G809" + "\n" +
                                    "5- HITMAN GW800" + "\n" +
                                    "6- PELOPS H818" + "\n" +
                                    "7- RUBY 144165 HZ" + "\n" +
                                    "8- TAILGATE GC702" + "\n" + 
                                    "9- Ver los PRECIOS de cada producto");

let cantidadCuotas;
let metodoDePago;

// Clase de Productos / Método

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

const productos = [];
productos.push(new Producto ("EFFECT X CPU COOLER CCW3000", 13000, 0)); // index 0
productos.push(new Producto ("FLICK SERIES", 1600, 10)); // index 1
productos.push(new Producto ("GAIA C211", 35000, 10)); // index 2
productos.push(new Producto ("JUPITER G809", 5000, 5)); // index 3
productos.push(new Producto ("HITMAN GW800", 6500, 0)); // index 4
productos.push(new Producto ("PELOPS H818", 8000, 10)); // index 5
productos.push(new Producto ("RUBY 144165 HZ", 55000, 5)); // index 6
productos.push(new Producto ("TAILGATE GC702", 14000, 0)); // index 7

    switch (productoSeleccionado) {
        case "1":
            productoSeleccionado = productos[0];
            productos[0].seleccion();
            productos[0].vender();
            productos[0].metodoPago();
            break;

        case "2":
            productoSeleccionado = productos[1];
            productos[1].seleccion();
            productos[1].vender();
            productos[1].metodoPago();
            break;
            
        case "3":
            productoSeleccionado = productos[2];
            productos[2].seleccion();
            productos[2].vender();
            productos[2].metodoPago();
            break;

        case "4":
            productoSeleccionado = productos[3];
            productos[3].seleccion();
            productos[3].vender();
            productos[3].metodoPago();
            break;

        case "5":
            productoSeleccionado = productos[4];
            productos[4].seleccion();
            productos[4].vender();
            productos[4].metodoPago();
            break;

        case "6":
            productoSeleccionado = productos[5];
            productos[5].seleccion();
            productos[5].vender();
            productos[5].metodoPago();
            break;

        case "7":
            productoSeleccionado = productos[6];
            productos[6].seleccion();
            productos[6].vender();
            productos[6].metodoPago();
            break;

        case "8":
            productoSeleccionado = productos[7];
            productos[7].seleccion();
            productos[7].vender();
            productos[7].metodoPago();
            break;

        case "9":
            for(const producto of productos) {
                alert("Esta es la lista de Precios:" + "\n" + 
                      producto.nombre + ": $" + producto.precio);
            }
            break;

        default:
            alert("Error");
            break;
    }