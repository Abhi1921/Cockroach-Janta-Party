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

  // Bilingual (English <-> Hindi) Translation Engine
  const i18nDict = {
    hi: {
      // Nav Links & Common Actions
      "Vision": "विज़न",
      "5 Demands": "5 मांगें",
      "Media": "मीडिया",
      "Actions": "आंदोलन",
      "Join Us": "सदस्यता लें",
      "Contact": "संपर्क करें",
      "Support site": "समर्थन दें",
      "Join Free": "मुफ़्त जुड़ें",
      "Skip to content": "मुख्य सामग्री पर जाएं",

      // Announcements & Taglines
      "Yes, We Are Cockroaches — We Survive. We Rise. We Lead.": "हाँ, हम कॉकरोच हैं — हम सहते हैं, उठते हैं और नेतृत्व करते हैं।",
      "#MainBhiCockroach — reclaiming the insult as youth power": "#MainBhiCockroach — युवाओं की एकजुटता और संघर्ष का प्रतीक",
      "Founded 16 May 2026 by Abhijeet Dipke · New Delhi": "16 मई 2026 को अभिजीत दीपके द्वारा स्थापित · नई दिल्ली",
      "Not an ECI-registered party · Satire with a purpose": "चुनाव आयोग से पंजीकृत पार्टी नहीं · उद्देश्यपूर्ण व्यंग्य आंदोलन",
      "Cockroach Janta Party · Est. 16 May 2026": "कॉकरोच जनता पार्टी · स्थापना 16 मई 2026",

      // Hero Titles & CTAs
      "Yes, We Are Cockroaches — <span class=\"accent\">We Survive. We Rise. We Lead.</span>": "हाँ, हम कॉकरोच हैं — <span class=\"accent\">हम सहते हैं, उठते हैं और नेतृत्व करते हैं।</span>",
      "Read Manifesto": "घोषणापत्र पढ़ें",
      "20M+": "2 करोड़+",
      "IG peak week": "साप्ताहिक पहुँच",
      "350K+": "3.5 लाख+",
      "Early sign-ups": "शुरुआती सदस्य",
      "Delhi": "दिल्ली",
      "HQ / protests": "मुख्यालय / प्रदर्शन",

      // Manifesto Page
      "The five-point manifesto.": "5-सूत्रीय घोषणापत्र",
      "The <span class=\"accent\">five-point</span> manifesto.": "5-सूत्रीय <span class=\"accent\">घोषणापत्र</span>",
      "As summarised in public encyclopaedic reporting, CJP's formal manifesto includes these demands (satirical political theatre with sharp institutional critique). Additional accepted points include RTI answerability and rejecting a secret \"Cockroach CARES\" fund.": "सार्वजनिक रिपोर्टिंग के अनुसार, सीजेपी के 5-सूत्रीय घोषणापत्र में ये मुख्य मांगें शामिल हैं (सख्त संस्थागत सुधार और पारदर्शिता के साथ)।",
      "No Rajya Sabha for retiring CJIs as reward": "1. रिटायर होने वाले सीजेआई को इनाम में राज्यसभा सीट नहीं",
      "No Chief Justice shall be granted a Rajya Sabha seat as a post-retirement reward.": "किसी भी मुख्य न्यायाधीश को सेवानिवृत्ति के बाद राज्यसभा सीट का इनाम नहीं दिया जाएगा।",
      "Vote deletion = maximum accountability": "2. वोट हटाने पर मुख्य चुनाव आयुक्त की अधिकतम जवाबदेही",
      "If any legitimate vote is deleted, the Chief Election Commissioner shall face the harshest accountability — framed by CJP as no less than an attack on democratic rights.": "यदि किसी भी वैध मतदाता का नाम हटाया जाता है, तो मुख्य चुनाव आयुक्त पर सख्त कार्रवाई होगी।",
      "50% for women": "3. महिलाओं के लिए 50% सीट आरक्षण",
      "Women shall receive 50% reservation (instead of 33%) without increasing Parliament's strength; 50% of Cabinet positions reserved for women.": "संसद और कैबिनेट पदों में महिलाओं के लिए 50% सीट आरक्षण लागू किया जाए।",
      "Independent media over conglomerate capture": "4. कॉर्पोरेट कब्जे के बजाय स्वतंत्र मीडिया",
      "Licences of media houses owned by Adani Group and Reliance (\"Ambani\") to be cancelled to make space for independent media; investigate \"Godi media\" anchors' bank accounts (as stated in manifesto framing).": "बड़े कॉर्पोरेट मीडिया घरानों के बजाय निष्पक्ष और स्वतंत्र मीडिया को बढ़ावा दिया जाए।",
      "Anti-defection with teeth": "5. दल-बदलुओं पर 20 साल का सख्त चुनाव प्रतिबंध",
      "Any MLA or MP who defects shall be barred from contesting and holding public office for 20 years.": "दल-बदल करने वाले किसी भी विधायक या सांसद पर 20 साल का कड़ा चुनाव प्रतिबंध।",

      // Support & Scanner
      "Keep the site alive · Voluntary": "वेबसाइट सहयोग · स्वैच्छिक योगदान",
      "Building this site takes <em>nights.</em> A little help goes a long way.": "इस वेबसाइट को चलाने में रातें लगती हैं। <em>आपका छोटा सा सहयोग</em> भी बहुत बड़ा सहारा है।",
      "Building this site takes nights. A little help goes a long way.": "इस वेबसाइट को चलाने में रातें लगती हैं। आपका छोटा सा सहयोग भी बहुत बड़ा सहारा है।",
      "Scan &amp; pay": "स्कैन करें और भुगतान करें",
      "Scan & pay": "स्कैन करें और भुगतान करें",
      "You choose the amount · Optional remark: “Website support”": "राशि अपनी पसंद अनुसार चुनें · टिप: “वेबसाइट सपोर्ट”",
      "Full details &amp; policy →": "पूरा विवरण और नीति →",
      "Full details & policy →": "पूरा विवरण और नीति →",
      "This is <strong>not</strong> an NGO, trust, or charity donation": "यह एनजीओ या चैरिटी डोनेशन नहीं है",
      "This is <strong>not</strong> a political party fund or election contribution": "यह किसी राजनीतिक पार्टी का चुनावी फंड नहीं है",
      "It is optional support for <strong>website development &amp; running costs</strong> only": "यह केवल <strong>वेबसाइट विकास और संचालन लागत</strong> के लिए है",
      "No tax deduction / 80G — please treat it as a personal tip": "80G टैक्स छूट लागू नहीं — इसे व्यक्तिगत टिप समझें",

      // Footer
      "Stay updated": "अपडेट्स प्राप्त करें",
      "Campus alerts. <em>When it counts.</em>": "कॉलेज और युवा अलर्ट। <em>समय पर।</em>",
      "Protest updates and manifesto notes — no spam.": "आंदोलन की खबरें और घोषणापत्र नोट्स — बिना स्पैम।",
      "Subscribe": "सब्सक्राइब करें",
      "By subscribing you agree to occasional CJP updates.": "सब्सक्राइब करके आप CJP अपडेट्स प्राप्त करने की सहमति देते हैं।",
      "Youth satirical movement. Founded 16 May 2026. Not registered with the Election Commission of India.": "युवा व्यंग्यात्मक आंदोलन। स्थापना 16 मई 2026। भारत के चुनाव आयोग में पंजीकृत नहीं।",

      // Breaking News Section
      "TODAY'S BIG BREAKING NEWS": "आज की बड़ी ब्रेकिंग न्यूज़",
      "Sonam Wangchuk <em>Detained by Delhi Police</em>": "सोनम वांगचुक को <em>दिल्ली पुलिस ने उठाया</em>",
      "Climate activist Sonam Wangchuk forcefully removed from Jantar Mantar hunger strike site and shifted to Safdarjung Hospital amid tight security.": "जलवायु कार्यकर्ता सोनम वांगचुक को जंतर-मंतर पर भूख हड़ताल स्थल से जबरन हटाकर भारी सुरक्षा के बीच सफदरजंग अस्पताल में स्थानांतरित किया गया।",
      "LATEST PRESS UPDATE": "ताजा प्रेस अपडेट",
      "Hunger Strike Site Cleared": "भूख हड़ताल स्थल खाली कराया गया",
      "Delhi Police barricaded the Jantar Mantar protest site, restricting public entry. Protesters claim several youth coordinators were also detained, prompting CJP founder Abhijeet Dipke to launch an immediate counter fast.": "दिल्ली पुलिस ने जंतर-मंतर विरोध प्रदर्शन स्थल की घेराबंदी कर दी है। प्रदर्शनकारियों का दावा है कि कई युवा समन्वयकों को भी हिरासत में लिया गया है, जिसके बाद सीजेपी संस्थापक अभिजीत दीपके ने तत्काल अनशन शुरू कर दिया है।",
      "🚨 LIVE COVERAGE": "🚨 लाइव कवरेज"
    }
  };

  const applyLanguage = (targetLang) => {
    localStorage.setItem("cjp_lang", targetLang);

    if (targetLang === "hi") {
      const dict = i18nDict.hi;

      // Translate headings, paragraphs, links, buttons, lists, captions (excluding language dropdown itself)
      const elementsToTranslate = document.querySelectorAll(
        "h1, h2, h3, h4, p, span, a, button, li, small, figcaption, th, td, label"
      );

      elementsToTranslate.forEach((el) => {
        if (el.closest("#langSelect")) return;

        if (!el.dataset.en) {
          el.dataset.en = el.innerHTML.trim();
        }
        const originalText = el.dataset.en;
        const cleanText = originalText.replace(/\s+/g, " ");

        for (const [key, val] of Object.entries(dict)) {
          if (cleanText === key || originalText === key) {
            el.innerHTML = val;
            break;
          }
        }
      });
    } else {
      // Revert to English original
      document.querySelectorAll("[data-en]").forEach((el) => {
        if (!el.closest("#langSelect")) {
          el.innerHTML = el.dataset.en;
        }
      });
    }
  };

  // Language select handler
  const langSelect = $("#langSelect");
  if (langSelect) {
    const btn = $(".lang-btn", langSelect);
    const menu = $(".lang-menu", langSelect);
    const savedLang = localStorage.getItem("cjp_lang") || "en";

    // Set initial button label
    if (btn) {
      const initLabel = savedLang === "hi" ? "हिन्दी" : "ENGLISH";
      btn.innerHTML = `🌐 <span>${initLabel}</span> ▾`;
    }

    // Apply saved language on load
    if (savedLang === "hi") {
      setTimeout(() => applyLanguage("hi"), 100);
    }

    btn?.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = menu.hasAttribute("hidden");
      menu.toggleAttribute("hidden", !open);
      btn.setAttribute("aria-expanded", String(open));
    });

    $$("[role=option]", menu).forEach((opt) => {
      opt.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const targetOpt = e.target.closest("[data-lang]") || opt;
        const lang = targetOpt.dataset.lang || "en";

        $$("[role=option]", menu).forEach((o) => o.setAttribute("aria-selected", "false"));
        targetOpt.setAttribute("aria-selected", "true");

        const label = lang === "hi" ? "हिन्दी" : "ENGLISH";
        if (btn) {
          btn.innerHTML = `🌐 <span>${label}</span> ▾`;
        }
        menu.setAttribute("hidden", "");
        btn?.setAttribute("aria-expanded", "false");

        applyLanguage(lang);
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
    
    const appNo = $("#appNumber");
    if (appNo) appNo.textContent = cardId;
    
    showToast(`🎉 Official Card Generated! Member ID: ${cardId}. Welcome aboard.`);
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

  // Random screen popups with boys and girls names joining Cockroach Janta Party
  const boysNames = ["Aman", "Rahul", "Rohan", "Aditya", "Vikram", "Dev", "Farhan", "Kunal", "Sameer", "Yash", "Arjun", "Kabir", "Shivam", "Prateek", "Ayush", "Varun", "Abhinav", "Gaurav", "Nitin", "Deepak"];
  const girlsNames = ["Priya", "Ananya", "Neha", "Sneha", "Riya", "Zoya", "Meera", "Ishita", "Kavya", "Pooja", "Shreya", "Divya", "Anjali", "Simran", "Tanvi", "Sanya", "Bhumika", "Kriti", "Aditi", "Muskan"];
  const indianCities = ["Delhi", "Mumbai", "Pune", "Jaipur", "Lucknow", "Patna", "Indore", "Surat", "Bengaluru", "Kolkata", "Bhopal", "Chandigarh", "Ahmedabad", "Nagpur"];

  const getRandomMsg = () => {
    const isGirl = Math.random() > 0.5;
    const nameList = isGirl ? girlsNames : boysNames;
    const name = nameList[Math.floor(Math.random() * nameList.length)];
    const city = indianCities[Math.floor(Math.random() * indianCities.length)];
    const id = 29700 + Math.floor(Math.random() * 600);
    const avatar = isGirl ? "👩" : "👨";

    const actions = [
      `joined Cockroach Janta Party`,
      `took free CJP membership`,
      `joined #MainBhiCockroach`,
      `registered as Member #${id}`,
      `joined the youth movement`
    ];
    const action = actions[Math.floor(Math.random() * actions.length)];

    return `
      <div class="cjp-pop-avatar">${avatar}</div>
      <div class="cjp-pop-body">
        <span class="cjp-pop-meta">🔴 LIVE · ${city}</span>
        <span class="cjp-pop-msg"><strong>${name}</strong> ${action}</span>
      </div>
      <div class="cjp-pop-cta">Join →</div>
    `;
  };

  const checkIsIndexPage = () => {
    const p = (document.body?.dataset?.page || "").toLowerCase();
    const loc = (window.location.pathname || "").toLowerCase();
    return p === "index" || p === "" || loc.endsWith("index.html") || loc.endsWith("/") || document.querySelector(".hero-home") !== null;
  };

  const spawnRandomPop = () => {
    if (!checkIsIndexPage()) return;
    // Strictly ONLY 1 active popup on screen at any time
    if (document.querySelectorAll(".cjp-pop-badge").length > 0) return;

    const el = document.createElement("a");
    el.href = "join.html";
    el.className = "cjp-pop-badge";
    el.innerHTML = getRandomMsg();

    // Random location across viewport bounds (prominently centered in safe view area)
    const rx = Math.floor(6 + Math.random() * 60); // 6% to 66% width
    const ry = Math.floor(20 + Math.random() * 55); // 20% to 75% height
    el.style.left = `${rx}vw`;
    el.style.top = `${ry}vh`;

    document.body.appendChild(el);
    setTimeout(() => el.remove(), 4950);
  };

  // Run popups strictly on index.html
  if (checkIsIndexPage()) {
    setTimeout(spawnRandomPop, 400);
    setInterval(spawnRandomPop, 5200);
  }

  // Tap & Pay scanner blur reveal & GPay Auto-Note UPI launcher handler
  const initScannerReveal = () => {
    const S = window.CJP_SITE || {};
    const upiId = S.upiId || "cjp@upi";
    const upiNote = S.upiNote || "CJP Website Support";
    const payeeName = S.name || "CJP Website Support";

    document.querySelectorAll(".qr-slot").forEach((slot) => {
      if (!slot.querySelector(".qr-overlay")) {
        const overlay = document.createElement("div");
        overlay.className = "qr-overlay";
        overlay.innerHTML = `
          <button type="button" class="tap-pay-btn">⚡ Pay via GPay / UPI</button>
          <span style="font-size:0.65rem; color:#fff; font-family:var(--font-mono); margin-top:0.3rem; font-weight:700;">Auto-Note: "CJP Website Support"</span>
        `;
        slot.appendChild(overlay);

        const triggerUpi = (amt = "") => {
          slot.classList.add("unblurred");
          const upiUrl = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(payeeName)}&tn=${encodeURIComponent(upiNote)}&cu=INR${amt ? `&am=${amt}` : ''}`;
          
          // If on mobile device, launch UPI app directly
          if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            window.location.href = upiUrl;
          } else {
            showToast(`Note pre-filled as "${upiNote}". Scan QR with GPay / PhonePe.`);
          }
        };

        overlay.addEventListener("click", (e) => {
          e.stopPropagation();
          triggerUpi();
        });

        slot.addEventListener("click", () => {
          slot.classList.add("unblurred");
        });
      }
    });

    // Update scanner images with dynamic QR containing upi:// payload
    document.querySelectorAll("#upiQrImage, .qr-slot img").forEach((img) => {
      const currentSrc = img.getAttribute("src") || "";
      if (currentSrc.includes("upi-qr.png") && !img.dataset.qrGenerated) {
        img.dataset.qrGenerated = "1";
        const qrPayload = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(payeeName)}&tn=${encodeURIComponent(upiNote)}&cu=INR`;
        const dynamicQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=280x280&margin=10&data=${encodeURIComponent(qrPayload)}`;
        
        // Test load dynamic QR with fallbacks
        const testImg = new Image();
        testImg.onload = () => { img.src = dynamicQrUrl; };
        testImg.onerror = () => { img.src = currentSrc; };
        testImg.src = dynamicQrUrl;
      }
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initScannerReveal);
  } else {
    initScannerReveal();
  }
  setTimeout(initScannerReveal, 100);
  setTimeout(initScannerReveal, 500);
})();
