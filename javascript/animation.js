// animação da img "sobre"

const sobreImg = document.querySelector('.sobre-img');
const sobreTexto = document.querySelector('.sobre-texto');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

observer.observe(sobreImg);
observer.observe(sobreTexto);

// animação da texto "sobre"