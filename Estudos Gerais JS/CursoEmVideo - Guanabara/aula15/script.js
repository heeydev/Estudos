let valores = [8, 1, 7, 4, 2, 9]

valores.push(3)
valores.push(5)
valores.push(6)
valores.push(0)
valores.push(-1)

valores.sort()

console.log(valores)

// for (let index = 0; index < valores.length; index++) {
//     console.log(`A posição ${index} tem o valor ${valores[index]}`)    
// }

// for (let index in valores) {
//     console.log(`A posição ${index} tem o valor ${valores[index]}`) 
// }

let posicao = valores.indexOf(7)

console.log(`O número 7 está na posição ${posicao}`)