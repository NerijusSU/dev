/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator() {

  this.read = function () {
    this.a = +prompt('Pirmas skaičius?', 0);
    this.b = +prompt('Antras skaičius?', 0);
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.subtraction = function () {
    return this.a - this.b;
  };

  this.multiplication = function () {
    return this.a * this.b;
  };
  this.division = function () {
    return this.a /= this.b;
  };
}

let calculator = new Calculator();
calculator.read();

console.log("Suma = " + calculator.sum());
console.log("Skirtumas = " + calculator.subtraction());
console.log("Daugyba = " + calculator.multiplication());
console.log("Dalyba = " + calculator.division());