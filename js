/* ============================================================
   VENUS STUDIO VEPPUR — style.css
   Premium Gold & Dark theme for a Tamil photo studio
  50% { box-shadow: 0 4px 20px rgba(37,211,102,0.5), 0 0 0 14px rgba(37,211,102,0); }
}
/* ─── SPECIAL OFFERS ─── */
#offers {
  padding: 7rem 0;
  background: var(--dark-3);
  border-top: 1px solid rgba(255,215,0,0.08);
  position: relative;
  overflow: hidden;
}
#offers::before {
  content: '';
  position: absolute;
  top: -80px; right: -80px;
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(255,215,0,0.06), transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}
.offers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 3.5rem;
}
.offer-card {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid rgba(255,215,0,0.2);
  background: linear-gradient(135deg, var(--card-bg), rgba(10,8,0,0.9));
  padding: 2rem;
  transition: transform 0.4s var(--ease-out), box-shadow 0.4s, border-color 0.4s;
}
.offer-card:hover {
  transform: translateY(-8px);
  border-color: rgba(255,215,0,0.5);
  box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 50px rgba(200,134,10,0.2);
}
.offer-ribbon {
  position: absolute;
  top: 0; right: 0;
  background: linear-gradient(135deg, var(--gold-1), var(--gold-2));
  color: var(--dark-1);
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  padding: 0.35rem 1rem;
  border-bottom-left-radius: var(--radius-sm);
}
.offer-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
  filter: drop-shadow(0 0 12px rgba(255,215,0,0.4));
}
.offer-card h3 {
  margin-bottom: 0.5rem;
  color: var(--gold-1);
}
.offer-card p {
  font-size: 0.9rem;
  margin-bottom: 1.25rem;
  line-height: 1.7;
}
.offer-price-wrap {
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  margin-bottom: 1.5rem;
}
.offer-price-new {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 900;
  background: linear-gradient(135deg, var(--gold-1), var(--gold-2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.offer-price-old {
  font-size: 1rem;
  color: var(--text-dim);
  text-decoration: line-through;
}
.offer-badge {
  background: rgba(239,68,68,0.15);
  border: 1px solid rgba(239,68,68,0.3);
  color: #ef4444;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.2rem 0.6rem;
  border-radius: 99px;
}
.offer-cta {
  display: block;
  text-align: center;
  padding: 0.8rem;
  background: linear-gradient(135deg, var(--gold-1), var(--gold-2));
  color: var(--dark-1);
  font-weight: 700;
  font-size: 0.9rem;
  border-radius: var(--radius-xl);
  text-decoration: none;
  transition: box-shadow 0.3s, transform 0.3s;
}
.offer-cta:hover {
  box-shadow: 0 0 30px var(--gold-glow);
  transform: scale(1.02);
}
.offer-countdown {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-bottom: 1.25rem;
  font-size: 0.8rem;
  color: var(--text-muted);
}
.countdown-unit {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--gold-soft);
  border: 1px solid rgba(255,215,0,0.15);
  border-radius: 6px;
  padding: 0.35rem 0.65rem;
}
.countdown-num {
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  font-weight: 900;
  color: var(--gold-1);
  line-height: 1;
}
.countdown-label {
  font-size: 0.58rem;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.countdown-sep { color: var(--gold-2); font-weight: 700; font-size: 1rem; }
/* ─── REVIEWS ─── */
#reviews {
  padding: 8rem 0;
  background: var(--dark-2);
  border-top: 1px solid rgba(255,215,0,0.06);
}
.reviews-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 4rem;
}
.review-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: var(--radius-md);
  padding: 1.75rem;
  transition: transform 0.4s var(--ease-out), border-color 0.4s, box-shadow 0.4s;
  position: relative;
  backdrop-filter: blur(10px);
}
.review-card:hover {
  transform: translateY(-6px);
  border-color: rgba(255,215,0,0.35);
  box-shadow: 0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(200,134,10,0.12);
}
.review-quote {
  position: absolute;
  top: 1rem; right: 1.25rem;
  font-size: 4rem;
  line-height: 1;
  color: rgba(255,215,0,0.08);
  font-family: 'Playfair Display', serif;
  pointer-events: none;
  user-select: none;
}
.review-stars {
  color: var(--gold-1);
  font-size: 1rem;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  filter: drop-shadow(0 0 4px rgba(255,215,0,0.5));
}
.review-text {
  font-size: 0.93rem;
  color: var(--text-muted);
  line-height: 1.78;
  margin-bottom: 1.5rem;
}
.review-author {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.review-avatar {
  width: 44px; height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--gold-1), var(--gold-3));
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: 1rem;
  color: var(--dark-1);
  flex-shrink: 0;
  box-shadow: 0 0 12px var(--gold-glow);
}
.review-author-info strong {
  display: block;
  font-size: 0.9rem;
  color: var(--off-white);
}
.review-author-info span {
  font-size: 0.75rem;
  color: var(--text-dim);
}
.reviews-summary {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  margin-top: 3.5rem;
  padding: 2rem;
  background: var(--gold-soft);
  border: 1px solid rgba(255,215,0,0.12);
  border-radius: var(--radius-lg);
}
.review-stat-num {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, var(--gold-1), var(--gold-2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: block;
  line-height: 1;
}
.review-stat-label {
  font-size: 0.78rem;
  color: var(--text-muted);
  margin-top: 0.25rem;
}
/* ─── FAQ ─── */
#faq {
  padding: 8rem 0;
  background: var(--dark-1);
}
.faq-list {
  max-width: 780px;
  margin: 3.5rem auto 0;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}
