/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

document.getElementById('kgInput').addEventListener('input',
    function (e) {
        let kgs = e.target.value;
        document.getElementById('submitbtn').addEventListener('click', function () {
            document.getElementById('lb').innerHTML = (kgs * 2.20462);
            document.getElementById('grams').innerHTML = (kgs * 1000);
            document.getElementById('oz').innerHTML = (kgs * 35.274);
        });
    });