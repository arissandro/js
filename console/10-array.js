let valore = [8,1,7,4,2,9]

for(let pos = 0; pos<valore.length; pos++)
{
    valore.sort()
    console.log(`A Posição ${pos} tem o valor : ${valore[pos]}`)
} 


for(let pos in valore){
    console.log(`A posição ${pos} tem o valor: ${valore[pos]}`)
}