.faq-item {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: border-color 0.3s, box-shadow 0.3s;
}
.faq-item.open {
  border-color: rgba(255,215,0,0.35);
  box-shadow: 0 8px 30px rgba(0,0,0,0.3), 0 0 20px rgba(200,134,10,0.08);
}
.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  color: var(--off-white);
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.4;
  transition: color 0.3s;
}
.faq-item.open .faq-question { color: var(--gold-1); }
.faq-chevron {
  width: 28px; height: 28px;
  border-radius: 50%;
  background: var(--gold-soft);
  border: 1px solid rgba(255,215,0,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 0.75rem;
  color: var(--gold-2);
  transition: transform 0.35s var(--ease-out), background 0.3s;
}
.faq-item.open .faq-chevron {
  transform: rotate(180deg);
  background: linear-gradient(135deg, rgba(255,215,0,0.2), rgba(200,134,10,0.1));
}
.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s var(--ease-out), padding 0.4s;
}
.faq-item.open .faq-answer {
  max-height: 300px;
}
.faq-answer-inner {
  padding: 0 1.5rem 1.4rem;
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.78;
  border-top: 1px solid rgba(255,215,0,0.07);
  padding-top: 1rem;
}
/* ─── BOOKING FORM ─── */
#booking {
  padding: 8rem 0;
  background: var(--dark-2);
  border-top: 1px solid rgba(255,215,0,0.08);
}
.booking-wrapper {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 4rem;
  align-items: start;
}
.booking-info h2 { margin-bottom: 1rem; }
.booking-info p { margin-bottom: 2rem; font-size: 1.05rem; }
.booking-highlights {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.booking-highlight {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  font-size: 0.9rem;
  color: var(--text-muted);
}
.highlight-icon {
  width: 38px; height: 38px;
  border-radius: var(--radius-sm);
  background: var(--gold-soft);
  border: 1px solid rgba(255,215,0,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
}
.booking-form-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: var(--radius-lg);
  padding: 2.5rem;
  backdrop-filter: blur(20px);
}
.booking-form-card h3 {
  margin-bottom: 0.35rem;
  color: var(--gold-1);
}
.booking-form-card > p {
  font-size: 0.85rem;
  color: var(--text-dim);
  margin-bottom: 1.75rem;
}
.form-group { margin-bottom: 1.1rem; }
.form-group label {
  display: block;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 0.45rem;
}
.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,215,0,0.15);
  border-radius: var(--radius-sm);
  padding: 0.82rem 1rem;
  color: var(--off-white);
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s, background 0.3s;
  -webkit-appearance: none;
}
.form-group select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23F5A623' stroke-width='2' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem;
}
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--gold-2);
  box-shadow: 0 0 0 3px rgba(245,166,35,0.12);
  background: rgba(255,215,0,0.03);
}
.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--text-dim);
}
.form-group textarea { min-height: 110px; resize: vertical; }
.form-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.booking-submit {
  width: 100%;
  justify-content: center;
  margin-top: 0.5rem;
  font-size: 1rem;
  padding: 1rem;
}
.booking-success {
  display: none;
  text-align: center;
  padding: 2rem;
}
.booking-success.show {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}
.success-circle {
  width: 70px; height: 70px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--gold-1), var(--gold-2));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  animation: popIn 0.5s var(--ease-spring);
  box-shadow: 0 0 40px var(--gold-glow);
}
@keyframes popIn {
  from { transform: scale(0); opacity: 0; }
  to   { transform: scale(1); opacity: 1; }
}
.booking-success h3 { color: var(--gold-1); }
/* ─── RESPONSIVE ─── */
@media (max-width: 960px) {
  .hero-grid { grid-template-columns: 1fr; }
  .hero-float-card { right: 1rem; }
  .hero-image-wrap { display: none; }
  .contact-grid { grid-template-columns: 1fr; }
  .footer-inner { grid-template-columns: 1fr 1fr; }
  .nav-links { display: none; }
  .mobile-toggle { display: flex; }
  .booking-wrapper { grid-template-columns: 1fr; }
}
@media (max-width: 600px) {
  .wa-banner-inner { grid-template-columns: 1fr; }
  .footer-inner { grid-template-columns: 1fr; }
  .showcase-item:nth-child(1),
  .showcase-item:nth-child(2),
  .showcase-item:nth-child(3),
  .showcase-item:nth-child(4) { grid-column: span 12; }
  .form-row-2 { grid-template-columns: 1fr; }
}
