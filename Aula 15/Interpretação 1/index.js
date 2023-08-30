
// Leia o código

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [ "Matheus Nachtergaele", "Selton Mello", "Denise Fraga", "Virginia Cavendish" ], 
	transmissoesHoje: [
		{ canal: "Telecine", horario: "21h" }, 
		{ canal: "Canal Brasil", horario: "19h" }, 
		{ canal: "Globo", horario: "14h" }
	]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

// O que vai ser impresso no console?
 
/**será impresso o primeiro ator do elenco do filme 
 * será impresso todo o elenco de atores e tirará um ator e será impresso apenas 3 nomes
 * será impresso que ser trasmitido o canal "Globo "no horario 14h
 **/