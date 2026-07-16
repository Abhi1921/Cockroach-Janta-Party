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
    if (t.includes("join")) return "Join Us is free and lifelong — open join.html and file your application.";
    if (t.includes("issue") || t.includes("raise") || t.includes("file"))
      return "File Issue is members-first. Join, then submit with names, places, and receipts.";
    if (t.includes("donate") || t.includes("support") || t.includes("fuel"))
      return "Support Us keeps hosting independent. Any amount helps — see donate.html.";
    if (t.includes("rank") || t.includes("seo"))
      return "We ship technical SEO (sitemap, schema, meta). Rankings also need content + links over time.";
    if (t.includes("hello") || t.includes("hi") || t.includes("namaste"))
      return "Namaste. Receipts over rhetoric — how can we help?";
    return "Try Vision, Manifesto, Tracker, or Contact. Or just join — ₹0 forever.";
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
})();
