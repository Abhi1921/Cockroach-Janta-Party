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

def create_poster(filename, title, channel_name, category_tag, pub_date, bullets, start_color, end_color, accent_color):
    width, height = 1024, 1024
    img = Image.new("RGB", (width, height), (0, 0, 0))
    draw = ImageDraw.Draw(img)

    draw_gradient(draw, width, height, start_color, end_color)

    draw.rectangle([(20, 20), (width - 20, height - 20)], outline=accent_color, width=4)
    draw.rectangle([(28, 28), (width - 28, height - 28)], outline=(255, 255, 255, 100), width=1)

    draw.rectangle([(30, 30), (width - 30, 110)], fill=accent_color)
    f_header = get_font(font_latin_bold, 32)
    draw.text((50, 52), f"📰 {channel_name.upper()}", fill=(255, 255, 255), font=f_header)

    f_date = get_font(font_latin_bold, 24)
    date_bbox = draw.textbbox((0, 0), pub_date, font=f_date)
    date_w = date_bbox[2] - date_bbox[0]
    draw.text((width - 50 - date_w, 58), pub_date, fill=(255, 255, 255), font=f_date)

    f_badge = get_font(font_latin_bold, 22)
    draw.rectangle([(50, 140), (550, 185)], fill=(0, 0, 0), outline=accent_color, width=2)
    draw.text((65, 150), f"⚡ {category_tag}", fill=accent_color, font=f_badge)

    f_title = get_font(font_latin_bold, 38)
    title_lines = wrap_text(title, f_title, 920, draw)
    y_offset = 210

    headline_height = len(title_lines) * 52 + 35
    draw.rectangle([(45, y_offset), (width - 45, y_offset + headline_height)], fill=(15, 15, 25, 230), outline=(255, 255, 255, 180), width=2)

    for line in title_lines:
        draw.text((65, y_offset + 18), line, fill=(255, 255, 255), font=f_title)
        y_offset += 52

    y_offset += 45

    draw.rectangle([(45, y_offset), (width - 45, 870)], fill=(0, 0, 0, 180), outline=accent_color, width=2)
    
    f_bullet_head = get_font(font_latin_bold, 25)
    draw.text((65, y_offset + 18), "KEY HIGHLIGHTS & BREAKING PRESS UPDATES:", fill=accent_color, font=f_bullet_head)
    
    b_y = y_offset + 60
    f_bullet = get_font(font_latin_reg, 27)

    for b in bullets:
        b_lines = wrap_text(f"• {b}", f_bullet, 880, draw)
        for bl in b_lines:
            if b_y < 850:
                draw.text((65, b_y), bl, fill=(230, 235, 245), font=f_bullet)
                b_y += 38

    draw.rectangle([(30, 890), (width - 30, 994)], fill=(10, 10, 15))
    f_foot_cjp = get_font(font_latin_bold, 30)
    draw.text((50, 915), "COCKROACH JANTA PARTY (CJP)", fill=(239, 68, 68), font=f_foot_cjp)
    
    f_foot_sub = get_font(font_latin_bold, 22)
    draw.text((50, 953), "20 AUGUST 2026 NATIONWIDE BREAKING BULLETIN", fill=(255, 255, 255), font=f_foot_sub)

    f_hashtag = get_font(font_latin_bold, 24)
    hash_txt = "#SchoolThikKaro"
    hash_bbox = draw.textbbox((0, 0), hash_txt, font=f_hashtag)
    hash_w = hash_bbox[2] - hash_bbox[0]
    draw.text((width - 50 - hash_w, 935), hash_txt, fill=(251, 191, 36), font=f_hashtag)

    filepath = os.path.join(output_dir, filename)
    img.save(filepath, "PNG")
    print(f"Saved {filepath}")

