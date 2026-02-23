
document.addEventListener('DOMContentLoaded', () => {
  const btnCompartir = document.getElementById('btnCompartir');

  btnCompartir.addEventListener('click', async () => {
    const urlCV = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'CV Grover Hernani Medina',
          text: 'Echa un vistazo a mi perfil profesional como Programador Jr.',
          url: urlCV
        });
        console.log('CV compartido exitosamente');
      } catch (error) {
        console.log('Error al compartir o el usuario canceló:', error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(urlCV);
        alert('¡Enlace copiado al portapapeles! Ya puedes pegarlo y compartirlo.');
      } catch (err) {
        alert('No se pudo copiar el enlace. Por favor, copia la URL del navegador.');
      }
    }
  });
});