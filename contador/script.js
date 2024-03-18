function contar(){

        let ini = document.getElementById('txti')
        let fim = document.getElementById('txtf')
        let passo = document.getElementById('txtp')
        let res = document.getElementById('res')

        if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0)
        {
            res.innerHTML = 'Impossivel contar'
        }else{
            res.innerHTML = 'contando: <br>' //resultado do click no botão 
            let i = Number(ini.value)
            let f = Number(fim.value)
            let p = Number(passo.value)
            if(p <= 0 )
            {
                window.alert('passo invalido, consderando passo 1')
                p = 1
            }
            //contagem crescente
            if(i<f){
            for(let c = i; c <= f; c += p)
            {
                res.innerHTML += `${c} \u{270D}` //colocar resultado do contar mais emog
            }
            
            //contagem decrecente
            }else{
                for(let c = i; c >= f; c -= p)
                {
                    res.innerHTML += `${c} \u{270D}`
                }
                
            }
            res.innerHTML += `\u{270D}`
            
        }
}