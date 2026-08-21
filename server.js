const express = require('express');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;
const DATA_FILE = path.join(__dirname, 'data', 'members.json');

// Ensure data folder and members.json exist
if (!fs.existsSync(path.join(__dirname, 'data'))) {
  fs.mkdirSync(path.join(__dirname, 'data'), { recursive: true });
}
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, '[]', 'utf8');
}

// Mailtrap SMTP Transporter
const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "fe5cbbbebe3582",
    pass: "6316826f241f20",
  },
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Helper function to read members
function getMembers() {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(raw || '[]');
  } catch (err) {
    console.error('Error reading members.json:', err);
    return [];
  }
}

// Helper function to save members
function saveMembers(members) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(members, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Error writing members.json:', err);
    return false;
  }
}

// Helper function to send email notification
async function sendJoinEmail(member) {
  try {
    const userEmail = member.email && member.email.trim() ? member.email.trim() : null;

    const htmlContent = `
      <div style="font-family: 'Segoe UI', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 2px solid #dc2626; border-radius: 16px; overflow: hidden; background: #FFFDF7; color: #1c1917;">
        <div style="background: linear-gradient(135deg, #dc2626 0%, #9f1239 100%); color: #ffffff; padding: 24px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px; font-weight: 900; letter-spacing: -0.02em;">🪳 WELCOME TO COCKROACH JANTA PARTY (CJP)</h1>
          <p style="margin: 6px 0 0; font-size: 14px; color: #fca5a5; font-weight: 700;">Official Member ID: ${member.id}</p>
        </div>
        <div style="padding: 24px;">
          <h2 style="color: #dc2626; margin-top: 0; font-size: 20px;">Lal Salaam & Greetings, ${member.fullName}! ✊</h2>
          <p style="font-size: 15px; line-height: 1.6; color: #44403c;">
            Congratulations! You have successfully registered as an official digital member of <strong>Cockroach Janta Party (CJP)</strong>.
            Your membership is 100% free, lifelong, and gives you full voting rights on our student rights & meritocracy campaigns.
          </p>

          <div style="background: #17120c; color: #ffffff; padding: 18px; border-radius: 12px; border-left: 4px solid #dc2626; margin: 20px 0;">
            <div style="font-size: 12px; font-family: monospace; color: #fbbf24; text-transform: uppercase; font-weight: bold; margin-bottom: 8px;">💳 DIGITAL MEMBER CARD DETAILS</div>
            <table style="width: 100%; font-size: 14px; border-collapse: collapse; color: #ffffff;">
              <tr><td style="padding: 4px 0; color: #a8a29e; width: 120px;">Member ID:</td><td style="font-weight: bold; color: #fbbf24;">${member.id}</td></tr>
              <tr><td style="padding: 4px 0; color: #a8a29e;">Full Name:</td><td style="font-weight: bold;">${member.fullName}</td></tr>
              <tr><td style="padding: 4px 0; color: #a8a29e;">Mobile:</td><td>${member.mobile}</td></tr>
              <tr><td style="padding: 4px 0; color: #a8a29e;">City / State:</td><td>${member.city || 'N/A'}, ${member.state || 'India'}</td></tr>
              <tr><td style="padding: 4px 0; color: #a8a29e;">Join Date:</td><td>${new Date(member.joinDate).toLocaleDateString()}</td></tr>
            </table>
          </div>

          <p style="font-size: 14px; color: #78716c; line-height: 1.5;">
            You can view or download your <strong>Digital CJP ID Card</strong> anytime by logging in with your mobile number on <a href="http://localhost:3001/card" style="color: #dc2626; font-weight: bold; text-decoration: underline;">cockroachjantapartywale.com</a>.
          </p>
          <hr style="border: 0; border-top: 1px solid #e7e5e4; margin: 20px 0;">
          <p style="font-size: 12px; color: #a8a29e; margin: 0; text-align: center;">
            Cockroach Janta Party Wale (CJP) · Satirical Civic & Youth Movement · New Delhi
          </p>
        </div>
      </div>
    `;

    const recipients = ["admin@cockroachjantapartywale.com"];
    if (userEmail) recipients.push(userEmail);

    const mailOptions = {
      from: `"CJP Membership Bureau" <no-reply@cockroachjantapartywale.com>`,
      to: recipients.join(", "),
      subject: `[CJP Membership] Welcome ${member.fullName} (${member.id})`,
      html: htmlContent,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`[Email Sent] Member registration notification sent to Mailtrap: ${info.messageId}`);
    return true;
  } catch (err) {
    console.error(`[Email Error] Failed to send registration email:`, err.message);
    return false;
  }
}

// ----------------------------------------------------
// API ENDPOINTS
// ----------------------------------------------------

