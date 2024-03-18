function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0)
    {

        window.alert('erro, digite um numero')

    }else{
        let n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while(c <= 10){
        var item = document.createElement('option') //criando 'Element' dentro do select
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` // valor da taboada ''' não nescessario pra js so pra php
            tab.appendChild(item)
            c++
        }
    }
    


}