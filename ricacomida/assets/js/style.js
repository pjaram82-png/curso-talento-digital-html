$(document).ready(function () {
    
    // 1. INICIALIZAR LOS TOOLTIPS DE BOOTSTRAP (Requisito obligatorio de Bootstrap 5)
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    // 2. REQUERIMIENTO: Evento click usando Selector de ID para mostrar alerta 
    $('#enviarCorreo').on('click', function () {
        alert('El correo fue enviado correctamente...');
    });

    // 3. REQUERIMIENTO: Selector de Etiqueta y evento 'dblclick' para cambiar a rojo 
    // Usamos el tag 'h2' que corresponde a INGREDIENTES y PREPARACIÓN
    $('h2').on('dblclick', function () {
        $(this).css('color', 'red');
    });

    // 4. REQUERIMIENTO: Selector de Clase y método 'toggle' para aparecer/desaparecer el contenido [cite: 6, 11]
    // Al hacer clic en cualquier título con la clase (.click-card-title), colapsa el texto hermano (.card-text)
    $('.click-card-title').on('click', function () {
        // .next() selecciona el párrafo que le sigue directamente al título dentro de su propia tarjeta
        $(this).next('.card-text').toggle();
    });

});