var form = document.querySelector("form");
var hasilE = document.querySelector("#hasil");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    var angka1 = parseInt(form.querySelectorAll("input")[0].value);
    var angka2 = parseInt(form.querySelectorAll("input")[1].value);
    var operator = form.querySelector("select").value;

    var hasil = 0;

    if (operator === "+") {
        hasil = angka1 + angka2;
    } else if (operator === "-") {
        hasil = angka1 - angka2;
    } else if (operator === "x") {
        hasil = angka1 * angka2;
    } else if (operator === "/") {
        hasil = angka1 / angka2;
    }

    hasilE.textContent = hasil;
});