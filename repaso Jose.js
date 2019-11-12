"use strict";

const arrayNums = [1, 2, 3, 1];

const containsDuplicate = arrayNums => {
  for (let i = 0; i < arrayNums.length; i++) {
    for (let j = i + 1; j < arrayNums.length; j++) {
      if (arrayNums[i] === arrayNums[j]) {
        return true;
      }
    }
  }
  return false;
};

//console.log(containsDuplicate(arrayNums));

///////////////////////////////////////////////////
const moveZeroes = [0, 1, 0, 3, 12];
let newArray = [];

function cambiarZeros(moveZeroes) {
  for (let i = 0; i < moveZeroes.length; i++) {
    if (moveZeroes[i] === 0) {
      moveZeroes.splice(i, 1);
      newArray.push(0);
      i--;
    }
  }
  moveZeroes.push(...newArray);
}
cambiarZeros(moveZeroes);
//console.log({ moveZeroes });

/////////////////////  EJERCICIO 1/////////////////////////////

let valuesLaura = [116, 94, 123];
let valuesMaria = [97, 134, 105];
let valuesSara = [89, 120, 103];

let sumaLaura = valuesLaura.reduce(
  (previous, current) => (current += previous)
);
let mediaLaura = sumaLaura / valuesLaura.length;
console.log(`los puntos de Laura son ${mediaLaura}`);

let sumaSara = valuesSara.reduce((previous, current) => (current += previous));
let mediaSara = sumaSara / valuesSara.length;
console.log(`los puntos de Sara son ${mediaSara}`);

let sumaMaria = valuesMaria.reduce(
  (previous, current) => (current += previous)
);
let mediaMaria = sumaMaria / valuesMaria.length;
console.log(`los puntos de Maria son ${mediaMaria}`);

let ganadora = Math.max(mediaLaura, mediaSara, mediaMaria);

console.log(`la ganadora es María con  ${ganadora} puntos`);

/////////////////////////EJERCICO 2///////////////////////////////
const precios = [124, 58, 268];

function calculaPropina(precios) {
  let propina = [];
  for (let i = 0; i < precios.length; i++) {
    if (precios[i] > 50 && precios[i] < 200) {
      propina.push(precios[i] * 0.15);
    } else if (precios[i] > 200) {
      propina.push(precios[i] * 0.1);
    }
    // console.log(propina);
  }
  return propina;
}
calculaPropina(precios);

function sumaDePropinas(precios) {
  let factura = [];
  for (let i = 0; i < precios.length; i++) {
    factura[i] = precios[i] + calculaPropina(precios)[i];
  }

  return factura;
}
//console.log(sumaDePropinas(precios));

/////////////////////////////////EJERCICIO 3///////////////////////////////////

const nums = [100, 3, 4, 2, 10, 4, 1, 10];

for (let index = 0; index < nums.length; index++) {
  //console.log(nums[index]);
}

nums.map((values, index) => {
  // console.log(values, index);
});

for (const iterator of nums) {
  // console.log(iterator);
}

function ordenar(desordered) {
  const ordered = [...desordered];
  for (let i = 0; i < ordered.length; i++) {
    for (let j = 0; j < ordered.length; j++) {
      if (ordered[i] < ordered[j]) {
        const temp = ordered[j];
        ordered[j] = ordered[i];
        ordered[i] = temp;
      }
    }
  }
  return ordered;
}

const ordered = ordenar(nums);
//console.log(ordered);

function ordenar(nums) {
  nums.sort((a, b) => {
    return b - a;
  });
  //console.log(nums);
}

const numeros = () => {
  let numA = parseInt(prompt("mete un número"));
  let numB = parseInt(prompt("mete otro número"));
  let resultado = numA - numB;
  if (resultado > 0) {
    alert(resultado);
  } else {
    alert(resultado * -1);
  }
};
numeros();
