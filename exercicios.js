
/* O custo de um carro novo ao consumidor é a soma do custo de fábrica com o percentual de impostos e lucros da distribuitora (aplicados ao custo de fabricação). Escreva um algoritmo que receba os valores acima citados e calcule e imprima o valor que o consumidor irá pagar nesse carro*/


let custoFabrica = 40000;
let percImpostos = 45/100;
let percDistribuidor = 28/100;
let custoFinal = custoFabrica;

custoFinal += (custoFabrica * percImpostos) + (custoFabrica * percDistribuidor);

console.log(custoFinal);


/* calcular quantos litros de combustível um carro gastou em uma viagem. receber tempo de viagem e velocidade media. apresentar distancia media percorrida e qtos lts de combustível foram gastos*/

/* da pra usar gps e apis pra calcular sozinho o tempo medio e a distância percorrida e qual seria o valor da gasolina*/


let distanciaPercorrida;
let velocidadeMedia= 80;
let tempoViagem= 3;
let combustivelGasto;
let consumoKml = 12;

distanciaPercorrida = velocidadeMedia * tempoViagem;
combustivelGasto = distanciaPercorrida / consumoKml;

console.log(combustivelGasto);