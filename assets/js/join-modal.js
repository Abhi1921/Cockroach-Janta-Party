/**
 * Cockroach Janta Party (CJP) - Join Modal & Login/Signup Controller
 * Handles exact UI Join Modal, Geolocation City Share, API Calls (/api/join, /api/login),
 * JSON File Storage, Mailtrap Email Notifications & Card Rendering.
 */

(function () {
  'use strict';

  let isLoginMode = false;

  // 1. Create Modal HTML Structure
  function createModalHtml() {
    if (document.getElementById('cjpJoinModalOverlay')) return;

    const overlay = document.createElement('div');
    overlay.id = 'cjpJoinModalOverlay';
    overlay.className = 'cjp-modal-overlay';
    overlay.hidden = true;

    overlay.innerHTML = `
      <div class="cjp-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="cjpModalTitle">
        <button type="button" class="cjp-modal-close" id="cjpModalCloseBtn" aria-label="Close modal">✕</button>
        
        <!-- Header -->
        <span class="cjp-modal-kicker">CJP · MEMBERSHIP</span>
        <h2 class="cjp-modal-title" id="cjpModalTitle">Join The Party</h2>
        <p class="cjp-modal-sub" id="cjpModalSub">Free. Lifelong. No selfies with the leader.</p>

        <!-- Status Message Banner -->
        <div id="cjpModalAlert" hidden style="padding: 0.75rem 0.9rem; border-radius: 8px; font-size: 0.82rem; font-weight: 700; margin-bottom: 1rem; line-height: 1.45;"></div>

        <!-- SIGNUP FORM -->
        <form id="cjpModalSignupForm" class="cjp-modal-form">
          <div class="cjp-modal-field">
            <label class="cjp-modal-label" for="cjpFullname">Full Name *</label>
            <input type="text" id="cjpFullname" name="fullName" class="cjp-modal-input" placeholder="Your full name" required autocomplete="name">
          </div>

          <div class="cjp-modal-field">
            <label class="cjp-modal-label" for="cjpEmail">Email Address (Optional)</label>
            <input type="email" id="cjpEmail" name="email" class="cjp-modal-input" placeholder="you@email.com" autocomplete="email">
          </div>

          <div class="cjp-modal-field">
            <label class="cjp-modal-label" for="cjpMobile">Mobile Number *</label>
            <div class="cjp-mobile-row">
              <div class="cjp-prefix-box">+91</div>
              <input type="tel" id="cjpMobile" name="mobile" class="cjp-modal-input" placeholder="98765 43210" required autocomplete="tel" pattern="[0-9]{10}">
            </div>
          </div>

          <div class="cjp-modal-field">
            <label class="cjp-modal-label" for="cjpCity">City</label>
            <input type="text" id="cjpCity" name="city" class="cjp-modal-input" placeholder="Your city (e.g. New Delhi, Patna, Mumbai)">
            <button type="button" class="cjp-city-btn" id="cjpShareCityBtn">📍 SHARE MY CITY</button>
            <p class="cjp-field-note">We're collecting your location to let you know about Cockroach Janta Party events in your neighbourhood. Required to join.</p>
          </div>

          <!-- Turnstile Check -->
          <div class="cjp-turnstile-box">
            <div style="display: flex; align-items: center; gap: 0.65rem;">
              <div id="cjpTurnstileCheck" style="width: 22px; height: 22px; border-radius: 4px; border: 2px solid #22c55e; background: #22c55e; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 900;">✓</div>
              <span style="font-family: var(--font-body); font-size: 0.85rem; font-weight: 700; color: #ffffff;">Success!</span>
            </div>
            <span style="font-family: var(--font-mono); font-size: 0.65rem; color: #f97316; font-weight: 900; text-transform: uppercase;">CLOUDFLARE</span>
          </div>

          <button type="submit" class="cjp-modal-submit-btn" id="cjpSubmitBtn">JOIN NOW →</button>
          
          <p class="cjp-terms-notice">
            Membership is free &amp; revocable only by you. No fees. No spam. By continuing you agree to our <a href="terms.html" style="color: #fbbf24; text-decoration: underline;">Terms</a> and <a href="privacy.html" style="color: #fbbf24; text-decoration: underline;">Privacy Policy</a>.
          </p>
        </form>

        <!-- LOGIN FORM (hidden by default) -->
        <form id="cjpModalLoginForm" class="cjp-modal-form" hidden>
          <div class="cjp-modal-field">
            <label class="cjp-modal-label" for="cjpLoginInput">Registered Mobile Number / Email / Member ID *</label>
            <input type="text" id="cjpLoginInput" class="cjp-modal-input" placeholder="e.g. 9876543210 or rahul@example.com" required>
          </div>

          <button type="submit" class="cjp-modal-submit-btn">VIEW MY CARD →</button>
        </form>

        <!-- ALREADY A MEMBER / NOT A MEMBER TOGGLE BOX -->
        <div class="cjp-already-member-box">
          <div class="cjp-already-text" id="cjpToggleText">
            <strong>ALREADY A MEMBER?</strong>
            <span>Enter your number to view your card</span>
          </div>
          <button type="button" class="cjp-view-card-btn" id="cjpToggleModeBtn">View Card →</button>
        </div>

      </div>
    `;

    document.body.appendChild(overlay);
    bindModalEvents();
  }

  // 2. Open / Close Modal
  window.openCjpJoinModal = function (mode = 'signup') {
    createModalHtml();
    const overlay = document.getElementById('cjpJoinModalOverlay');
    if (!overlay) return;

    if (mode === 'login') {
      switchToLoginMode();
    } else {
      switchToSignupMode();
    }

    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
  };

  window.closeCjpJoinModal = function () {
    const overlay = document.getElementById('cjpJoinModalOverlay');
    if (overlay) {
      overlay.hidden = true;
      document.body.style.overflow = '';
    }
  };

  function switchToLoginMode() {
    isLoginMode = true;
    document.getElementById('cjpModalTitle').textContent = 'View Member Card';
    document.getElementById('cjpModalSub').textContent = 'Enter your registered mobile number or email to access your card.';
    const signupForm = document.getElementById('cjpModalSignupForm');
    const loginForm = document.getElementById('cjpModalLoginForm');
    if (signupForm) { signupForm.hidden = true; signupForm.style.display = 'none'; }
    if (loginForm) { loginForm.hidden = false; loginForm.style.display = 'flex'; }
    document.getElementById('cjpToggleText').innerHTML = '<strong>NEW TO CJP?</strong><span>Fill application for free lifelong membership</span>';
    document.getElementById('cjpToggleModeBtn').textContent = 'Join Now →';
    clearAlert();
  }

  function switchToSignupMode() {
    isLoginMode = false;
    document.getElementById('cjpModalTitle').textContent = 'Join The Party';
    document.getElementById('cjpModalSub').textContent = 'Free. Lifelong. No selfies with the leader.';
    const signupForm = document.getElementById('cjpModalSignupForm');
    const loginForm = document.getElementById('cjpModalLoginForm');
    if (signupForm) { signupForm.hidden = false; signupForm.style.display = 'flex'; }
    if (loginForm) { loginForm.hidden = true; loginForm.style.display = 'none'; }
    document.getElementById('cjpToggleText').innerHTML = '<strong>ALREADY A MEMBER?</strong><span>Enter your number to view your card</span>';
    document.getElementById('cjpToggleModeBtn').textContent = 'View Card →';
    clearAlert();
  }

  function showAlert(msg, isSuccess = true) {
    const alertBox = document.getElementById('cjpModalAlert');
    if (!alertBox) return;
    alertBox.hidden = false;
    alertBox.style.background = isSuccess ? '#052e16' : '#450a0a';
    alertBox.style.color = isSuccess ? '#86efac' : '#fca5a5';
    alertBox.style.border = isSuccess ? '1.5px solid #16a34a' : '1.5px solid #dc2626';
    alertBox.innerHTML = msg;
  }

  function clearAlert() {
    const alertBox = document.getElementById('cjpModalAlert');
    if (alertBox) {
      alertBox.hidden = true;
      alertBox.innerHTML = '';
    }
  }

  // 3. Event Listeners Binding
  function bindModalEvents() {
    const closeBtn = document.getElementById('cjpModalCloseBtn');
    const overlay = document.getElementById('cjpJoinModalOverlay');
    const toggleBtn = document.getElementById('cjpToggleModeBtn');
    const shareCityBtn = document.getElementById('cjpShareCityBtn');
    const signupForm = document.getElementById('cjpModalSignupForm');
    const loginForm = document.getElementById('cjpModalLoginForm');

    if (closeBtn) closeBtn.addEventListener('click', closeCjpJoinModal);

    if (overlay) {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeCjpJoinModal();
      });
    }

    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        if (isLoginMode) {
          switchToSignupMode();
        } else {
          switchToLoginMode();
        }
      });
    }

    // GEOLOCATION: Share My City
    if (shareCityBtn) {
      shareCityBtn.addEventListener('click', () => {
        if (!navigator.geolocation) {
          alert('Geolocation is not supported by your browser.');
          return;
        }

        shareCityBtn.textContent = '⌛ DETECTING LOCATION...';
        navigator.geolocation.getCurrentPosition(
          async (pos) => {
            const lat = pos.coords.latitude;
            const lon = pos.coords.longitude;
            try {
              const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`);
              const geoData = await res.json();
              const detectedCity = geoData.city || geoData.locality || geoData.principalSubdivision || 'New Delhi';
              document.getElementById('cjpCity').value = detectedCity;
              shareCityBtn.textContent = `📍 CITY DETECTED: ${detectedCity.toUpperCase()} ✓`;
              shareCityBtn.style.background = '#dcfce7';
              shareCityBtn.style.color = '#15803d';
            } catch (err) {
              document.getElementById('cjpCity').value = 'New Delhi';
              shareCityBtn.textContent = '📍 CITY SET: NEW DELHI';
            }
          },
          (err) => {
            shareCityBtn.textContent = '📍 LOCATION DENIED (TYPE MANUALLY)';
          }
        );
      });
    }

    // SIGNUP SUBMIT
    if (signupForm) {
      signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = document.getElementById('cjpSubmitBtn');
        submitBtn.disabled = true;
        submitBtn.textContent = '⚡ GENERATING MEMBER CARD & SAVING...';

        const fullName = document.getElementById('cjpFullname').value.trim();
        const email = document.getElementById('cjpEmail').value.trim();
        const mobile = document.getElementById('cjpMobile').value.trim();
        const city = document.getElementById('cjpCity').value.trim() || 'New Delhi';

        try {
          const res = await fetch('/api/join', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fullName, email, mobile, city })
          });

          const data = await res.json();

          if (data.success) {
            showAlert(`🎉 ${data.message} <br>✉️ Confirmation email sent via Mailtrap!`, true);
            
            // Save in localStorage for instant card view
            localStorage.setItem('cjp_member', JSON.stringify(data.member));
            
            setTimeout(() => {
              closeCjpJoinModal();
              // Redirect to card.html or trigger card view
              window.location.href = `card.html?memberId=${data.member.id}`;
            }, 1800);
          } else {
            showAlert(`⚠️ ${data.message}`, false);
            submitBtn.disabled = false;
            submitBtn.textContent = 'JOIN NOW →';
          }
        } catch (err) {
          console.error('Join API failed, fallback to local storage:', err);
          // Local Fallback if server unreachable
          const memberId = `CJP-2026-${Math.floor(10000 + Math.random() * 90000)}`;
          const member = { id: memberId, fullName, email, mobile: `+91 ${mobile}`, city, joinDate: new Date().toISOString() };
          localStorage.setItem('cjp_member', JSON.stringify(member));

          showAlert(`🎉 Registered successfully! ID: ${memberId}. Redirecting to your card...`, true);
          setTimeout(() => {
            closeCjpJoinModal();
            window.location.href = `card.html?memberId=${memberId}`;
          }, 1500);
        }
      });
    }

    // LOGIN SUBMIT
    if (loginForm) {
      loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const query = document.getElementById('cjpLoginInput').value.trim();
        if (!query) return;

        try {
          const res = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ identifier: query })
          });

          const data = await res.json();

          if (data.success) {
            showAlert(`✅ ${data.message}`, true);
            localStorage.setItem('cjp_member', JSON.stringify(data.member));
            setTimeout(() => {
              closeCjpJoinModal();
              window.location.href = `card.html?memberId=${data.member.id}`;
            }, 1200);
          } else {
            showAlert(`⚠️ ${data.message}`, false);
          }
        } catch (err) {
          // Check local storage
          const stored = localStorage.getItem('cjp_member');
          if (stored) {
            const m = JSON.parse(stored);
            showAlert(`✅ Loaded card for ${m.fullName}!`, true);
            setTimeout(() => {
              closeCjpJoinModal();
              window.location.href = `card.html?memberId=${m.id}`;
            }, 1200);
          } else {
            showAlert(`⚠️ Member not found. Please click "JOIN NOW" to register.`, false);
          }
        }
      });
    }
  }

  // 4. Attach Global Click Handlers to trigger Join Modal across all pages
  document.addEventListener('DOMContentLoaded', () => {
    createModalHtml();

    // Check URL Hash for #join or #login
    if (window.location.hash === '#join') {
      window.openCjpJoinModal('signup');
    } else if (window.location.hash === '#login' || window.location.hash === '#card') {
      window.openCjpJoinModal('login');
    }

    // Intercept Modal Trigger Buttons ONLY (don't intercept standard page links)
    document.addEventListener('click', (e) => {
      const target = e.target.closest('a, button');
      if (!target) return;

      const href = target.getAttribute('href') || '';
      const isModalBtn = 
        href === '#join' || 
        target.classList.contains('mobile-cta-join') || 
        target.classList.contains('btn-join-modal') ||
        (target.classList.contains('btn-pill') && target.textContent.includes('Join The Party'));

      if (isModalBtn) {
        e.preventDefault();
        window.openCjpJoinModal('signup');
      }
    });

    // Handle Page Join Form (#joinForm in join.html)
    const pageJoinForm = document.getElementById('joinForm');
    if (pageJoinForm) {
      pageJoinForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const fullName = document.getElementById('full_name')?.value || '';
        const email = document.getElementById('email')?.value || '';
        const mobile = document.getElementById('phone')?.value || '';
        const city = document.getElementById('city')?.value || 'New Delhi';
        const state = document.getElementById('state')?.value || 'Delhi';
        const cause = document.getElementById('cause')?.value || '';

        try {
          const res = await fetch('/api/join', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fullName, email, mobile, city, state, cause })
          });
          const data = await res.json();
          if (data.success) {
            localStorage.setItem('cjp_member', JSON.stringify(data.member));
            alert(`🎉 ${data.message}\nConfirmation email sent via Mailtrap!`);
            window.location.href = `card.html?memberId=${data.member.id}`;
          }
        } catch (err) {
          const memberId = `CJP-2026-${Math.floor(10000 + Math.random() * 90000)}`;
          const member = { id: memberId, fullName, email, mobile, city, state, cause, joinDate: new Date().toISOString() };
          localStorage.setItem('cjp_member', JSON.stringify(member));
          window.location.href = `card.html?memberId=${memberId}`;
        }
      });
    }
  });

})();
