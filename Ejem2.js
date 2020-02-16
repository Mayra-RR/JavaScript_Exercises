const newarray=[2,3,4,5];
let multValor = newarray.reduce((x,current) => {
    return x*current;
},1)
console.log(multValor);

const objetoC = {
    x:2,
    y:3,
    z:4,
}
console.log(Object.values(objetoC));
console.log(Object.keys(objetoC));

console.log(Object.keys(objetoC).map((x) => x == "x" ? "Hola":objetoC[x]));
console.log(Object.values(objetoC));

Array.from(newarray);
let pls = Array.from(newarray);
console.log(pls);

const validateFalsy = (x) => {
    return !x ? "falsy" : "truthly";
}
console.log(validateFalsy(0));
console.log(validateFalsy(!null));
console.log(validateFalsy([]));


function crearSuma(a){
    return function(b){
        return a+b;
    }
}
var sumar5 = crearSuma(5);
var sumar10 = crearSuma(10);
console.log(sumar5(1));
console.log(sumar10(5));
