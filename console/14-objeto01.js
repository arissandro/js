let amigo = {nome: 'jose', sexo: 'm', peso: 12.3, engorda(p=0){
    console.log('engorda')
    this.peso +=p
}}

amigo.engorda(2)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)