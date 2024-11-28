function purchaseRoutine(routineName) {
    const whatsappNumber = "+5491136919981";
    const message = `Hola Agus, compré la rutina ${routineName} y quiero comenzar.`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappLink;
}

// Validación del formulario
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;
    const whatsapp = document.getElementById("whatsapp").value;

    if (name && lastname && whatsapp) {
        alert("Formulario enviado correctamente.");
    } else {
        alert("Por favor, completa todos los campos.");
    }
});
