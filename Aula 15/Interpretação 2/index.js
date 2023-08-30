
// Leia o código

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = { ...cachorro, nome: "Juba" }

const tartaruga = { ...gato, nome: gato.nome.replaceAll("a", "o") }

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// a) O que vai ser impresso no console?
/** será impresso o todos os dados sobre o cachorro e em seguida mudar a variavel para gato e mudar o nome
 * para "Juba"
 * em seguida o gato será substituido por outra variavel chamada tartaruga que irá imprimir o nome do gato e em seguida
 * trocar todas as letras a por o ficando "Jubo"
 * */

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
/**
 * Copia o objeto ou array inteiro e se tiver o mesmo cnome e substituida pelos novos dados do clone
 */