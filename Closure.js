const closureEmails = (a) => {
    return (b) => b + a;
    }


//
closureGmail = closureEmails('@gmail.com');
(b) => b + a
closureGmail('mayra');
//IMPRIME: "mayra@gmail.com"
const gmail = '@gmail.com';
`mayra${gmail}`;
//IMPRIME: "mayra@gmail.com"
['mayra','kira','navi'].map((x3) => `${x3}${gmail}`);
//IMPRIME: ["mayra@gmail.com", "kira@gmail.com", "navi@gmail.com"]
['mayra','kira','navi'].map((x3) =>{
return `${x3}${gmail}`});
// (3) ["mayra@gmail.com", "kira@gmail.com", "navi@gmail.com"]
// 0: "mayra@gmail.com"
// 1: "kira@gmail.com"
// 2: "navi@gmail.com"
// length: 3

let x12 = () => {
    let a = 3;
    let x1 = function(){
        console.log(a);
    }
    return x1();
}
undefined
x12();
//VM826:4 3
undefined

for(var i=0; i<3; i++){
    console.log(i)
}
// VM943:2 0
// VM943:2 1
// VM943:2 2
undefined

let ternaryN = (x) => {
    return x || 'Default';
}

//
const array = [0,1,2,3,4]
undefined
array.map((x) => Math.sqrt(x));
//(5) [0, 1, 1.4142135623730951, 1.7320508075688772, 2]
let array2 = array.map((x) => Math.sqrt(x));
undefined
array2
//(5) [0, 1, 1.4142135623730951, 1.7320508075688772, 2]
let sumaValor = array.reduce((x, current) => {
    return x + current;
    }, 0)
    //undefined
    sumaValor
    //10
