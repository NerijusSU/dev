/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

  fetch("./cars.json")
  .then(function (response) {
    return response;
  })
  .then(function (data) {
    return cars.json();
  })
  .then(function (Normal) {
    const html = Normal.map(
      (data) => `<div class="card"> 
        <h4> ${data.brand}</h4>
        <h3> ${data.model}</h3>
    </div>`
    );
    document.getElementById("brand").innerHTML = html;
  })
  .catch(function (err) {
    console.log("Fetch problem show: " + err.message);
  });