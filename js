/* ============================================================
   VENUS STUDIO VEPPUR — main.js
   Scroll animations, sticky header, mobile nav, interactions
   ============================================================ */
'use strict';
// ─── Sticky Header ────────────────────────────────────
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });
// ─── Scroll Reveal ────────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver(
  (entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);
revealEls.forEach(el => revealObs.observe(el));
// ─── Mobile Navigation ────────────────────────────────
const mobileNav    = document.getElementById('mobile-nav');
const mobileToggle = document.getElementById('mobile-toggle-btn');
const mobileClose  = document.getElementById('mobile-nav-close');
const mobLinks     = document.querySelectorAll('.mob-link');
function openNav() {
  mobileNav.classList.add('open');
  mobileToggle.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}
function closeNav() {
  mobileNav.classList.remove('open');
  mobileToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}
if (mobileToggle) mobileToggle.addEventListener('click', openNav);
if (mobileClose)  mobileClose.addEventListener('click', closeNav);
mobLinks.forEach(l => l.addEventListener('click', closeNav));
// ─── Smooth Anchor Scroll ─────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
// ─── Product card hover glow ──────────────────────────
document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(255,215,0,0.07), rgba(34,26,0,0.85) 60%)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.background = '';
  });
});
// ─── Feature items stagger ────────────────────────────
document.querySelectorAll('.feature-item').forEach((item, i) => {
  item.style.transitionDelay = (i * 0.08) + 's';
  item.classList.add('reveal');
  revealObs.observe(item);
});
// ─── WhatsApp button tracking ─────────────────────────
// All WA buttons log a friendly message on click
document.querySelectorAll('[href*="wa.me"]').forEach(btn => {
  btn.addEventListener('click', () => {
    console.log('%c✦ Venus Studio — WhatsApp Order initiated!', 'color: #25D366; font-size: 1rem; font-weight: bold;');
  });
});
// ─── FAQ Accordion ────────────────────────────────────
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item    = btn.closest('.faq-item');
    const isOpen  = item.classList.contains('open');
    // Close all
    document.querySelectorAll('.faq-item.open').forEach(openItem => {
      openItem.classList.remove('open');
      openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });
    // Toggle clicked
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});
// Open first FAQ by default
const firstFaq = document.querySelector('.faq-item');
if (firstFaq) {
  firstFaq.classList.add('open');
  firstFaq.querySelector('.faq-question').setAttribute('aria-expanded', 'true');
}
// ─── Live Countdown Timer ─────────────────────────────
// Sets a 24-hour countdown from midnight tonight
function getSecondsUntilMidnight() {
  const now      = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  return Math.floor((midnight - now) / 1000);
}
let totalSeconds = getSecondsUntilMidnight();
const countdownSets = [
  { h: 'cd1-h', m: 'cd1-m', s: 'cd1-s' },
  { h: 'cd2-h', m: 'cd2-m', s: 'cd2-s' },
  { h: 'cd3-h', m: 'cd3-m', s: 'cd3-s' },
];
function updateCountdowns() {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  const pad = n => String(n).padStart(2, '0');
  countdownSets.forEach(set => {
    const elH = document.getElementById(set.h);
    const elM = document.getElementById(set.m);
    const elS = document.getElementById(set.s);
    if (elH) elH.textContent = pad(h);
    if (elM) elM.textContent = pad(m);
    if (elS) elS.textContent = pad(s);
  });
  if (totalSeconds > 0) {
    totalSeconds--;
  } else {
    totalSeconds = 86400; // reset to 24h
  }
}
updateCountdowns();
setInterval(updateCountdowns, 1000);
// ─── Booking Form ─────────────────────────────────────
const bookingForm    = document.getElementById('booking-form');
const bookingSuccess = document.getElementById('booking-success');
const bookSubmitBtn  = document.getElementById('book-submit-btn');
if (bookingForm) {
  bookingForm.addEventListener('submit', e => {
    e.preventDefault();
    const name    = document.getElementById('book-name').value.trim();
    const phone   = document.getElementById('book-phone').value.trim();
    const product = document.getElementById('book-product').value;
    // Highlight empty required fields
    let hasError = false;
    [{ id: 'book-name', val: name }, { id: 'book-phone', val: phone }].forEach(({ id, val }) => {
      const el = document.getElementById(id);
      if (!val) {
        el.style.borderColor = 'rgba(239,68,68,0.7)';
        el.style.boxShadow   = '0 0 0 3px rgba(239,68,68,0.12)';
        el.addEventListener('input', () => {
          el.style.borderColor = '';
          el.style.boxShadow   = '';
        }, { once: true });
        hasError = true;
      }
    });
    if (!product) {
      const sel = document.getElementById('book-product');
      sel.style.borderColor = 'rgba(239,68,68,0.7)';
      sel.style.boxShadow   = '0 0 0 3px rgba(239,68,68,0.12)';
      sel.addEventListener('change', () => {
        sel.style.borderColor = '';
        sel.style.boxShadow   = '';
      }, { once: true });
      hasError = true;
    }
    if (hasError) return;
    // Simulate sending
    bookSubmitBtn.textContent = 'Sending…';
    bookSubmitBtn.style.opacity = '0.7';
    bookSubmitBtn.disabled = true;
    setTimeout(() => {
      bookingForm.style.display   = 'none';
      bookingSuccess.classList.add('show');
      // Optionally auto-open WhatsApp with details
      const qty      = document.getElementById('book-qty').value || '1';
      const delivery = document.getElementById('book-delivery').value || 'pickup';
      const notes    = document.getElementById('book-notes').value.trim();
      const msg = encodeURIComponent(
        `Hi Venus Studio! I want to place an order.\n\nName: ${name}\nPhone: ${phone}\nProduct: ${product}\nQty: ${qty}\nDelivery: ${delivery}${notes ? '\nNotes: ' + notes : ''}`
      );
      // Store WA link in the success button (already set in HTML, this overrides)
      const waLink = bookingSuccess.querySelector('a[href*="wa.me"]');
      if (waLink) waLink.href = `https://wa.me/919994494537?text=${msg}`;
    }, 1200);
  });
}
// ─── Console Brand ────────────────────────────────────
console.log('%c✦ Venus Studio Veppur', 'font-size: 1.8rem; font-weight: 900; background: linear-gradient(135deg, #FFD700, #F5A623); -webkit-background-clip: text; -webkit-text-fill-color: transparent; padding: 6px 0;');
console.log('%cவீனஸ் ஸ்டுடியோ | Custom Photo Gifts | 99944 94537', 'font-size: 0.9rem; color: #AE9D6F;');
