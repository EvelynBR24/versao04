// animação de entrada
const sobreImg = document.querySelector('.sobre-img');
const sobreTexto = document.querySelector('.sobre-texto');
const banner = document.querySelector('.banner');

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
observer.observe(banner);

// serviços animação

const servicos = document.querySelectorAll('.servico li');

const obse = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('animate');
        obse.unobserve(entry.target); // Parar de observar após a animação
      }, index * 300); // Adiciona um delay incremental de 300ms para cada item
    }
  });
}, { threshold: 0.5 }); // Animação somente quando 100% visível

// Observa cada serviço
servicos.forEach(servico => {
  obse.observe(servico);
});
