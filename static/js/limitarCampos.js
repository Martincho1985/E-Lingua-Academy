//Limites de completar campos
function limitarInput(inputField, maxLength) {
if (inputField.value.length > maxLength) {
    inputField.value = inputField.value.slice(0, maxLength);
}
}
                