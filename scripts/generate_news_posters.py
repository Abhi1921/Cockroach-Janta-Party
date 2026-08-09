import os
from PIL import Image, ImageDraw, ImageFont

output_dir = "assets/img/cjp"
os.makedirs(output_dir, exist_ok=True)

# Font loading helper
def get_font(font_path, size):
    try:
        return ImageFont.truetype(font_path, size)
    except Exception:
        return ImageFont.load_default()

font_latin_bold = "/usr/share/fonts/truetype/noto/NotoSans-Bold.ttf"
font_latin_reg = "/usr/share/fonts/truetype/noto/NotoSans-Regular.ttf"
font_deva_bold = "/usr/share/fonts/truetype/noto/NotoSansDevanagari-Bold.ttf"
font_deva_reg = "/usr/share/fonts/truetype/noto/NotoSansDevanagari-Regular.ttf"
font_telu_bold = "/usr/share/fonts/truetype/noto/NotoSansTelugu-Bold.ttf"
font_telu_reg = "/usr/share/fonts/truetype/noto/NotoSansTelugu-Regular.ttf"

def draw_gradient(draw, width, height, start_color, end_color):
    r1, g1, b1 = start_color
    r2, g2, b2 = end_color
    for y in range(height):
        r = int(r1 + (r2 - r1) * (y / height))
        g = int(g1 + (g2 - g1) * (y / height))
        b = int(b1 + (b2 - b1) * (y / height))
        draw.line([(0, y), (width, y)], fill=(r, g, b))

def wrap_text(text, font, max_width, draw):
    lines = []
    words = text.split(" ")
    current_line = []
    for word in words:
        test_line = " ".join(current_line + [word])
        bbox = draw.textbbox((0, 0), test_line, font=font)
        w = bbox[2] - bbox[0]
        if w <= max_width:
            current_line.append(word)
        else:
            if current_line:
                lines.append(" ".join(current_line))
            current_line = [word]
    if current_line:
        lines.append(" ".join(current_line))
    return lines

