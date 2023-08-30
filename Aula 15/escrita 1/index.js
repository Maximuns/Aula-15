
/**
 * 
 * Resolva os passos a seguir
 * 
 * a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 
 * 
 * // Exemplo de entrada
 * const pessoa = {
 *    nome: "Vitor Hugo", 
 *    apelidos: [ "Vitinho", "Vitão", "Vit" ]
 * }
 * 
 * // Exemplo de saída
 * // "Eu sou Vitor, mas pode me chamar de: Vitinho, Vitão ou Vit"
 * 
 * Dica: não se esqueça de chamar a função passando o objeto que você criou como argumento, senão seu código não será executado!
 * 
 * Agora, usando o operador "spread", crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto.
 * 
**/
    const pessoa = {
        nome:"Eduardo",
        apelidos:['Cadu', 'Léo lins falsificado', 'Alemão'],
      
        }
    
    function impressora(objeto){
        let resultado = `Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]},`
        return resultado

    }

    console.log(impressora(pessoa))
    const pessoa2 = {
        ...pessoa,
        apelidos:["branca de neve","Loira do Banheiro","Geriatrico"]

    }

    console.log(impressora(pessoa2))
