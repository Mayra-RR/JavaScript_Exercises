var x = {
    prop: 35,
    f: function()  {
    return this.prop;
    },

a: () => {
    return x.prop;
},
}
x.newProp = 3;

console.log(x.f());
console.log(x.a());

//
var x = {
    valor1: 35,
    valor2: 50,
    valor3: 20,
    valor4: " - Hola"
  };
  var y = { ...x };
  console.log(Object.keys(y));
  
  if (!Array.prototype.hasOwnProperty("adding")) {
    Object.defineProperty(Array.prototype, "adding", {
      value: function() {
        return this.reduce((current, p) => current + p, 0);
      }
    });
  }
  const newValues = [3, 2, 1];
  console.log(newValues.adding());

//

  var y = { ...x };
  var y = x2
  console.log(Object.keys(y));
  
  if (!Array.prototype.hasOwnProperty("adding")) {
    Object.defineProperty(Array.prototype, "adding", {
      value: function() {
        return this.reduce((current, p) => current + p, 0);
      }
    });
  }
  const newValues = [3, 2, 1];
  console.log(newValues.adding());