def create_poster(filename, title, channel_name, category_tag, pub_date, bullets, start_color, end_color, accent_color, is_marathi=False, is_telugu=False):
    width, height = 1024, 1024
    img = Image.new("RGB", (width, height), (0, 0, 0))
    draw = ImageDraw.Draw(img)

    # 1. Background gradient
    draw_gradient(draw, width, height, start_color, end_color)

    # 2. Geometric grid / design elements
    # Border
    draw.rectangle([(20, 20), (width - 20, height - 20)], outline=accent_color, width=4)
    draw.rectangle([(28, 28), (width - 28, height - 28)], outline=(255, 255, 255, 100), width=1)

    # Top Marquee / Header Bar
    draw.rectangle([(30, 30), (width - 30, 110)], fill=accent_color)
    f_header = get_font(font_latin_bold, 36)
    draw.text((50, 52), f"📰 {channel_name.upper()}", fill=(255, 255, 255), font=f_header)

    f_date = get_font(font_latin_bold, 24)
    date_bbox = draw.textbbox((0, 0), pub_date, font=f_date)
    date_w = date_bbox[2] - date_bbox[0]
    draw.text((width - 50 - date_w, 58), pub_date, fill=(255, 255, 255), font=f_date)

    # Category Tag Badge
    f_badge = get_font(font_latin_bold, 22)
    draw.rectangle([(50, 140), (420, 185)], fill=(0, 0, 0), outline=accent_color, width=2)
    draw.text((65, 150), f"⚡ {category_tag}", fill=accent_color, font=f_badge)

    # Main Headline (Marathi, Telugu, or English)
    if is_marathi:
        f_title = get_font(font_deva_bold, 44)
    elif is_telugu:
        f_title = get_font(font_telu_bold, 44)
    else:
        f_title = get_font(font_latin_bold, 44)

    title_lines = wrap_text(title, f_title, 920, draw)
    y_offset = 210

    # Headline Box Container
    headline_height = len(title_lines) * 58 + 40
    draw.rectangle([(45, y_offset), (width - 45, y_offset + headline_height)], fill=(15, 15, 25, 230), outline=(255, 255, 255, 180), width=2)

    for line in title_lines:
        draw.text((65, y_offset + 20), line, fill=(255, 255, 255), font=f_title)
        y_offset += 58

    y_offset += 50

    # Bullets / Key Points Box
    draw.rectangle([(45, y_offset), (width - 45, 870)], fill=(0, 0, 0, 180), outline=accent_color, width=2)
    
    # Bullet title header
    f_bullet_head = get_font(font_latin_bold, 26)
    draw.text((65, y_offset + 20), "KEY HIGHLIGHTS & DEVELOPMENTS:", fill=accent_color, font=f_bullet_head)
    
    b_y = y_offset + 65
    if is_marathi:
        f_bullet = get_font(font_deva_reg, 30)
    elif is_telugu:
        f_bullet = get_font(font_telu_reg, 30)
    else:
        f_bullet = get_font(font_latin_reg, 30)

    for b in bullets:
        b_lines = wrap_text(f"• {b}", f_bullet, 880, draw)
        for bl in b_lines:
            if b_y < 850:
                draw.text((65, b_y), bl, fill=(230, 235, 245), font=f_bullet)
                b_y += 42

    # Bottom Branding Footer
    draw.rectangle([(30, 890), (width - 30, 994)], fill=(10, 10, 15))
    f_foot_cjp = get_font(font_latin_bold, 30)
    draw.text((50, 915), "COCKROACH JANTA PARTY (CJP)", fill=(239, 68, 68), font=f_foot_cjp)
    
    f_foot_sub = get_font(font_latin_bold, 22)
    draw.text((50, 953), "OFFICIAL PRESS COVERAGE & YOUTH MOVEMENT WIRE", fill=(255, 255, 255), font=f_foot_sub)

    f_hashtag = get_font(font_latin_bold, 24)
    hash_txt = "#MainBhiCockroach"
    hash_bbox = draw.textbbox((0, 0), hash_txt, font=f_hashtag)
    hash_w = hash_bbox[2] - hash_bbox[0]
    draw.text((width - 50 - hash_w, 935), hash_txt, fill=(251, 191, 36), font=f_hashtag)

    filepath = os.path.join(output_dir, filename)
    img.save(filepath, "PNG")
    print(f"Saved {filepath}")

