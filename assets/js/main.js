(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  const showToast = (msg, ok = true) => {
    $$(".toast").forEach((t) => t.remove());
    const el = document.createElement("div");
    el.className = `toast ${ok ? "toast-ok" : "toast-error"}`;
    el.setAttribute("role", ok ? "status" : "alert");
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 5000);
  };

  // Close announcement
  const announceBar = $("#announceBar");
  const announceClose = $("#announceClose");
  if (announceClose && announceBar) {
    if (localStorage.getItem("cjp_announce_closed") === "1") {
      announceBar.hidden = true;
    }
    announceClose.addEventListener("click", () => {
      announceBar.hidden = true;
      localStorage.setItem("cjp_announce_closed", "1");
    });
  }

  // Bilingual (English <-> Hindi) Translation Engine
  const i18nDict = {
    hi: {
      // Nav Links & Common Actions
      "Vision": "विज़न",
      "5 Demands": "5 मांगें",
      "Media": "मीडिया",
      "Actions": "आंदोलन",
      "Issues": "मुद्दे",
      "Tracker": "ट्रैकर",
      "Members": "सदस्य",
      "Gallery": "गैलरी",
      "Join Us": "सदस्यता लें",
      "Contact": "संपर्क",
      "Support site": "समर्थन दें",
      "Join Free": "मुफ़्त जुड़ें",
      "Skip to content": "मुख्य सामग्री पर जाएं",

      // Headings & Brand
      "Cockroach Janta Party Wale": "कॉकरोच जनता पार्टी वाले",
      "Because degrees are temporary, survival is permanent.": "क्योंकि डिग्रियां अस्थायी हैं, अस्तित्व स्थाई है।",
      "Together. Resilient. Unstoppable.": "एकजुट। सशक्त। अटूट।",
      "CJP Sansad Chalo March &amp; Government Negotiations": "CJP संसद चलो मार्च एवं सरकारी वार्ता",
      "CJP Sansad Chalo March & Government Negotiations": "CJP संसद चलो मार्च एवं सरकारी वार्ता",
      "Ground Images &amp; Media Clips": "ग्राउंड फोटो एवं मीडिया क्लिप्स",
      "Ground Images & Media Clips": "ग्राउंड फोटो एवं मीडिया क्लिप्स",
      "Sansad Chalo March &amp; Clash": "संसद चलो मार्च एवं झड़प",
      "Sansad Chalo March & Clash": "संसद चलो मार्च एवं झड़प",
      "Government Meeting &amp; Stand-off": "सरकारी बैठक एवं गतिरोध",
      "Government Meeting & Stand-off": "सरकारी बैठक एवं गतिरोध",

      // CJP Victory & Hero Translations
      "CJP HISTORIC VICTORY!": "CJP ऐतिहासिक विजय!",
      "GOVT ACCEPTS ALL 5 DEMANDS!": "सरकार ने मानीं सारी 5 मांगें!",
      "CJP HISTORIC VICTORY · 25 JULY 2026": "🏆 CJP ऐतिहासिक विजय · 25 जुलाई 2026",
      "31 JULY 2026 HISTORIC GAZETTE GAZETTED | 100% MERITOCRACY ACT PASSED": "🏆 31 जुलाई 2026 ऐतिहासिक राजपत्र जारी | 100% योग्यता अधिनियम पास",
      "31 JULY GAZETTE VICTORY!": "31 जुलाई राजपत्र विजय!",
      "CELEBRATE VICTORY": "🏆 ऐतिहासिक जीत का जश्न मनाएं",
      "READ 5 ACCEPTED DEMANDS": "📜 स्वीकृत 5 मांगें देखें",
      "5/5 DEMANDS ACCEPTED": "5/5 मांगें स्वीकृत",
      "100% YOUTH VICTORY": "100% युवाओं की जीत",
      "NEET SERVER AUDIT · DETAINEES RELEASED · ACCORD PASSED": "NEET सर्वर ऑडिट · रिहाई कानून लागू · समझौता पास",

      // Announcements & Taglines
      "Yes, We Are Cockroaches — We Survive. We Rise. We Lead.": "हाँ, हम कॉकरोच हैं — हम सहते हैं, उठते हैं और नेतृत्व करते हैं।",
      "#MainBhiCockroach — reclaiming the insult as youth power": "#MainBhiCockroach — युवाओं की एकजुटता और संघर्ष का प्रतीक",
      "Founded 16 May 2026 by Abhijeet Dipke · New Delhi": "16 मई 2026 को अभिजीत दीपके द्वारा स्थापित · नई दिल्ली",
      "Not an ECI-registered party · Satire with a purpose": "चुनाव आयोग से पंजीकृत पार्टी नहीं · उद्देश्यपूर्ण व्यंग्य आंदोलन",
      "Cockroach Janta Party · Est. 16 May 2026": "कॉकरोच जनता पार्टी · स्थापना 16 मई 2026",

      // Badges & Labels
      "SWARM IN DELHI": "✊ दिल्ली में जनसैलाब",
      "SECURITY FORCES": "🚧 सुरक्षा बल",
      "DEMANDING REFORM": "📜 सुधार की मांग",
      "HUNGER STRIKE": "🚨 भूख हड़ताल",
      "20 JULY PROTEST": "20 जुलाई विरोध प्रदर्शन",
      "Jantar Mantar March": "जंतर-मंतर मार्च",
      "Voice of the Lazy &amp; Unemployed": "आलसियों और बेरोजगारों की आवाज़",
      "Voice of the Lazy & Unemployed": "आलसियों और बेरोजगारों की आवाज़",
      "Campaign art": "आंदोलन कला",
      "Gallery of the movement.": "आंदोलन की गैलरी",
      "Full gallery": "पूरी गैलरी",
      "Manifesto": "घोषणापत्र",
      "Timeline of the Movement.": "आंदोलन की समयरेखा",

      // Hero Titles & CTAs
      "Read Manifesto": "घोषणापत्र पढ़ें",
      "20M+": "2 करोड़+",
      "IG peak week": "साप्ताहिक पहुँच",
      "350K+": "3.5 लाख+",
      "Early sign-ups": "शुरुआती सदस्य",
      "Delhi": "दिल्ली",
      "HQ / protests": "मुख्यालय / प्रदर्शन",

      // Support & Footer
      "Keep the site alive · Voluntary": "वेबसाइट सहयोग · स्वैच्छिक योगदान",
      "Scan &amp; pay": "स्कैन करें और भुगतान करें",
      "Scan & pay": "स्कैन करें और भुगतान करें",
      "Stay updated": "अपडेट्स प्राप्त करें",
      "Subscribe": "सब्सक्राइब करें",
      "🚨 LIVE COVERAGE": "🚨 लाइव कवरेज",

      // Exam Charter & New Banners
      "5 Demands to End India's Exam Crisis": "भारत के परीक्षा संकट को समाप्त करने की 5 मांगें",
      "Read the Charter →": "घोषणापत्र पढ़ें →",
      "View Victory Accord →": "विजय समझौता देखें →",
      "Released 15 July 2026": "15 जुलाई 2026 को जारी",

      // Issues & Protests
      "Public Issues Board": "जनसमस्या बोर्ड",
      "Tracked Campus &amp; Civic Issues": "ट्रैक किए गए कैंपस और नागरिक मुद्दे",
      "Tracked Campus & Civic Issues": "ट्रैक किए गए कैंपस और नागरिक मुद्दे",
      "Jharkhand Recruitment Server Log Audit &amp; CBI Probe": "झारखंड भर्ती सर्वर लॉग ऑडिट एवं सीबीआइ जांच",
      "Aarakshan Hatao - Yogyata Lao Movement": "आरक्षण हटाओ - योग्यता लाओ आंदोलन",
      "Arbitrary Campus Fee Hikes": "कैंपस फीस वृद्धि का विरोध",
      "Research Fellowship Disbursal Backlog": "शोध फेलोशिप और वज़ीफ़ा का भुगतान",
      "RTI Query Backlog &amp; Obfuscation": "आरटीआई प्रश्नों का निस्तारण",
      "Read More →": "और पढ़ें →",
      "View Audit Details →": "ऑडिट विवरण देखें →",
      "View Campaign Details →": "अभियान विवरण देखें →",
      "File an issue": "मुद्दा दर्ज करें"
    }
  };

  const applyLanguage = (targetLang) => {
    localStorage.setItem("cjp_lang", targetLang);

    if (targetLang === "hi") {
      const dict = i18nDict.hi;

      const elementsToTranslate = document.querySelectorAll(
        "h1, h2, h3, h4, p, span, a, button, li, small, figcaption, th, td, label"
      );

      elementsToTranslate.forEach((el) => {
        if (el.closest("#langSelect")) return;

        // Special handling for nav links containing nav-label span to preserve nav-icon
        if (el.classList && el.classList.contains("nav-label")) {
          if (!el.dataset.en) el.dataset.en = el.innerHTML;
          const orig = el.dataset.en.trim();
          for (const [key, val] of Object.entries(dict)) {
            if (orig === key) {
              el.innerHTML = val;
              break;
            }
          }
          return;
        }

        // Skip parent <a> if it contains a nav-label child so we don't wipe inner spans
        if (el.querySelector && el.querySelector(".nav-label")) return;

        if (!el.dataset.en) {
          el.dataset.en = el.innerHTML;
        }
        const originalHtml = el.dataset.en;
        const textContent = el.textContent.trim();

        for (const [key, val] of Object.entries(dict)) {
          if (textContent === key || originalHtml.trim() === key || originalHtml.replace(/\s+/g, ' ') === key) {
            el.innerHTML = val;
            break;
          }
        }
      });
    } else {
      document.querySelectorAll("[data-en]").forEach((el) => {
        if (!el.closest("#langSelect")) {
          el.innerHTML = el.dataset.en;
        }
      });
    }
  };
  window.applyCjpLanguage = applyLanguage;

  // Set initial language from storage on page load
  const savedLang = localStorage.getItem("cjp_lang") || "en";
  if (savedLang === "hi") {
    setTimeout(() => applyLanguage("hi"), 100);
  }

  // Live chat
  const liveChat = $("#liveChat");
  const chatPanel = $("#chatPanel");
  const chatClose = $("#chatClose");
  const chatForm = $("#chatForm");
  const chatInput = $("#chatInput");
  const chatMessages = $("#chatMessages");

  const botReply = (text) => {
    const t = text.toLowerCase();
    if (t.includes("join")) return "Join is free — open join.html. Eligibility is satirical: unemployed, lazy, chronically online.";
    if (t.includes("issue") || t.includes("raise") || t.includes("file"))
      return "File Issue is for members. Join first, then report with names and receipts.";
    if (t.includes("donate") || t.includes("support") || t.includes("fuel"))
      return "Support Us keeps hosting independent. See donate.html.";
    if (t.includes("abhijeet") || t.includes("founder") || t.includes("dipke"))
      return "Founded 16 May 2026 by Abhijeet Dipke after the CJI 'cockroach' remarks.";
    if (t.includes("hello") || t.includes("hi") || t.includes("namaste"))
      return "Namaste. Voice of the Lazy & Unemployed — how can we help?";
    return "Try About, Manifesto, News, or Protests — or just Join Free.";
  };

  const addBubble = (text, who = "user") => {
    const el = document.createElement("div");
    el.className = `chat-bubble ${who}`;
    el.textContent = text;
    chatMessages?.appendChild(el);
    if (chatMessages) chatMessages.scrollTop = chatMessages.scrollHeight;
  };

  liveChat?.addEventListener("click", () => chatPanel?.removeAttribute("hidden"));
  chatClose?.addEventListener("click", () => chatPanel?.setAttribute("hidden", ""));
  chatForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = chatInput.value.trim();
    if (!text) return;
    addBubble(text, "user");
    chatInput.value = "";
    setTimeout(() => addBubble(botReply(text), "bot"), 400);
  });

  // Google join demo
  const termsCheck = $("#termsCheck");
  const googleBtn = $("#googleJoin");
  googleBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    if (termsCheck && !termsCheck.checked) {
      showToast("Please accept the Terms of Use and Satire Disclaimer first.", false);
      return;
    }
    showToast("Google sign-in is demo-only. Use the form below.");
  });

  // Donate amount chips
  const amountInput = $("#amount");
  $$(".amount-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      $$(".amount-chip").forEach((c) => c.classList.remove("is-selected"));
      chip.classList.add("is-selected");
      if (amountInput) amountInput.value = chip.dataset.amount || "";
    });
  });

  // Contest dismiss
  $("#contestClose")?.addEventListener("click", () => $(".contest-card")?.remove());

  // Pause tickers on hover
  $$(".ticker-track, .announce-track, .meta-track").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      el.style.animationPlayState = "paused";
    });
    el.addEventListener("mouseleave", () => {
      el.style.animationPlayState = "running";
    });
  });

  // Forms — localStorage only (no PHP)
  const saveLocal = (key, row) => {
    const list = JSON.parse(localStorage.getItem(key) || "[]");
    list.push({ ...row, created_at: new Date().toISOString() });
    localStorage.setItem(key, JSON.stringify(list));
  };

  $("#subscribeForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = new FormData(e.target).get("email");
    saveLocal("cjp_subscribers", { email });
    
    if (window.dispatchMailtrapNotification) {
      window.dispatchMailtrapNotification({ email }, "Newsletter Subscription");
    }

    const msg = $("#subscribeMsg");
    if (msg) {
      msg.hidden = false;
      msg.textContent = "✅ Subscribed! Thank you for supporting.";
    }
    e.target.reset();
  });

  // Real-time Live CJP Digital Card Preview Sync
  const fullNameInput = $("#full_name");
  const cityInput = $("#city");
  const stateSelect = $("#state");
  const professionSelect = $("#profession");
  const genderSelect = $("#gender");

  const cardNamePreview = $("#cardNamePreview");
  const cardLocPreview = $("#cardLocPreview");
  const cardAvatarEmoji = $("#cardAvatarEmoji");

  const updateCardPreview = () => {
    if (cardNamePreview && fullNameInput) {
      const nameVal = fullNameInput.value.trim();
      cardNamePreview.textContent = nameVal ? nameVal.toUpperCase() : "YOUTH REVOLUTIONARY";
    }
    if (cardLocPreview) {
      const c = cityInput?.value.trim() || "";
      const s = stateSelect?.value.trim() || "";
      const p = professionSelect?.value || "STUDENT / CITIZEN";
      const locStr = [c, s].filter(Boolean).join(", ").toUpperCase() || "NEW DELHI";
      cardLocPreview.textContent = `${locStr} · ${p.toUpperCase()}`;
    }
    if (cardAvatarEmoji && genderSelect) {
      const g = genderSelect.value;
      cardAvatarEmoji.textContent = g === "male" ? "👨" : g === "female" ? "👩" : "🪳";
    }
  };

  [fullNameInput, cityInput, stateSelect, professionSelect, genderSelect].forEach((input) => {
    input?.addEventListener("input", updateCardPreview);
    input?.addEventListener("change", updateCardPreview);
  });

  $("#joinForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (termsCheck && !termsCheck.checked) {
      showToast("Please accept the Terms of Use and Satire Disclaimer first.", false);
      return;
    }
    const data = Object.fromEntries(new FormData(e.target).entries());
    let n = Number(localStorage.getItem("cjp_app_counter") || "98742");
    n += 1;
    localStorage.setItem("cjp_app_counter", String(n));
    const cardId = `CJP-2026-${n}`;
    saveLocal("cjp_applications", { id: cardId, ...data });

    if (window.dispatchMailtrapNotification) {
      window.dispatchMailtrapNotification({ memberId: cardId, ...data }, "Join Swarm Application");
    }
    
    const appNo = $("#appNumber");
    if (appNo) appNo.textContent = cardId;
    
    showToast(`🎉 Card Generated! Member ID: ${cardId}`);
  });

  $("#donateForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    saveLocal("cjp_donations", data);
    if (window.dispatchMailtrapNotification) {
      window.dispatchMailtrapNotification(data, "Support Payment Intent");
    }
    showToast(`Thanks! ₹${data.amount} intent recorded.`);
    e.target.reset();
    amountInput && (amountInput.value = "199");
  });

  $("#upiPaymentConfirmForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    saveLocal("cjp_upi_payments", data);
    if (window.dispatchMailtrapNotification) {
      window.dispatchMailtrapNotification(data, "UPI Support Payment Received");
    }
    showToast("🎉 Payment Confirmation sent! Alert received.");
    e.target.reset();
  });

  $("#issueForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    const id = `ISS-${Math.floor(1000 + Math.random() * 9000)}`;
    saveLocal("cjp_issues", { id, ...data, status: "open" });
    if (window.dispatchMailtrapNotification) {
      window.dispatchMailtrapNotification({ issueId: id, ...data }, "Raise Issue Form");
    }
    showToast(`Issue ${id} filed successfully.`);
    e.target.reset();
  });

  $("#contactForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    saveLocal("cjp_contacts", data);
    if (window.dispatchMailtrapNotification) {
      window.dispatchMailtrapNotification(data, "Contact Us Message");
    }
    showToast("Message received! Thank you.");
    e.target.reset();
  });

  // Show live application number on join page
  const appNo = $("#appNumber");
  if (appNo) {
    const n = localStorage.getItem("cjp_app_counter") || "29735";
    appNo.textContent = `REQ / ${n}`;
  }

  // Protest / page slider
  $$("[data-slider]").forEach((root) => {
    const viewport = $(".cjp-slider-viewport", root) || root;
    const track = $("[data-slider-track]", root);
    const slides = $$("[data-slide]", root);
    const prev = $("[data-slider-prev]", root);
    const next = $("[data-slider-next]", root);
    const dotsWrap = $("[data-slider-dots]", root);
    if (!track || !slides.length) return;

    let index = 0;
    let timer;
    const gap = 16;

    const perView = () => {
      const w = viewport.clientWidth;
      if (w < 640) return 1;
      if (w < 980) return 2;
      return 3;
    };

    const layout = () => {
      const pv = perView();
      const slideW = (viewport.clientWidth - gap * (pv - 1)) / pv;
      slides.forEach((s) => {
        s.style.flex = `0 0 ${slideW}px`;
        s.style.width = `${slideW}px`;
      });
      track.style.gap = `${gap}px`;
      return { pv, slideW };
    };

    const maxIndex = () => Math.max(0, slides.length - perView());

    const paintDots = () => {
      if (!dotsWrap) return;
      const max = maxIndex();
      dotsWrap.innerHTML = "";
      for (let i = 0; i <= max; i++) {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "cjp-slider-dot" + (i === index ? " is-active" : "");
        b.setAttribute("aria-label", `Go to slide group ${i + 1}`);
        b.addEventListener("click", () => go(i));
        dotsWrap.appendChild(b);
      }
    };

    const go = (i) => {
      const { slideW } = layout();
      index = Math.max(0, Math.min(i, maxIndex()));
      track.style.transform = `translateX(${-index * (slideW + gap)}px)`;
      paintDots();
      restart();
    };

    const restart = () => {
      clearInterval(timer);
      timer = setInterval(() => go(index >= maxIndex() ? 0 : index + 1), 4500);
    };

    prev?.addEventListener("click", () => go(index - 1));
    next?.addEventListener("click", () => go(index + 1));
    window.addEventListener("resize", () => go(Math.min(index, maxIndex())));

    let startX = 0;
    track.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener("touchend", (e) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) go(dx < 0 ? index + 1 : index - 1);
    });

    go(0);
  });



  // Tap & Pay scanner blur reveal handler with auto GPay / UPI Note: CJP
  const initScannerReveal = () => {
    document.querySelectorAll(".qr-slot").forEach((slot) => {
      if (!slot.querySelector(".qr-overlay")) {
        const overlay = document.createElement("div");
        overlay.className = "qr-overlay";
        overlay.innerHTML = '<button type="button" class="tap-pay-btn">Tap &amp; Pay (Note: CJP)</button>';
        slot.appendChild(overlay);
        
        slot.addEventListener("click", () => {
          slot.classList.add("unblurred");
          if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            const upiId = (window.CJP_SITE && window.CJP_SITE.upiId) || "";
            if (upiId) {
              window.location.href = `upi://pay?pa=${upiId}&pn=CJP%20Support&tn=CJP&cu=INR`;
            }
          }
        });
      }
    });
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initScannerReveal);
  } else {
    initScannerReveal();
  }
  // Automatic Browser Cache & Service Worker Cache Purge Engine
  const clearStaleCaches = () => {
    if ("caches" in window) {
      caches.keys().then((names) => {
        names.forEach((name) => {
          caches.delete(name);
        });
      });
    }
    if ("navigator" in window && "serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((registration) => {
          registration.unregister();
        });
      });
    }
  };
  clearStaleCaches();

  // 3 Interactive News Tabs Filter Engine
  const initNewsTabsEngine = () => {
    const tabBtns = $$("#newsTabBar .cjp-tab-btn");
    const container = $("#newsCardsContainer");
    if (!tabBtns.length || !container) return;

    const filterNewsCards = (targetTab) => {
      tabBtns.forEach(btn => {
        if (btn.dataset.newsTab === targetTab) {
          btn.classList.add("is-active");
        } else {
          btn.classList.remove("is-active");
        }
      });

      const cards = $$(".content-card", container);
      cards.forEach(card => {
        const text = (card.textContent || "").toLowerCase();
        const id = (card.id || "").toLowerCase();

        if (targetTab === "all") {
          card.style.display = "";
        } else if (targetTab === "bulletins") {
          // Show official bulletins, posters, gazettes, RHM updates
          if (id.includes("a-to-z") || id.includes("gazette") || id.includes("poster") || text.includes("poster") || text.includes("bulletin") || text.includes("gazette") || text.includes("charter")) {
            card.style.display = "";
          } else {
            card.style.display = "none";
          }
        } else if (targetTab === "media") {
          // Show external media reporting (BBC, AJ+, ThePrint, India Today, etc.)
          if (text.includes("bbc") || text.includes("aj+") || text.includes("theprint") || text.includes("india today") || text.includes("siasat") || text.includes("capital tv") || text.includes("news18") || text.includes("national herald") || text.includes("guardian") || text.includes("hindu") || text.includes("times of india")) {
            card.style.display = "";
          } else {
            card.style.display = "none";
          }
        }
      });
    };

    tabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const tab = btn.dataset.newsTab || "all";
        filterNewsCards(tab);
      });
    });

    // Check URL hash on page load
    const hash = (window.location.hash || "").toLowerCase();
    if (hash.includes("cjp-bulletins")) {
      filterNewsCards("bulletins");
    } else if (hash.includes("media-coverage")) {
      filterNewsCards("media");
    } else if (hash.includes("all-news")) {
      filterNewsCards("all");
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNewsTabsEngine);
  } else {
    initNewsTabsEngine();
  }
})();

