/* ===========================
   DOM PRIME BARBEARIA — JS
   =========================== */

/* ===========================
   CUSTOM CURSOR
   =========================== */
const cursor    = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  cursorRing.style.left = rx + 'px';
  cursorRing.style.top  = ry + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

// Cursor hover grow effect
document.querySelectorAll('a, button, .service-card, .testimonial, .pillar').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width  = '20px';
    cursor.style.height = '20px';
    cursorRing.style.width  = '52px';
    cursorRing.style.height = '52px';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width  = '12px';
    cursor.style.height = '12px';
    cursorRing.style.width  = '36px';
    cursorRing.style.height = '36px';
  });
});

/* ===========================
   NAVBAR SCROLL
   =========================== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* ===========================
   SCROLL REVEAL
   =========================== */
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => revealObserver.observe(el));

/* ===========================
   BOOKING FORM
   =========================== */
const btnSubmit = document.getElementById('btnSubmit');

if (btnSubmit) {
  btnSubmit.addEventListener('click', () => {
    const nome     = document.querySelector('input[type="text"]').value.trim();
    const telefone = document.querySelector('input[type="tel"]').value.trim();
    const servico  = document.querySelector('select').value;

    if (!nome || !telefone || !servico) {
      btnSubmit.textContent = '⚠ Preencha todos os campos';
      btnSubmit.style.background = '#8b5e3c';
      btnSubmit.style.color = '#fff';
      setTimeout(resetBtn, 2500);
      return;
    }

    btnSubmit.textContent = '✓ Agendamento Enviado!';
    btnSubmit.style.background = '#4a7c59';
    btnSubmit.style.color = '#fff';
    setTimeout(resetBtn, 3000);
  });
}

function resetBtn() {
  btnSubmit.textContent = 'Confirmar Agendamento';
  btnSubmit.style.background = '';
  btnSubmit.style.color = '';
}

/* ===========================
   SMOOTH ACTIVE NAV LINK
   =========================== */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}`
      ? 'var(--gold-light)'
      : '';
  });
});
