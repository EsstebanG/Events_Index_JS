// START.
document.addEventListener("DOMContentLoaded", () => {
  const submitLinks = document.querySelectorAll('[type="submit"]');

  submitLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });

  const loginLink = document.getElementById('btn-login');
  if (loginLink) {
    loginLink.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = "/settings/pages/login.html";
    });
  }
});

// INFORMATION BUTTON CODE.
const infoButtons = document.querySelectorAll('.info-btn');

infoButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    const title = button.getAttribute('data-title');
    const details = button.getAttribute('data-details');

    Swal.fire({
      title: title,
      text: details,
      icon: 'info',
      confirmButtonText: 'Cerrar',
      customClass: {
        confirmButton: 'sw-button'
      },
      buttonsStyling: false 
    });
  });
});


// CAROUSEL CODE.
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showNextSlide() {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add('active');
}

// Cambiar imagen cada 2 segundos
setInterval(showNextSlide, 2000);