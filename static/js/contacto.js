$(document).ready(function () {
    $("#datosForm").submit(function (event) { //se asigna una función que se ejecutará cuando se envíe el formulario
        // Evita el envío del formulario por defecto
        event.preventDefault();

        // Validación por cada campo
        var formValido = true; //se usará para verificar si todos los campos del formulario son válidos.
        $("#datosForm input, #datosForm textarea").each(function () { //se realiza una iteraccion por cada elemento del input
            if (!$(this).val()) { //se verifica si el valor del campo actual (referenciado por $(this)) está vacío.
                alert("Por favor, complete el campo: " + $(this).attr("name"));
                formValido = false;
            }
        });

        // Si todos los campos están completos, puedes enviar el formulario
        if (formValido) {
            Swal.fire({
                title: "Información enviada con éxito.",
                text: "Pronto se pondrán en contacto con usted.",
                icon: "success"
              });
            document.getElementById("datosForm").reset(); //se limpia el formulario si se lo envia con éxito
        }
    });
});