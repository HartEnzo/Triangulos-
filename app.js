const prompt = require('prompt-sync')();
let triangulo =[]
while(true) {
    console.log(triangulo);
    let a = +prompt('Lado A: ')
    let b = +prompt('Lado B: ')
    let c = +prompt('lado C: ')

    if (a > 0 && b > 0 && c > 0 && a + b > c && b + c > a && a + c > b) {
        
        let tipo
        
        if(a == b && b == c) {
            let tipo = "Equilatero"
        } else if (a == b || b == c || a == c) {
            tipo = "Isoceles"
        } else {
            tipo = "Escaleno"
        }
     triangulo.push({a, b, c, tipo});
    }else {
        console.log("Valores invalidos!")
    }
}