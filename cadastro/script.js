let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){ // se o valor for valido
    if(Number(n) >= 1 && Number(n) <= 100)
    {
        return true
    }else{
        return false
    }

}

function inLista(n, l){  // se o valor adicionado ja existe
    if(l.indexOf(Number(n)) != -1 ){
        return true
    }else{
        return false
    }

}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){ 
       valores.push(Number(num.value)) 
       let item = document.createElement('option') //cria item da lista
       item.text = `Valor ${num.value} adicionado.` // adiciona como texto
       lista.appendChild(item) // mostra texto mais valor
       res.innerHTML = ''


    }else{
        window.alert('Valor invalido ou ja encontrado na lista.')
    }
    num.value = ''
    num.focus()

}

function finalizar(){
    if(valores.length == 0){
        window.alert('adicione valor')
    }else
    {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]//o valor maior e o menor é o primeiro inserido
        let soma = 0
        let media = 0
        
        for(let pos in valores)
        {
            soma += valores[pos]

            if(valores[pos]> maior) // testa o maior valor adicionado em relação ao primeiro
            maior = valores[pos]
            if(valores[pos]< menor) // testa o menor valor em relação ao primeiro
            menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados.</p>`
        res.innerHTML += `<p>O  maior valor é ${maior}.</p>`
        res.innerHTML += `<p>O menor valor é ${menor}.</p>`
        res.innerHTML += `<p>A soma  dos valores é ${soma}.</p>`
        res.innerHTML += `<p>A media dos valores é ${media}</p>`
    }
}