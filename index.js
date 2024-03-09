// 1 

let indece = 13, soma = 0, K = 0;

while (K < indece) {
    K = K + 1;
    soma = soma + K;
}

console.log(soma);

// 2

function fibonacci(n){
    let fib_sequencia = [0, 1];
    while (fib_sequencia[fib_sequencia.length - 1] < n){
        fib_sequencia.push(fib_sequencia[fib_sequencia.length - 1] + fib_sequencia[fib_sequencia.length - 2]);
    }
    if (fib_sequencia.includes(n)){
        return `O número ${n} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${n} não pertence à sequência de Fibonacci.`;
    }
}
console.log(fibonacci(34));

// 3

// a) A sequência está aumentando de 2 em 2. Portanto, o próximo número é 7 + 2 = 9
console.log(7 + 2);

// b) A sequência está dobrando a cada passo. Portanto, o próximo número é 64 * 2 = 128
console.log(64 * 2);

// c) A sequência são os quadrados dos números naturais. Portanto, o próximo número é 7^2 = 49
console.log(Math.pow(7, 2));

// d) A sequência são os quadrados dos números pares. Portanto, o próximo número é 10^2 = 100
console.log(Math.pow(10, 2));

// e) Esta é a sequência de Fibonacci. Portanto, o próximo número é 5 + 8 = 13
console.log(5 + 8);

// f) A sequência está aumentando de 1 em 1 após o número 10. Portanto, o próximo número é 19 + 1 = 20
console.log(19 + 1);

// 4

// Ligue o interruptor 1 e deixe-o ligado por alguns minutos
// Depois de alguns minutos, desligue o interruptor 1 e ligue o interruptor 2
// Vá até a sala das lâmpadas
// Agora, você pode identificar qual interruptor controla cada lâmpada da seguinte maneira
// A lâmpada que está acesa é controlada pelo interruptor 2 (o único que você deixou ligado)
// A lâmpada que está apagada mas quente ao toque é controlada pelo interruptor 1 (você o ligou por tempo suficiente para a lâmpada esquentar, mas depois o desligou)
// A lâmpada que está apagada e fria ao toque é controlada pelo interruptor 3 (você nunca o ligou)

//5

function reverter(nome) {
    let reverso = '';
    for (let i = nome.length - 1; i >= 0; i--) {
        reverso += nome[i];
    }
    return reverso;
}

console.log(reverter('julio'));
