import os
from PIL import Image, ImageDraw, ImageFont

output_dir = "assets/img/cjp"
os.makedirs(output_dir, exist_ok=True)

def get_font(font_path, size):
    try:
        return ImageFont.truetype(font_path, size)
    except Exception:
        return ImageFont.load_default()

font_latin_bold = "/usr/share/fonts/truetype/noto/NotoSans-Bold.ttf"
font_latin_reg = "/usr/share/fonts/truetype/noto/NotoSans-Regular.ttf"
font_dev_bold = "/usr/share/fonts/truetype/noto/NotoSansDevanagari-Bold.ttf"

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

def create_media_poster(filename, title, channel_name, category_tag, pub_date, bullets, start_color, end_color, accent_color, is_dev=False):
    width, height = 1024, 1024
    img = Image.new("RGB", (width, height), (0, 0, 0))
    draw = ImageDraw.Draw(img)

    draw_gradient(draw, width, height, start_color, end_color)

    draw.rectangle([(20, 20), (width - 20, height - 20)], outline=accent_color, width=4)
    draw.rectangle([(28, 28), (width - 28, height - 28)], outline=(255, 255, 255, 100), width=1)

    draw.rectangle([(30, 30), (width - 30, 110)], fill=accent_color)
    f_header = get_font(font_latin_bold, 34)
    draw.text((50, 52), f"📰 {channel_name.upper()}", fill=(255, 255, 255), font=f_header)

    f_date = get_font(font_latin_bold, 24)
    date_bbox = draw.textbbox((0, 0), pub_date, font=f_date)
    date_w = date_bbox[2] - date_bbox[0]
    draw.text((width - 50 - date_w, 58), pub_date, fill=(255, 255, 255), font=f_date)

    f_badge = get_font(font_latin_bold, 22)
    draw.rectangle([(50, 140), (600, 185)], fill=(0, 0, 0), outline=accent_color, width=2)
    draw.text((65, 150), f"⚡ {category_tag}", fill=accent_color, font=f_badge)

    f_title = get_font(font_dev_bold if is_dev else font_latin_bold, 38 if is_dev else 40)
    title_lines = wrap_text(title, f_title, 920, draw)
    y_offset = 210

    headline_height = len(title_lines) * 54 + 40
    draw.rectangle([(45, y_offset), (width - 45, y_offset + headline_height)], fill=(15, 15, 25, 230), outline=(255, 255, 255, 180), width=2)

    for line in title_lines:
        draw.text((65, y_offset + 20), line, fill=(255, 255, 255), font=f_title)
        y_offset += 54

    y_offset += 50

    draw.rectangle([(45, y_offset), (width - 45, 870)], fill=(0, 0, 0, 180), outline=accent_color, width=2)
    
    f_bullet_head = get_font(font_latin_bold, 26)
    draw.text((65, y_offset + 20), "KEY HIGHLIGHTS & MEDIA COVERAGE:", fill=accent_color, font=f_bullet_head)
    
    b_y = y_offset + 65
    f_bullet = get_font(font_latin_reg, 28)

    for b in bullets:
        b_lines = wrap_text(f"• {b}", f_bullet, 880, draw)
        for bl in b_lines:
            if b_y < 850:
                draw.text((65, b_y), bl, fill=(230, 235, 245), font=f_bullet)
                b_y += 40

    draw.rectangle([(30, 890), (width - 30, 994)], fill=(10, 10, 15))
    f_foot_cjp = get_font(font_latin_bold, 30)
    draw.text((50, 915), "COCKROACH JANTA PARTY (CJP)", fill=(239, 68, 68), font=f_foot_cjp)
    
    f_foot_sub = get_font(font_latin_bold, 22)
    draw.text((50, 953), "JHARKHAND STUDENT MOVEMENT & MEDIA WIRE", fill=(255, 255, 255), font=f_foot_sub)

    f_hashtag = get_font(font_latin_bold, 24)
    hash_txt = "#MainBhiCockroach"
    hash_bbox = draw.textbbox((0, 0), hash_txt, font=f_hashtag)
    hash_w = hash_bbox[2] - hash_bbox[0]
    draw.text((width - 50 - hash_w, 935), hash_txt, fill=(251, 191, 36), font=f_hashtag)

    filepath = os.path.join(output_dir, filename)
    img.save(filepath, "PNG")
    print(f"Saved {filepath}")

