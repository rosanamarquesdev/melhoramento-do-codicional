// lista exercicios - exercicio 7

// leia uma variavel e some 5 caso seja par ou some 8 caso seja impar
//imprimir o resultado dessa operacao
     

// funcao pegando o numero e atualizando o resultado
function somar(){ 
    event.preventDefault(); // para o resultado nao sumir quando acontecer o refresh da pagina

    let num = Number(numero.value); // captura o valor que digitado no input e coloca em uma variavel

    if(num % 2 == 0){ // estrutura condicional para testar se o numero é par
        num = num + 5;
        resultado.innerHTML = num;
    } else {
        num = num + 8;
        resultado.innerHTML = num;
    }
}





