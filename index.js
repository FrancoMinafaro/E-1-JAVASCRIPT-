// 1-Numero Par o Impar
let numero;
numero = prompt("Introducir numero E-1")
if(numero % 2 == 0){
    console.log("El numero " + numero + ' ' +" es Par");
}else{
    console.log("El numero" + numero + ' ' +" es Impar")
}
// 2-Numero Mayor o Menor <>
function compararNumeros(num1, num2) {
    if (num1 > num2) {
      console.log(`${num1} es mayor que ${num2}.`);
    } else if (num2 > num1) {
      console.log(`${num2} es mayor que ${num1}.`);
    } else {
      console.log(`${num1} y ${num2} son iguales.`);
    }
  }
  
  const numero1 = 15;
  const numero2 = 15;
  compararNumeros(numero1, numero2);

// 3- Multiplo de 5 
function esMultiploDe5(numero) {
    if (numero % 5 === 0) {
      console.log(`${numero} es múltiplo de 5.`);
    } else {
      console.log(`${numero} no es múltiplo de 5.`);
    }
  }
  
  const ColoqueNumeroPensado = 3;
  esMultiploDe5(ColoqueNumeroPensado);

// 4- 0 hasta el numero deseado
function imprimirNumerosHasta(numero) {
    for (let i = 0; i <= numero; i++) {
      console.log(i);
    }
  }
  

  const ColoqueNumero = 20;
  imprimirNumerosHasta(ColoqueNumero);

  // 5- Palabra y numero 
  function imprimirPalabraNVeces(palabra, cantidad) {
    for (let i = 0; i < cantidad; i++) {
      console.log(palabra);
    }
  }
  
  const palabra2 = "Franco A. Minafaro";
  const cantidad2 = 7;
  imprimirPalabraNVeces(palabra2, cantidad2);

  // 6- Array 
  
  function imprimirArray(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }
  
  const miArray = [1, 2, 3, 4, 5, 6];
  imprimirArray(miArray);

  // 7- Array/2 
  function imprimirArraySinQuintoElemento(array) {
    for (let i = 0; i < array.length; i++) {
      if (i !== 4) {
        console.log(array[i]);
      }
    }
  }
  
  const miArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  imprimirArraySinQuintoElemento(miArray2);

  // 8- Array /3
  function multiplicarArrayPorNumero(array, numero) {
    for (let i = 0; i < array.length; i++) {
      const resultado = array[i] * numero;
      console.log(resultado);
    }
  }
  
  const miArray3 = [1, 2, 3, 4, 5];
  const numeroMultiplicador = 2;
  multiplicarArrayPorNumero(miArray3, numeroMultiplicador);
