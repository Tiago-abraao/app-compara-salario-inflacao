import entradaDados from 'readline-sync'

let salarioMinimo = [
    {ano: 2010, salario: 510},
    {ano: 2011, salario: 545},
    {ano: 2012, salario: 622},
    {ano: 2013, salario: 678},
    {ano: 2014, salario: 724},
    {ano: 2015, salario: 788},
    {ano: 2016, salario: 880},
    {ano: 2017, salario: 937},
    {ano: 2018, salario: 954},
    {ano: 2019, salario: 998},
    {ano: 2020, salario: 1045}
];

let inflacao = [
    {ano: 2010, ipca: 6.50},
    {ano: 2011, ipca: 5.91},
    {ano: 2012, ipca: 5.84},
    {ano: 2013, ipca: 5.91},
    {ano: 2014, ipca: 6.41},
    {ano: 2015, ipca: 10.67},
    {ano: 2016, ipca: 6.29},
    {ano: 2017, ipca: 2.95},
    {ano: 2018, ipca: 3.75},
    {ano: 2019, ipca: 4.31},
    {ano: 2020, ipca: 4.52}
]

console.log("Escolha uma das alternativas: \n");
console.log("1 - Listar os salários mínimos de 2010 à 2020");
console.log("2 - Listar o índice IPCA de 2010 a 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA \n");

let opcao = entradaDados.question("Digite o numero da sua escolha: ");

if(opcao == 1) {
    for(let i = 0; i < salarioMinimo.length; i++) {
        let ano = salarioMinimo[i].ano;
        let salario =salarioMinimo[i].salario;
        let salarioFormatado ="R$ " + salario.toFixed(2).replace(".",",")
        

        console.log("\nAno: "+ ano.toString().padStart(25,"."));
        console.log("Salário mínimo: " +salarioFormatado.padStart(19,"."));
} 
}
else if(opcao == 2){
    for(let i = 0; i < inflacao.length; i++) {
        let ano = inflacao[i].ano;
        let ipca = inflacao[i].ipca;
        let ipcaFormatado = ipca.toFixed(2).replace(".",",") + "%"

        console.log("\nAno: " +ano.toString().padStart(25,"."));
        console.log("Inflação IPCA: " +ipcaFormatado.padStart(16,"."));
    }
}
else if(opcao == 3) {
    for(let i = 0; i<salarioMinimo.length; i++) {
        let ano = salarioMinimo[i].ano;
        let salario =salarioMinimo[i].salario;
        let salarioFormatado ="R$ " +salario.toFixed(2).replace(".",",")
        let ipca = inflacao[i].ipca;
        let ipcaFormatado = ipca.toFixed(2).replace(".",",") + "%";
        let salarioAnterior;
        let resultadoSalario = i > 0 ? salarioAnterior = salarioMinimo[i-1].salario : salarioAnterior = salarioMinimo[i].salario;
        let diferenca = salario - salarioAnterior;
        let crescimento = (diferenca/salarioAnterior) * 100;
        let crescimentoFormatado = crescimento.toFixed(2).replace(".",",") + "%";
        

        if(i == 0) { 

        console.log("\nAno: " +ano.toString().padStart(25,"."));
        console.log("Salário mínimo: " +salarioFormatado.padStart(19,"."));
        console.log("Crescimento Salarial: ....-");
        console.log("Inflação IPCA: " +ipcaFormatado.padStart(16,"."));
    }
    else{
    
        console.log("\nAno: " +ano.toString().padStart(25,"."));
        console.log("Salário mínimo: " +salarioFormatado.padStart(19,"."));
        console.log("Crescimento Salarial: " +crescimentoFormatado.padStart(9,"."));
        console.log("Inflação IPCA: " +ipcaFormatado.padStart(16,"."));

    }
} 
 
}

else {
    console.log("\nOpção inválida!");
}