posters = [
    {
        "filename": "cjp-11aug-dna-india-devendra.png",
        "title": "Jharkhand Protest: CJP Backs Devendra Mahto, BJP Calls Bandh Over JPSC-JSSC Police Lathicharge",
        "channel_name": "DNA India",
        "category_tag": "CJP BACKS DEVENDRA MAHTO & BANDH",
        "pub_date": "11 August 2026",
        "bullets": [
            "CJP declares 100% support for hunger striker Devendra Mahto at Ranchi stadium.",
            "BJP calls statewide bandh following brutal police lathicharge on peaceful job aspirants.",
            "Key updates: Demands for JPSC-JSSC exam cancellation and CBI probe intensify."
        ],
        "start_color": (185, 28, 28), "end_color": (40, 5, 5), "accent_color": (239, 68, 68)
    },
    {
        "filename": "cjp-11aug-news18-lathicharge.png",
        "title": "Jharkhand Protest News: CJP Backs Devendra Mahto | Abhijeet Dipke Claims Lathi-Charge",
        "channel_name": "News18 / CNN-News18",
        "category_tag": "ABHIJEET DIPKE CONDEMNS LATHICHARGE",
        "pub_date": "11 August 2026",
        "bullets": [
            "News18 video report: CJP Founder Abhijeet Dipke condemns police violence against students.",
            "Dipke confirms CJP legal team is providing bail and defense support for arrested students.",
            "Full solidarity extended to Devendra Mahto and hunger strike panel."
        ],
        "start_color": (3, 105, 161), "end_color": (8, 47, 73), "accent_color": (56, 189, 248)
    },
    {
        "filename": "cjp-9aug-ht-solidarity.png",
        "title": "'In Complete Solidarity': CJP Joins Jharkhand Students' Protest in Ranchi, Vows All Support",
        "channel_name": "Hindustan Times",
        "category_tag": "COMPLETE SOLIDARITY IN RANCHI",
        "pub_date": "9 August 2026",
        "bullets": [
            "Hindustan Times reports CJP official delegation arriving at Morabadi ground Ranchi.",
            "CJP vows to provide legal, medical, and logistical support to job aspirants.",
            "Demands 3rd-party cryptographic log audits for all public recruitment exam servers."
        ],
        "start_color": (124, 58, 237), "end_color": (46, 16, 101), "accent_color": (167, 139, 250)
    },
    {
        "filename": "cjp-9aug-outlook-ranchi.png",
        "title": "CJP Delegation Reaches Ranchi To Back Jharkhand Student Protest",
        "channel_name": "Outlook India",
        "category_tag": "CJP DELEGATION IN RANCHI",
        "pub_date": "9 August 2026",
        "bullets": [
            "Outlook India covers CJP national representatives landing in Ranchi.",
            "Delegation joins Jaipal Singh Munda stadium hunger strike site.",
            "CJP pledges to mobilize national youth network in support of Jharkhand students."
        ],
        "start_color": (15, 118, 110), "end_color": (19, 42, 42), "accent_color": (45, 212, 191)
    },
    {
        "filename": "cjp-9aug-frontline-opposition.png",
        "title": "Why Jharkhand's Student Protest Matters to the Opposition — Frontline Feature",
        "channel_name": "Frontline Magazine",
        "category_tag": "FRONTLINE SPECIAL ANALYSIS",
        "pub_date": "9 August 2026",
        "bullets": [
            "Frontline deep dive into CJP's strategic role in uniting youth across state lines.",
            "Explores why JPSC-JSSC recruitment corruption has become a central opposition rallying point.",
            "Analyzes Gen-Z pressure group tactics pioneered by CJP."
        ],
        "start_color": (180, 83, 9), "end_color": (69, 26, 3), "accent_color": (251, 191, 36)
    },
    {
        "filename": "cjp-10aug-toi-dipke-backing.png",
        "title": "JPSC-JSSC Protest: CJP Founder Abhijeet Dipke Backs Jharkhand Students, Says 'In Solidarity'",
        "channel_name": "The Times of India",
        "category_tag": "TOI VIDEO EXCLUSIVE",
        "pub_date": "10 August 2026",
        "bullets": [
            "TOI 4-minute video interview with CJP Founder Abhijeet Dipke.",
            "Dipke: 'We are in 100% solidarity with Jharkhand youth fighting for exam integrity'.",
            "Calls for immediate cancellation of leaked exams and transparent audit processes."
        ],
        "start_color": (190, 18, 60), "end_color": (76, 5, 25), "accent_color": (251, 113, 133)
    },
    {
        "filename": "cjp-9aug-jagran-aakhri-samay.png",
        "title": "'आखिरी समय तक देंगे उनका साथ': JPSC प्रोटेस्ट के समर्थन में रांची पहुंचा CJP का प्रतिनिधिमंडल",
        "channel_name": "Dainik Jagran",
        "category_tag": "जागरण एक्सक्लूसिव - सीजेपी रांची",
        "pub_date": "9 August 2026",
        "bullets": [
            "Dainik Jagran ground coverage: CJP delegation reaches Ranchi student protest site.",
            "CJP leaders declare: 'We will support Jharkhand students until every demand is met'.",
            "Demand for immediate CBI probe in JPSC & JSSC CGL recruitment leaks."
        ],
        "start_color": (194, 65, 12), "end_color": (67, 20, 7), "accent_color": (251, 146, 60),
        "is_dev": True
    },
    {
        "filename": "cjp-10aug-lallantop-interview.png",
        "title": "Jharkhand JPSC JSSC CGL Protest पर क्या बोले CJP वाले Abhijeet Dipke — The Lallantop",
        "channel_name": "The Lallantop (YouTube)",
        "category_tag": "LALLANTOP VIDEO INTERVIEW",
        "pub_date": "10 August 2026",
        "bullets": [
            "The Lallantop special 5-minute interview with CJP Founder Abhijeet Dipke.",
            "Dipke details systemic paper leak nexus and police heavy-handedness in Ranchi.",
            "Explains CJP's strategy to back Devendra Mahto and state student unions."
        ],
        "start_color": (220, 38, 38), "end_color": (69, 10, 10), "accent_color": (248, 113, 113)
    },
    {
        "filename": "cjp-10aug-theprint-jantar-vs-ranchi.png",
        "title": "How Jharkhand Protest is Different From Jantar Mantar — ThePrint Analysis",
        "channel_name": "ThePrint (YouTube)",
        "category_tag": "THEPRINT ANALYTICAL REPORT",
        "pub_date": "10 August 2026",
        "bullets": [
            "ThePrint video analysis comparing Delhi Jantar Mantar protests with Ranchi movement.",
            "Highlights CJP's role in amplifying regional student demands to national prominence.",
            "Examines student leader Devendra Mahto's hunger strike and police resistance."
        ],
        "start_color": (30, 58, 138), "end_color": (15, 23, 42), "accent_color": (96, 165, 250)
    },
    {
        "filename": "cjp-10aug-mojostory-tear-gas.png",
        "title": "Protest in JHARKHAND Sees Lathicharge & Tear Gas: CJP Joins Ranchi Job Aspirants",
        "channel_name": "Mojo Story (Barkha Dutt)",
        "category_tag": "MOJO STORY GROUND REPORT",
        "pub_date": "10 August 2026",
        "bullets": [
            "Mojo Story 54-minute detailed ground report on tear gas & police lathicharge in Ranchi.",
            "Interviews with student protesters, injured job aspirants, and CJP delegates.",
            "Deep dive into youth unemployment and competitive exam corruption in Jharkhand."
        ],
        "start_color": (109, 40, 217), "end_color": (46, 16, 101), "accent_color": (192, 132, 252)
    },
    {
        "filename": "cjp-11aug-aajtak-live-lathicharge.png",
        "title": "Ranchi Student Protest LIVE: रात में रांची में फिर लाठीचार्ज | Jharkhand Assembly Gate Siege",
        "channel_name": "Aaj Tak (YouTube LIVE)",
        "category_tag": "आज तक लाइव - रांची लाठीचार्ज",
        "pub_date": "11 August 2026",
        "bullets": [
            "Aaj Tak 11-hour marathon live coverage of student protest at Jharkhand Vidhan Sabha gate.",
            "Late-night police lathicharge and tear gas shelling on job aspirants.",
            "CJP delegation on ground demanding medical care and immediate end to police brutality."
        ],
        "start_color": (185, 28, 28), "end_color": (45, 5, 5), "accent_color": (252, 165, 165),
        "is_dev": True
    },
    {
        "filename": "cjp-10aug-abp-devendra-mahto.png",
        "title": "अभिजीत दीपके ने देवेंद्र महतो से की बात: 'अस्पताल ले जाने से पहले CJP की टीम पहुंची'",
        "channel_name": "ABP News",
        "category_tag": "ABP NEWS EXCLUSIVE",
        "pub_date": "10 August 2026",
        "bullets": [
            "ABP News report: CJP Founder Abhijeet Dipke speaks directly with hunger striker Devendra Mahto.",
            "CJP legal and medical team arrives before police forced hospital transport.",
            "CJP demands state government talk directly with student panel instead of using force."
        ],
        "start_color": (194, 65, 12), "end_color": (43, 14, 5), "accent_color": (253, 186, 116),
        "is_dev": True
    },
    {
        "filename": "cjp-11aug-instagram-devendra-reel.png",
        "title": "Instagram Reel (1.5L+ Likes): Police Brutality Against Students is Cruel — CJP Stands With Devendra Mahto",
        "channel_name": "Instagram (@cockroachjantaparty)",
        "category_tag": "1.5L+ LIKES VIRAL INSTAGRAM REEL",
        "pub_date": "11 August 2026",
        "bullets": [
            "Viral Instagram Reel (150,000+ likes) showing Ranchi police lathicharge footage.",
            "Official statement: 'Jantar Mantar or Jharkhand, police brutality is cruel and inhuman'.",
            "CJP stands firmly with Devendra Mahto and the struggle of Jharkhand youth."
        ],
        "start_color": (190, 24, 93), "end_color": (74, 4, 38), "accent_color": (244, 114, 182)
    }
]

for p in posters:
    create_media_poster(
        filename=p["filename"],
        title=p["title"],
        channel_name=p["channel_name"],
        category_tag=p["category_tag"],
        pub_date=p["pub_date"],
        bullets=p["bullets"],
        start_color=p["start_color"],
        end_color=p["end_color"],
        accent_color=p["accent_color"],
        is_dev=p.get("is_dev", False)
    )

print("All 13 new Jharkhand posters successfully generated!")
