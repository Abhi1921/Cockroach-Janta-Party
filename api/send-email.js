const nodemailer = require("nodemailer");

module.exports = async function handler(req, res) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  try {
    const data = req.body || {};
    const formType = data.formType || "Form Submission";
    const senderEmail = data.email || data.user_email || "no-reply@cockroachjantapartywale.com";
    const senderName = data.name || data.fullName || "Website Visitor";

    // Format all submitted fields into HTML table
    let fieldsHtml = "";
    for (const [key, value] of Object.entries(data)) {
      if (key !== "formType") {
        fieldsHtml += `
          <tr>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0; font-weight: bold; text-transform: capitalize; background: #f8fafc; color: #334155; width: 32%;">${key.replace(/_/g, " ")}</td>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0; color: #0f172a;">${String(value).replace(/</g, "&lt;")}</td>
          </tr>
        `;
      }
    }

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.06);">
        <div style="background: #9f1239; color: #ffffff; padding: 18px 24px; font-size: 20px; font-weight: bold; display: flex; align-items: center; justify-content: space-between;">
          <span>🚀 CJP Submission: ${formType}</span>
        </div>
        <div style="padding: 24px; background: #ffffff;">
          <p style="font-size: 15px; color: #334155; margin-top: 0;">A new form submission was recorded on <strong>cockroachjantapartywale.com</strong>:</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 18px; font-size: 14px;">
            <tbody>
              ${fieldsHtml}
            </tbody>
          </table>
          <hr style="border: 0; border-top: 1px solid #f1f5f9; margin: 24px 0 16px;">
          <p style="font-size: 12px; color: #94a3b8; margin: 0;">Submitted at: ${new Date().toLocaleString()} | User Agent: ${req.headers["user-agent"] || "Browser"}</p>
        </div>
      </div>
    `;

    // Mailtrap SMTP Transporter with provided credentials
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "fe5cbbbebe3582",
        pass: "6316826f241f20",
      },
    });

    const mailOptions = {
      from: `"CJP Movement" <no-reply@cockroachjantapartywale.com>`,
      to: `admin@cockroachjantapartywale.com`,
      replyTo: senderEmail,
      subject: `[CJP Mailtrap Notification] New ${formType} from ${senderName}`,
      html: htmlContent,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Mailtrap notification email sent successfully:", info.messageId);

    return res.status(200).json({
      success: true,
      message: "Form submission notification emailed to Mailtrap successfully!",
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("Mailtrap SMTP Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send email to Mailtrap",
      error: error.message,
    });
  }
};
