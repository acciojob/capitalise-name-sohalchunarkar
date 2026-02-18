//your JS code here. If required.
const input = document.getElementById("name");

input.addEventListener("blur", function () {
    input.value = input.value.toUpperCase();
});