// 1. Join / Signup API Endpoint
app.post('/api/join', async (req, res) => {
  try {
    const { fullName, email, mobile, city, state, cause, gender, profession } = req.body;

    if (!fullName || !fullName.trim()) {
      return res.status(400).json({ success: false, message: "Full Name is required!" });
    }
    if (!mobile || !mobile.trim()) {
      return res.status(400).json({ success: false, message: "Mobile Number is required!" });
    }

    const cleanMobile = mobile.trim();
    const cleanEmail = email ? email.trim().toLowerCase() : '';
    const members = getMembers();

    // Check if member already exists by mobile or email
    const existing = members.find(m => 
      (m.mobile && m.mobile.replace(/\s+/g, '').endsWith(cleanMobile.replace(/\D/g, '').slice(-10))) ||
      (cleanEmail && m.email && m.email.toLowerCase() === cleanEmail)
    );

    if (existing) {
      // Member already exists - return details for login/card view
      return res.status(200).json({
        success: true,
        isNew: false,
        member: existing,
        message: `Welcome back ${existing.fullName}! You are already registered with ID: ${existing.id}. Loaded your Digital Card.`
      });
    }

    // Create new member record
    const randomDigits = Math.floor(10000 + Math.random() * 90000);
    const newMember = {
      id: `CJP-2026-${randomDigits}`,
      fullName: fullName.trim(),
      email: cleanEmail,
      mobile: cleanMobile,
      city: city ? city.trim() : 'New Delhi',
      state: state ? state.trim() : 'Delhi',
      cause: cause || 'Exam Leaks & Scams',
      gender: gender || 'other',
      profession: profession || 'Youth Revolutionary',
      joinDate: new Date().toISOString()
    };

    members.unshift(newMember);
    saveMembers(members);

    // Send confirmation & notification email via Mailtrap
    sendJoinEmail(newMember);

    return res.status(201).json({
      success: true,
      isNew: true,
      member: newMember,
      message: `Successfully joined Cockroach Janta Party! Your Official ID is ${newMember.id}.`
    });
  } catch (error) {
    console.error('Error in /api/join:', error);
    return res.status(500).json({ success: false, message: "Server error occurred while joining.", error: error.message });
  }
});

// 2. Login / View Card API Endpoint
app.post('/api/login', (req, res) => {
  try {
    const { identifier, mobile } = req.body;
    const query = (identifier || mobile || '').trim();

    if (!query) {
      return res.status(400).json({ success: false, message: "Please enter your Mobile Number or Email or Member ID!" });
    }

    const members = getMembers();
    const cleanDigits = query.replace(/\D/g, '');

    const found = members.find(m => {
      if (m.id && m.id.toLowerCase() === query.toLowerCase()) return true;
      if (m.email && m.email.toLowerCase() === query.toLowerCase()) return true;
      if (cleanDigits.length >= 8 && m.mobile && m.mobile.replace(/\D/g, '').endsWith(cleanDigits.slice(-10))) return true;
      return false;
    });

    if (found) {
      return res.status(200).json({
        success: true,
        member: found,
        message: `Welcome back, ${found.fullName}! Card loaded.`
      });
    } else {
      return res.status(444).json({
        success: false,
        message: `No member card found for "${query}". Please click "JOIN NOW" to register free!`
      });
    }
  } catch (error) {
    console.error('Error in /api/login:', error);
    return res.status(500).json({ success: false, message: "Server error during login." });
  }
});

// 3. Get Members List Endpoint
app.get('/api/members', (req, res) => {
  try {
    const members = getMembers();
    const totalCount = members.length + 30482910; // Swarm base count
    const sanitized = members.slice(0, 100).map(m => ({
      id: m.id,
      fullName: m.fullName,
      city: m.city,
      state: m.state,
      joinDate: m.joinDate
    }));

    return res.status(200).json({
      success: true,
      totalMembers: totalCount,
      members: sanitized
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Failed to fetch members" });
  }
});

// 4. Send Email API Wrapper (Mailtrap)
app.post('/api/send-email', require('./api/send-email.js'));

// Serve favicon and text files from their new directories
app.get('/favicon.ico', (req, res) => res.sendFile(path.resolve(__dirname, 'assets', 'img', 'favicon.ico')));
app.get('/favicon.png', (req, res) => res.sendFile(path.resolve(__dirname, 'assets', 'img', 'favicon.png')));
app.get('/ads.txt', (req, res) => res.sendFile(path.resolve(__dirname, 'txt', 'ads.txt')));
app.get('/robots.txt', (req, res) => res.sendFile(path.resolve(__dirname, 'txt', 'robots.txt')));
app.get('/humans.txt', (req, res) => res.sendFile(path.resolve(__dirname, 'txt', 'humans.txt')));
app.get('/cjp2026indexnow4892701bf4e93012.txt', (req, res) => res.sendFile(path.resolve(__dirname, 'txt', 'cjp2026indexnow4892701bf4e93012.txt')));

// Static middleware for assets/ and txt/
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
app.use('/txt', express.static(path.resolve(__dirname, 'txt')));

// Serve clean HTML URLs or .html requests from root __dirname
app.get('*', (req, res, next) => {
  const reqPath = req.path;
  if (reqPath.startsWith('/api/')) return next();

  if (reqPath === '/' || reqPath === '/index.html') {
    return res.sendFile(path.resolve(__dirname, 'index.html'));
  }

  const relativePath = reqPath.replace(/^\//, '');
  const rootFilePath = path.resolve(__dirname, relativePath);

  // Non-HTML static assets in root or subfolders
  const ext = path.extname(reqPath).toLowerCase();
  if (ext && ext !== '.html') {
    if (fs.existsSync(rootFilePath)) {
      return res.sendFile(rootFilePath);
    }
    return next();
  }

  // HTML files in root (supports clean URLs like /about or /about.html)
  const htmlFileName = reqPath.endsWith('.html') ? relativePath : relativePath + '.html';
  const htmlFilePath = path.resolve(__dirname, htmlFileName);

  if (fs.existsSync(htmlFilePath)) {
    return res.sendFile(htmlFilePath);
  }

  // Fallback to root index.html
  return res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n🚀 CJP Express Server running at http://localhost:${PORT}`);
  console.log(`📂 JSON Storage: ${DATA_FILE}`);
  console.log(`✉️ Email Transporter: Mailtrap (sandbox.smtp.mailtrap.io:2525)\n`);
});
