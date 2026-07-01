// Cuppon - interacciones básicas
document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('.form-section form');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      alert('¡Gracias por suscribirte! Te avisaremos de nuevos descuentos.');
      form.reset();
    });
  }
});
