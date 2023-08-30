const nome1 = prompt('Qual é seu nome?')
const cor = prompt('Qual sua cor favorita?')
console.log('A cor favorita do '+nome1+' é '+cor+'.')
console.log(`A cor favorita do ${nome1} é ${cor} .`) 
//a segunda linha usa crase pra funcionar

const nome = 'Yago'
console.log(nome.length) //imprime o numero de caracteres da string
const nomeMin = nome.toLowerCase()
console.log(nomeMin)
const nomeMai = nome.toUpperCase()
console.log(nomeMai)

console.log(nome.includes('Yago'))
console.log(nome.includes('Jonas'))

const frase = 'Eu não amo a nova versão do Java'
console.log(frase)
const novaFrase = frase.replaceAll('nova','velha')
console.log(novaFrase)
const novaFrase2 = frase.replaceAll('não','')
console.log(novaFrase2)

const userFrase = prompt('Escreva uma frase')
const fraseUpper = userFrase.toUpperCase()
const fraseI = userFrase.replaceAll('o','i')
console.log(userFrase)
console.log(fraseUpper)
console.log(fraseI)

//arrays
const listaDeCompras = ['batata', 'alface', 'queijo']
const listaDeNumerosMega = [2,13,26,35,41,60]
const arrayMisto = ['macaco', 12, true]

const segundoItem = listaDeCompras[2] //0,1,2 (queijo)
console.log(segundoItem)

const racas = ['poodle','yorkshire','bulldog','husky','bull terrier']
const numero = prompt('Escolha um número de 0 a 4')
console.log(racas[numero])

const totoEvo = ['totodile','krokorok','krookodile']
console.log(totoEvo.length)

console.log(totoEvo.includes('Pikachu'))
console.log(totoEvo.includes('totodile'))

totoEvo.push('mega Krookodile')
console.log(totoEvo.length)

totoEvo.pop()
console.log(totoEvo.length)

totoEvo.splice(1,2) //remove dois elemtos a partir da posição 1
console.log(totoEvo.length)

const numeros = [1,2,3,4,5,6]
console.log(numeros.length)
console.log(numeros)

numeros.push(7)
console.log(numeros.length)
console.log(numeros)

numeros.splice(3,2)
console.log(numeros.length)
console.log(numeros)

