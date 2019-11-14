"use strict";

/////Declaro las clases/////
class banco {
  constructor(name, direccion) {
    this.name = name;
    this.direccion = direccion;
    this.clientes = [];
  }
}
class cuentaBancaria {
  constructor(id) {
    this.id = id;
    this.balance = 0;
  }
}
class titularDeLaCuenta {
  constructor(nombre, genero, monedero) {
    this.nombre = nombre;
    this.genero = genero;
    this.monedero = monedero;
    this.id = Math.floor(Math.random() * 9999999999);
  }

  /////creo un método para abrir una cuentay le pusheo los datos del titular e instancio un id aleatorio.
  abrirCuenta(banco) {
    banco.clientes.push({ name: this.name, id: this.id });
    return new cuentaBancaria(Math.floor(Math.random() * 9999999999));
  }

  //Método para ingresar dinero donde digo que si lo que hay en el monedero es mayor que la cantidad a ingresar,
  //me la reste del monedero y me la sume a la cuenta bancaria, y que si no es mayor , muestre una alerta diciendo
  //que no hay suficiente dinero en mi monedero.(tengo 12mil euros e ingreso 11900, por tanto me quedo con 100 en el monedero)

  ingresarDinero(cantidad, cuenta) {
    if (this.monedero > cantidad) {
      cuenta.balance += cantidad;
      this.monedero -= cantidad;

      console.log(
        `acabas de realizar con exito un ingreso de ${cantidad}euros en tu cuenta bancaria ,te quedan ${this.monedero} euros en tu monedero`
      );
    } else {
      alert('no te llega lo que tienes en el monedero');
    }
  }

  ////creo un método para retirar dinero de la cuenta en el que digo que si la cantidad a retirar es mayor 
  // que mi saldo en cuenta, me lo reste a mi cuenta y me lo sume al monedero, y que si es menor muestre una
  //alerta de que no tengo tanto dinero en la cuenta.(tenía 100 euros en el monedero, retiro 2 y me quedan 11898)
  retirarDinero(cantidad, cuenta) {
    if (cuenta.balance > cantidad) {
      cuenta.balance -= cantidad;
      this.monedero += cantidad;
      console.log(
        `has retirado ${cantidad} euros ,tienes ${this.monedero} euros en tu monedero y en tu cuenta bancaria quedan ${cuenta.balance} euros`
      );
    } else {
      alert('no tienes suficiente dinero en tu cuenta');
    }

    return cuenta.balance;
  }
}
//instancio la clase titularDeLaCuenta donde le paso los datos del titular(nombre, genero y dinero disponible)
const manolo = new titularDeLaCuenta('Manolo', 'hombre', '12000');

//instancio la clase banco y le paso el nombre de la entidad y la dirección
const miBanco = new banco('sabadell', 'calle de Santiago');


//muestro por consola los datos del banco
console.log(miBanco);

//muestro por consola los datos del titular
console.log(manolo);

//instancia de miBanco al que hago referencia en el propio método
const cuentaManolo = manolo.abrirCuenta(miBanco);

//indico mi ingreso 
manolo.ingresarDinero(11900, cuentaManolo);
//indico mi retirada
manolo.retirarDinero(2, cuentaManolo);

