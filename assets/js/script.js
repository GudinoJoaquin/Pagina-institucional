document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los botones de especialidad
    const specialtyButtons = document.querySelectorAll('.button-presentation');

    // Iterar sobre cada botón y agregar evento de clic
    specialtyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Obtener la especialidad desde la clase del botón
            const specialty = button.classList[1]; // La segunda clase del botón es la especialidad

            // Obtener la sección correspondiente a la especialidad
            const section = document.getElementById(specialty);

            // Obtener la posición actual del elemento
            const sectionRect = section.getBoundingClientRect();

            // Calcular la posición de desplazamiento restando un pequeño valor al rectángulo de la sección
            const offset = sectionRect.top - 300; // Restamos 50 píxeles

            // Desplazarse hacia la sección correspondiente con el nuevo offset
            window.scrollBy({ top: offset, behavior: 'smooth' });
        });
    });
});