posters = [
    {
        "filename": "cjp-20aug-pm-cares-fund-school.png",
        "title": "CJP Founder Abhijeet Dipke Questions Govt: 'Why Not Use ₹8,452 Cr PM CARES Fund for Village Schools?'",
        "channel": "Hindustan Times / The Hindu / PTI Wire",
        "category": "SCHOOL THIK KARO · PM CARES DEMAND",
        "date": "20 August 2026",
        "bullets": [
            "Abhijeet Dipke demands PM CARES Fund (₹8,452 Cr) allocation to upgrade rural government schools.",
            "CJP 'School Thik Karo' drive uncovers thousands of primary schools lacking basic toilets & desks.",
            "CJP petitions Union Education Ministry to issue immediate infrastructure grants for village schools."
        ],
        "start": (185, 28, 28), "end": (45, 5, 5), "accent": (239, 68, 68)
    },
    {
        "filename": "cjp-20aug-rejects-nda-offer.png",
        "title": "CJP Rejects Union Minister Ramdas Athawale's Offer: '100% Non-Partisan, We Don't Sell Out'",
        "channel": "NDTV / Times of India / Republic",
        "category": "NDA INVITATION REJECTED",
        "date": "20 August 2026",
        "bullets": [
            "CJP founder Dipke responds to RPI(A) & NDA alliance invitation: 'You called us anti-national, now asking to join?'",
            "CJP reaffirms its strict non-partisan identity fighting solely for meritocracy & student rights.",
            "Millions of Gen-Z youth pledge continued independence from ruling & opposition political cartels."
        ],
        "start": (109, 40, 217), "end": (30, 10, 70), "accent": (192, 132, 252)
    },
    {
        "filename": "cjp-20aug-rha-100-meritocracy-rally.png",
        "title": "RHA (Reservation Hatao Movement) & CJP Launch 28-State Student March for 100% Meritocracy",
        "channel": "Indian Express / Amar Ujala / Dainik Bhaskar",
        "category": "RHA MOVEMENT · 100% MERITOCRACY",
        "date": "20 August 2026",
        "bullets": [
            "Reservation Hatao Andolan (RHA) & CJP co-sponsor student rallies across 28 state capitals.",
            "Demand Supreme Court constitutional bench ruling for 100% merit-based public recruitment.",
            "CJP legal team files PIL for transparent exam server logs and instant answer key publication."
        ],
        "start": (217, 119, 6), "end": (70, 30, 5), "accent": (251, 191, 36)
    },
    {
        "filename": "cjp-20aug-jharkhand-assembly-siege-day27.png",
        "title": "Jharkhand Assembly Siege Day 27: CJP Delegation Joins Devendra Mahto in Ranchi Solidarity Rally",
        "channel": "Telegraph India / News18 / Aaj Tak",
        "category": "JHARKHAND SIEGE · DAY 27",
        "date": "20 August 2026",
        "bullets": [
            "Student agitation over JPSC & JSSC paper leaks enters Day 27 with thousands marching in Ranchi.",
            "CJP legal and emergency medical teams provide continuous support to job aspirants.",
            "Devendra Mahto & CJP demand high-level CBI inquiry and cancellation of leaked exam batches."
        ],
        "start": (16, 185, 129), "end": (5, 50, 35), "accent": (52, 211, 153)
    },
    {
        "filename": "cjp-20aug-village-school-benches-drive.png",
        "title": "CJP Ground Action: Dipke Inspects Hingoli Village School, Secures Immediate Desks & Water Supply",
        "channel": "The Hindu / Outlook India / ABP News",
        "category": "HINGOLI GROUND AUDIT",
        "date": "20 August 2026",
        "bullets": [
            "Abhijeet Dipke inspects rural primary school in Hingoli, Maharashtra; finds students sitting on dirt floors.",
            "CJP campaign forces local authorities to immediately deliver 120 new wooden desks & water filter.",
            "#SchoolThikKaro initiative inspires youth-led social audits in over 500 rural panchayats."
        ],
        "start": (2, 132, 199), "end": (5, 40, 70), "accent": (56, 189, 248)
    },
    {
        "filename": "cjp-20aug-jantar-mantar-season2-tour.png",
        "title": "Jantar Mantar Season 2: CJP Kicks Off 28-State Listening Tour for Next National Youth Convention",
        "channel": "Bloomberg / Al Jazeera / Deccan Herald",
        "category": "JANTAR MANTAR 2.0 LISTENING TOUR",
        "date": "20 August 2026",
        "bullets": [
            "CJP core committee starts 28-state nationwide tour to gather student grievances & charter points.",
            "Preparation underway for massive 'Jantar Mantar Season 2' youth assembly in New Delhi.",
            "Over 30 million registered volunteers join CJP swarm demanding fair exams & youth jobs."
        ],
        "start": (185, 28, 28), "end": (60, 5, 5), "accent": (248, 113, 113)
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
        accent_color=p["accent"]
    )

print("✅ All 6 Google News 20 August 2026 CJP posters generated successfully!")
