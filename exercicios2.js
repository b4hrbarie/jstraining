var funcionarios = [
    {nome:"Jacira Jacinta", idade:18},
    {nome:"Júlio Juliao", idade:81},
    {nome:"Judite Jurema", idade:22},
    {nome:"Ibrain Lopes", idade:34},
];

var filterFuncionarioTrintaMais = funcionarios.filter(valor => {
   return valor.idade > 30;
})

var primeiroNomeTrintaMais = filterFuncionarioTrintaMais.map(pessoa => pessoa.nome.split(" ")[0]);

console.log(primeiroNomeTrintaMais);


var equipamentos = [
    {id:1, descricao:"Smartphone", categoria:"eletronico"},
    {id:2, descricao:"Notebook", categoria:"eletronico"},
    {id:3, descricao:"Geladeira", categoria:"eletrodomestico"},
    {id:4, descricao:"Microondas", categoria:"eletrodomestico"},
    {id:5, descricao:"Videogame", categoria:"eletronico"},
    {id:6, descricao:"Fritadeira a ar", categoria:"eletrodomestico"},
];

var filterEletrodomestico = equipamentos.filter(valor => {
    return valor.categoria === "eletrodomestico"
})

console.log(filterEletrodomestico);