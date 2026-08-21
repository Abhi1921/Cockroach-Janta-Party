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
    draw.text((50, 953), "NATIONWIDE CAMPAIGN & MEDIA WIRE", fill=(255, 255, 255), font=f_foot_sub)

    f_hashtag = get_font(font_latin_bold, 24)
    hash_txt = "#JantarMantarSeason2"
    hash_bbox = draw.textbbox((0, 0), hash_txt, font=f_hashtag)
    hash_w = hash_bbox[2] - hash_bbox[0]
    draw.text((width - 50 - hash_w, 935), hash_txt, fill=(251, 191, 36), font=f_hashtag)

    filepath = os.path.join(output_dir, filename)
    img.save(filepath, "PNG")
    print(f"Saved {filepath}")

posters = [
    {
        "filename": "cjp-13aug-jantar-mantar-season2.png",
        "title": "'Jantar Mantar Season 2 Soon': CJP Alleges Political Pressure Forces Delhi Meet to Public Park",
        "channel_name": "Telegraph / TOI / The Wire / Deccan Herald / Amar Ujala",
        "category_tag": "JANTAR MANTAR SEASON 2",
        "pub_date": "13 August 2026",
        "bullets": [
            "CJP founder Abhijeet Dipke alleges political pressure forced Delhi hall booking cancellation.",
            "Dipke: 'Hall owners threatened with coercion; CJP volunteers meeting forced to park'.",
            "CJP officially announces 'Jantar Mantar Season 2' youth movement to launch very soon."
        ],
        "start_color": (220, 38, 38), "end_color": (69, 10, 10), "accent_color": (248, 113, 113)
    },
    {
        "filename": "cjp-13aug-jharkhand-day20-protest.png",
        "title": "Jharkhand JPSC-JSSC Agitation Day 20: Raghubar Das Threatens Hunger Strike; FIR on 300 Marchers",
        "channel_name": "New Indian Express / Jammu Links / Indian Express / NewsOnAir",
        "category_tag": "JHARKHAND AGITATION DAY 20",
        "pub_date": "13 August 2026",
        "bullets": [
            "Jharkhand student agitation over JPSC-JSSC exam paper leaks enters Day 20 in Ranchi.",
            "Former CM Raghubar Das threatens hunger strike if CBI probe isn't ordered in a week.",
            "FIR lodged against 300 marchers following August 10 Vidhan Sabha gates storming."
        ],
        "start_color": (217, 119, 6), "end_color": (120, 53, 15), "accent_color": (251, 191, 36)
    },
    {
        "filename": "cjp-13aug-parliament-sine-die.png",
        "title": "Parliament Monsoon Session Adjourned Sine Die After Stormy Debates on NEET Paper Leaks",
        "channel_name": "The Hindu / PTI Wire / Jagran Josh / Straits Times",
        "category_tag": "MONSOON SESSION SINE DIE",
        "pub_date": "13 August 2026",
        "bullets": [
            "Monsoon Session adjourned sine die on 13 August 2026 following intense Opposition protests.",
            "Government faces persistent demands for NEET leak accountability & exam server log audits.",
            "Task force created to overhaul national entrance exams and introduce anti-leak bills."
        ],
        "start_color": (109, 40, 217), "end_color": (46, 16, 101), "accent_color": (192, 132, 252)
    },
    {
        "filename": "cjp-13aug-maharashtra-school-audit.png",
        "title": "Maharashtra Govt Orders 90-Day 3rd-Party Audit for 553 Aided Ashramshalas Tribal Schools",
        "channel_name": "Times of India / Business Standard / PTI Wire",
        "category_tag": "90-DAY SCHOOL AUDIT MANDATE",
        "pub_date": "13 August 2026",
        "bullets": [
            "Maharashtra government mandates 90-day 3rd-party facility audit for 553 aided Ashramshalas.",
            "Move aligns with CJP 'School Thik Karo' rural government school infrastructure overhaul drive.",
            "Schools failing basic safety, drinking water, and toilet standards face immediate closure."
        ],
        "start_color": (16, 185, 129), "end_color": (6, 78, 59), "accent_color": (52, 211, 153)
    },
    {
        "filename": "cjp-13aug-sc-fake-lawyers-plea.png",
        "title": "SC Seeks Responses from Centre, BCI & CBI on Plea Alleging Fake Lawyers & CJP Activities",
        "channel_name": "Daily Pioneer / Supreme Court Desk / TOI",
        "category_tag": "SUPREME COURT NOTICE",
        "pub_date": "13 August 2026",
        "bullets": [
            "Supreme Court issues notices to Centre, Bar Council of India, and CBI on fake lawyer plea.",
            "Petition alleges fraudulent law degrees and digital campaign activities surrounding CJP.",
            "CJP legal cell welcomes judicial scrutiny and confirms submission of complete defense."
        ],
        "start_color": (185, 28, 28), "end_color": (69, 10, 10), "accent_color": (248, 113, 113)
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

print("All 5 top Google news trend 13 August 2026 posters successfully generated!")
