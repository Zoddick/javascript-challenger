//Crie uma função que receba uma string e retorne a mesma string, mas com todas as letras em maiúsculas.
const toUpperCase = (str) => { 
   return str.toUpperCase(); // aqui retorna a variavel str usando a função toUpperCase, que fica responsavel por deixar as letras maiusculas.
  };


   var strin = "agronorte"; // aqui crio uma variavel com a palavra agronorte
   var maiuscula = toUpperCase(strin); // e aqui crio outra variavel pra receber o retorno do minha função, usando a varivael strin como parametro
  
  
//Escreva uma função que recebe duas strings como argumento e concatena-as em uma única string com um espaço entre elas.
const concatStrings = (str1, str2) => {
  return str1 + str2; // concatenando

};
var strin1 = "Agronorte "; // coloquei um espaço no final da palavra pra sair com o espaço. Espero que voces considerem como correto.
var strin2 = "agronegocios";
var conca = concatStrings(strin1,strin2); // fazendo uso da função, com a mesma lógica da de cima

//Crie uma função que recebe uma string como argumento e retorna o número de caracteres nessa string.
const numberString = (str) => {

  return str.length; // usando a função length para obter a quantidade de caractere passado no parametro.
};
var qtd = "agronorte";
var qtdcaract = numberString (qtd);

//Crie uma função que receba uma palavra, e uma frase. Você deve verificar se existe esta palavra nesta frase e retornar true ou false.
const existKeyword = (keyword, str) => {
var verificar = str.includes(keyword);
return verificar;
};
var palavra = "mercado";
var frase = "Agronorte, referência no mercado do agronegócio";
var verificando = existKeyword(palavra,frase);

//Escreva uma função que recebe um array de números como argumento e retorna a soma de todos os números no array.
  const sumAllItemsInArray = (arr) => {
    var n = arr.length;
    var soma = 0;
    for (var i = 0; i < n; i++){
     soma  =  arr[i] + soma;
    }
    return soma;
  };
  var vetor = [20,50,10];
  var somando = sumAllItemsInArray (vetor);
 

//Você receberá uma lista com nomes de usuarios, verifique se um usuario existe neste array e retorne true ou false.
const verifyUserInArray = (strArr, str) => {
  var verificar = strArr.includes(str);
return verificar;
};
var usuarios = ["Matheus","Larissa","Wellinton"];
var procurado = "Matheus";
var verificando = verifyUserInArray(usuarios, procurado);


//Escreva uma função que recebe dois números como argumento e retorna a soma deles.
const sumNumber = (num1, num2) => {
return num1 + num2;

};
var n1 = 34;
var n2 = 40;
var somado = sumNumber(n1,n2);

//Crie uma função que recebe um número como argumento e verifica se ele é par ou ímpar retornando  a string "par" ou "impar"
const verifyNumberIsPairOrOdd = (num) => {
  var par = "par";
  var impar = "impar";
  if (num % 2 == 0){
return par;
  }
  else {
    return impar;
  }
};
var numero = 4;
var parOuImpar = verifyNumberIsPairOrOdd (numero);

module.exports = {
  toUpperCase,
  concatStrings,
  numberString,
  existKeyword,
  sumAllItemsInArray,
  verifyUserInArray,
  sumNumber,
  verifyNumberIsPairOrOdd,
};