# 13 Poster Definitions
posters = [
    {
        "filename": "cjp-frontline-whats-next.png",
        "title": "Cockroach Janta Party After Jantar Mantar: What's Next?",
        "channel": "Frontline Magazine",
        "category": "COVER STORY SPECIAL",
        "date": "17h ago",
        "bullets": [
            "After forcing Dharmendra Pradhan's resignation, CJP faces state repression.",
            "Voter roll verification battles & nationwide student mobilization.",
            "Navigating challenges of expanding from youth pressure group to nationwide force."
        ],
        "start": (69, 10, 10), "end": (25, 4, 4), "accent": (220, 38, 38)
    },
    {
        "filename": "cjp-indiatoday-security-confrontation.png",
        "title": "Why behaving like Delhi Police, Abhijeet Dipke asks his security officer to leave",
        "channel": "India Today",
        "category": "BREAKING POLITICS",
        "date": "1 day ago",
        "bullets": [
            "CJP Convenor Abhijeet Dipke confronts police sub-inspector at Sambhajinagar residence.",
            "Questions why official security detail was acting like constant surveillance.",
            "Dipke asks security officer to leave: 'We operate with 100% transparency'."
        ],
        "start": (120, 20, 20), "end": (35, 5, 5), "accent": (239, 68, 68)
    },
    {
        "filename": "cjp-dw-kya-bolti-public.png",
        "title": "DW News: CJP unveils agenda for nationwide 'Kya Bolti Public' campaign",
        "channel": "DW.com (Deutsche Welle)",
        "category": "WORLD SERVICE INDIA",
        "date": "1 day ago",
        "bullets": [
            "Cockroach Janta Party unveils agenda for massive September campaign.",
            "'Kya Bolti Public' to tour universities and public squares across 28 states.",
            "Focusing on student unemployment, paper leak transparency, and civic rights."
        ],
        "start": (12, 74, 110), "end": (3, 30, 50), "accent": (2, 132, 199)
    },
    {
        "filename": "cjp-thehindu-membership-nwc.png",
        "title": "CJP announces membership drive, public dialogue, expansion plan, national working committee",
        "channel": "The Hindu",
        "category": "NATIONAL AFFAIRS",
        "date": "2 days ago",
        "bullets": [
            "Massive nationwide membership drive launched across 28 Indian states.",
            "Open public dialogue forums organized for student job aspirants.",
            "Official National Working Committee (NWC) formed for strategic expansion."
        ],
        "start": (30, 58, 138), "end": (10, 20, 55), "accent": (59, 130, 246)
    },
    {
        "filename": "cjp-et-national-team-convener.png",
        "title": "Cockroach Janta Party unveils national team, Abhijeet Dipke named convener",
        "channel": "The Economic Times",
        "category": "LEADERSHIP & POLICY",
        "date": "1 day ago",
        "bullets": [
            "ET publishes full official list of CJP National Working Executive.",
            "Abhijeet Dipke named National Convener alongside state co-conveners.",
            "Zero electoral ticket promises; focus strictly on policy & exam audits."
        ],
        "start": (4, 78, 55), "end": (2, 28, 20), "accent": (16, 185, 129)
    },
    {
        "filename": "cjp-bloomberg-pressure-group.png",
        "title": "India's Student Movement Shuns Politics, Stays Pressure Group",
        "channel": "Bloomberg News",
        "category": "BLOOMBERG GLOBAL",
        "date": "2 days ago",
        "bullets": [
            "Bloomberg feature: CJP deliberately refrains from contesting elections.",
            "Maintains non-partisan pressure group status to hold all parties accountable.",
            "Gen Z student power reshaping Indian judicial & educational policy."
        ],
        "start": (15, 23, 42), "end": (5, 8, 15), "accent": (99, 102, 241)
    },
    {
        "filename": "cjp-telegraph-unemployment-campaign.png",
        "title": "CJP to launch 'Kya Bolti Public' campaign, make unemployment a nationwide issue",
        "channel": "Telegraph India",
        "category": "NATIONAL WIRE",
        "date": "2 days ago",
        "bullets": [
            "Abhijeet Dipke outlines strategy to make youth unemployment #1 national debate.",
            "'Kya Bolti Public' interactive townhalls across colleges & rural hubs.",
            "Demanding mandatory government job timeline charters & server audits."
        ],
        "start": (99, 27, 27), "end": (35, 8, 8), "accent": (220, 38, 38)
    },
    {
        "filename": "cjp-lokmat-aditya-thackeray-meet.png",
        "title": "नव्या समीकरणाची नांदी? CJP चे सौरव दास, रत्ना सिंग आदित्य ठाकरेंच्या भेटीला",
        "channel": "Lokmat.com",
        "category": "महाराष्ट्र विशेष",
        "date": "13h ago",
        "bullets": [
            "CJP Saurav Das Ratna Singh meets Aditya Thackeray in Mumbai.",
            "शिवसेना (UBT) नेते आदित्य ठाकरे आणि CJP प्रतिनिधी मंडळात प्रदीर्घ चर्चा.",
            "विद्यार्थी हक्क, परीक्षा घोटाळे आणि युवा बेरोजगारीच्या मुद्द्यांवर एकजूट."
        ],
        "marathi": True,
        "start": (120, 20, 20), "end": (35, 5, 5), "accent": (239, 68, 68)
    },
    {
        "filename": "cjp-abpmajha-gujarat-youth-house.png",
        "title": "गुजरातवरुन आलेल्या दोन तरुणांचा अभिजीत दिपकेंच्या घराबाहेर थयथयाट",
        "channel": "ABP Majha",
        "category": "ब्रेकिंग न्यूज",
        "date": "2 days ago",
        "bullets": [
            "CJP सहकारी असल्याचा दावा करत गुजरातहून २ तरुण छत्रपती संभाजीनगरमध्ये.",
            "अभिजीत दिपकेंच्या घराबाहेर हाय व्होल्टेज ड्रामा; पोलीस घटनास्थळी दाखल.",
            "सीजेपीने स्पष्ट केले: गैरसमज आणि बनावट दाव्यांना बळी पडू नका."
        ],
        "marathi": True,
        "start": (124, 45, 18), "end": (45, 14, 5), "accent": (245, 158, 11)
    },
    {
        "filename": "cjp-oneindia-telugu-agenda.png",
        "title": "Cockroach Janta Party: కాక్రోచ్ పార్టీ నెక్స్ట్ ఉద్యమం ఇదే-అజెండా ప్రకటన..!",
        "channel": "Oneindia Telugu",
        "category": "జాతీయ వార్తలు",
        "date": "2 days ago",
        "bullets": [
            "CJP announced nationwide 'Kya Bolti Public' campaign agenda.",
            "నిరుద్యోగం, పేపర్ లీక్స్‌పై దేశవ్యాప్త విద్యార్థి చైతన్య ఉద్యమం.",
            "28 రాష్ట్రాల్లో సభ్యత్వ నమోదు, విద్యారంగ సంస్కరణలే లక్ష్యం."
        ],
        "telugu": True,
        "start": (12, 74, 110), "end": (3, 30, 50), "accent": (14, 165, 233)
    },
    {
        "filename": "cjp-inshorts-jharkhand-protest.png",
        "title": "Cockroach Janta Party joins students' protest in Jharkhand",
        "channel": "Inshorts",
        "category": "FAST NEWS WIRE",
        "date": "15h ago",
        "bullets": [
            "CJP delegation led by Co-Convener Ashutosh Ranka joins Ranchi protest.",
            "'Stir to continue until all demands for JSSC & JPSC server audit met'.",
            "Full solidarity extended to student hunger strikers at Morabadi ground."
        ],
        "start": (6, 78, 59), "end": (2, 28, 20), "accent": (16, 185, 129)
    },
    {
        "filename": "cjp-thehindu-meta-censorship.png",
        "title": "Meta ramps up censorship of protest, political reels; CJP posts disappearing",
        "channel": "The Hindu Tech",
        "category": "CYBER & TECH RIGHTS",
        "date": "1 day ago",
        "bullets": [
            "Posts by CJP leaders and student protesters disappearing from Instagram/FB.",
            "Meta algorithm flagged for mass shadowbanning youth protest content.",
            "CJP demands digital free speech protection and IT Ministry audit."
        ],
        "start": (76, 29, 149), "end": (25, 8, 55), "accent": (168, 85, 247)
    },
    {
        "filename": "cjp-abpmajha-7hours-masterplan.png",
        "title": "कॉकरोच जनता पार्टी च्या बैठकीत सात तास मंथन, CJP कडून पुढचा मास्टरप्लॅन",
        "channel": "ABP Majha",
        "category": "एक्सक्लुझिव्ह रिपोर्ट",
        "date": "8 August 2026",
        "bullets": [
            "CJP राष्ट्रीय कार्यकारिणीची ७ तास वादळी बैठक पार पडली.",
            "'क्या बोलती पब्लिक' अभियान, सदस्यत्व नोंदणी आणि राज्यस्तरीय आंदोलनांचा आराखडा.",
            "अभिजीत दिपके: 'विद्यार्थी हक्क आणि पारदर्शकतेसाठी लढा अधिक तीव्र होणार'."
        ],
        "marathi": True,
        "start": (120, 20, 20), "end": (35, 5, 5), "accent": (239, 68, 68)
    }
]

for p in posters:
    create_poster(
        filename=p["filename"],
        title=p["title"],
        channel_name=p["channel"],
        category_tag=p["category"],
        pub_date=p["date"],
        bullets=p["bullets"],
        start_color=p["start"],
        end_color=p["end"],
        accent_color=p["accent"],
        is_marathi=p.get("marathi", False),
        is_telugu=p.get("telugu", False)
    )
