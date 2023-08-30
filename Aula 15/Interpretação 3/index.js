
// Leia o código

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))//false
console.log(minhaFuncao(pessoa, "altura"))//undifield

// a) O que vai ser impresso no console?
/**
 * Que caio não é um beckender
 * e a altura fica sem definição
*/
// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
/**
 * não existe o valor altura então a segunda impressão fica indefinida
 */