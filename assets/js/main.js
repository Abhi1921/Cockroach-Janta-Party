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

  // Mobile nav
  const navToggle = $("#navToggle");
  const headerInner = $(".header-inner");
  const mainNav = $("#mainNav");
  if (navToggle && headerInner) {
    navToggle.addEventListener("click", () => {
      const open = headerInner.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    $$("a", mainNav).forEach((a) =>
      a.addEventListener("click", () => {
        headerInner.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  // Language select (UI only)
  const langSelect = $("#langSelect");
  if (langSelect) {
    const btn = $(".lang-btn", langSelect);
    const menu = $(".lang-menu", langSelect);
    btn?.addEventListener("click", () => {
      const open = menu.hasAttribute("hidden");
      menu.toggleAttribute("hidden", !open);
      btn.setAttribute("aria-expanded", String(open));
    });
    $$("[role=option]", menu).forEach((opt) => {
      opt.addEventListener("click", () => {
        $$("[role=option]", menu).forEach((o) => o.setAttribute("aria-selected", "false"));
        opt.setAttribute("aria-selected", "true");
        const label = opt.dataset.lang === "hi" ? "हिन्दी" : "ENGLISH";
        btn.innerHTML = btn.innerHTML.replace(/ENGLISH|हिन्दी/, label);
        menu.setAttribute("hidden", "");
        btn.setAttribute("aria-expanded", "false");
      });
    });
    document.addEventListener("click", (e) => {
      if (!langSelect.contains(e.target)) {
        menu?.setAttribute("hidden", "");
        btn?.setAttribute("aria-expanded", "false");
      }
    });
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
    const msg = $("#subscribeMsg");
    if (msg) {
      msg.hidden = false;
      msg.textContent = "You're subscribed. One email — when it matters.";
    }
    e.target.reset();
  });

  $("#joinForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (termsCheck && !termsCheck.checked) {
      showToast("Please accept the Terms first.", false);
      return;
    }
    const data = Object.fromEntries(new FormData(e.target).entries());
    let n = Number(localStorage.getItem("cjp_app_counter") || "29735");
    n += 1;
    localStorage.setItem("cjp_app_counter", String(n));
    saveLocal("cjp_applications", { id: n, ...data });
    const appNo = $("#appNumber");
    if (appNo) appNo.textContent = `REQ / ${n}`;
    showToast(`Application REQ / ${n} filed. Welcome aboard.`);
    e.target.reset();
  });

  $("#donateForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    saveLocal("cjp_donations", data);
    showToast(`Thanks! ₹${data.amount} intent recorded (demo).`);
    e.target.reset();
    amountInput && (amountInput.value = "199");
  });

  $("#issueForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    const id = `ISS-${Math.floor(1000 + Math.random() * 9000)}`;
    saveLocal("cjp_issues", { id, ...data, status: "open" });
    showToast(`Issue ${id} filed. Named. Trackable.`);
    e.target.reset();
  });

  $("#contactForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    saveLocal("cjp_contacts", Object.fromEntries(new FormData(e.target).entries()));
    showToast("Message received. We'll get back when the wifi works.");
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

  // Random screen popups generator ("Join Cockroach Janta Party")
  const popTexts = [
    "🪳 Join Cockroach Janta Party!",
    "🔥 #MainBhiCockroach",
    "⚡ Voice of the Unemployed — Join!",
    "✊ Join CJP Today (Free)",
    "📢 Join CJP Movement Now!",
    "🪳 Chhota Size, Badi Soch",
    "✨ Join Cockroach Janta Party Free",
    "🚀 Register Free Member ID"
  ];

  const spawnRandomPop = () => {
    // Limit max active popups to prevent DOM bloat
    if (document.querySelectorAll(".cjp-pop-badge").length > 6) return;

    const el = document.createElement("a");
    el.href = "join.html";
    el.className = "cjp-pop-badge";
    const text = popTexts[Math.floor(Math.random() * popTexts.length)];
    el.innerHTML = `<span>${text}</span>`;

    // Random location across viewport bounds
    const rx = Math.floor(4 + Math.random() * 75); // 4% to 79% width
    const ry = Math.floor(12 + Math.random() * 75); // 12% to 87% height
    el.style.left = `${rx}vw`;
    el.style.top = `${ry}vh`;

    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1250);
  };

  // Trigger popups every 500ms
  setInterval(spawnRandomPop, 500);
})();
