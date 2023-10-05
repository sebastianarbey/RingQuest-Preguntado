  // Función para desplazarse al final de la página
  function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth' // Para un desplazamiento suave
    });
}

// Agregar un evento de clic al botón
const scrollButton = document.getElementById('scrollButton');
scrollButton.addEventListener('click', scrollToBottom);

// Mostrar el botón cuando se hace scroll
window.addEventListener('scroll', function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = 'block';
     
    }
});