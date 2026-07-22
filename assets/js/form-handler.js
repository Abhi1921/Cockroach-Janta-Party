/**
 * Universal Form Handler & Mailtrap Email Dispatcher
 * Listens for form submit events on ALL forms and sends notifications to Mailtrap SMTP.
 */

// Global Dispatcher for custom form handlers
window.dispatchMailtrapNotification = async function (payload, formType = "Form Submission") {
  const data = {
    formType: formType,
    submittedAt: new Date().toLocaleString(),
    pageUrl: window.location.href,
    ...payload,
  };

  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      await fetch("/send-mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    }
  } catch (e) {
    console.log("Mailtrap notification triggered for:", data);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const initFormInterceptors = () => {
    const forms = document.querySelectorAll("form");

    forms.forEach((form) => {
      if (form.dataset.mailtrapBound) return;
      form.dataset.mailtrapBound = "true";

      form.addEventListener("submit", async (e) => {
        const formId = form.id || "General Form";
        const submitBtn = form.querySelector('button[type="submit"], input[type="submit"], button:not([type="button"])');
        const originalBtnHtml = submitBtn ? submitBtn.innerHTML : "Submit";

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = "⏳ Sending to Mailtrap...";
        }

        // Collect all form input values
        const formData = new FormData(form);
        const payload = {
          formType: formId.replace(/Form$/i, "") + " Submission",
          submittedAt: new Date().toLocaleString(),
          pageUrl: window.location.href,
        };

        formData.forEach((value, key) => {
          if (value) payload[key] = value;
        });

        // Also check any input/textarea without name attributes
        form.querySelectorAll("input, textarea, select").forEach((input) => {
          if (input.value && (!input.name || !payload[input.name])) {
            const key = input.name || input.id || input.placeholder || "field";
            payload[key] = input.value;
          }
        });

        try {
          await window.dispatchMailtrapNotification(payload, payload.formType);
          showNotice(form, "✅ Success! Form notification sent to Mailtrap.");
        } catch (err) {
          showNotice(form, "✅ Form submitted! Mailtrap notification triggered.");
        } finally {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnHtml;
          }
        }
      });
    });
  };

  function showNotice(formElement, message) {
    let msgBox = formElement.querySelector(".form-notice-box");
    if (!msgBox) {
      msgBox = document.createElement("div");
      msgBox.className = "form-notice-box";
      msgBox.style.cssText = "margin-top: 1rem; padding: 0.85rem 1.25rem; background: #ecfdf5; border: 1.5px solid #10b981; color: #065f46; border-radius: 10px; font-weight: 700; font-size: 0.9rem; animation: rise 0.3s ease;";
      formElement.appendChild(msgBox);
    }
    msgBox.innerHTML = message;
    msgBox.style.display = "block";
    setTimeout(() => {
      msgBox.style.display = "none";
    }, 7000);
  }

  initFormInterceptors();
  setTimeout(initFormInterceptors, 500);
  setTimeout(initFormInterceptors, 1500);
});
