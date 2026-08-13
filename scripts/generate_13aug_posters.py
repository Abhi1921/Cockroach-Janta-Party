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
        "title": "'Jantar Mantar Season 2 Soon': CJP Alleges BJP Pressure Forces Delhi Meet to Public Park",
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
        "filename": "cjp-13aug-sc-fake-lawyers-plea.png",
        "title": "SC Seeks Responses from Centre, BCI & CBI on Plea Alleging Fake Lawyers & CJP Activities",
        "channel_name": "Daily Pioneer / Legal Desk",
        "category_tag": "SUPREME COURT NOTICE",
        "pub_date": "13 August 2026",
        "bullets": [
            "Supreme Court issues notices to Centre, Bar Council of India, and CBI.",
            "PIL alleges fraudulent law degrees, fake advocates, and CJP campaign activities.",
            "CJP legal cell confirms full compliance and defense submission in Apex Court."
        ],
        "start_color": (185, 28, 28), "end_color": (69, 10, 10), "accent_color": (248, 113, 113)
    },
    {
        "filename": "cjp-12aug-hyperpolitics-thehindu.png",
        "title": "The Hindu Feature: Hyperpolitics — CJP Protests & Its Algorithmic Aftermath",
        "channel_name": "The Hindu · Special Analysis",
        "category_tag": "THE HINDU HYPERPOLITICS",
        "pub_date": "12 August 2026",
        "bullets": [
            "The Hindu in-depth analysis on Gen-Z protests and internalised algorithmic rationality.",
            "Examines how Instagram & YouTube generated a burgeoning corpus of youth political activism.",
            "Analyzes CJP's shift from digital satire to nationwide grassroots pressure movement."
        ],
        "start_color": (3, 105, 161), "end_color": (12, 74, 110), "accent_color": (56, 189, 248)
    },
    {
        "filename": "cjp-11aug-meet-12-members-toi.png",
        "title": "From IIT Graduate to CA: Meet the 12 Members Leading the Cockroach Janta Party",
        "channel_name": "The Times of India",
        "category_tag": "TOI LEADERSHIP FEATURE",
        "pub_date": "11 August 2026",
        "bullets": [
            "Times of India profiles the 12 core leadership members driving CJP.",
            "Includes engineers, lawyers, two CAs, an entrepreneur, a journalist, and hotel grad.",
            "Highlights how professional youth background shapes CJP's data-driven advocacy."
        ],
        "start_color": (109, 40, 217), "end_color": (46, 16, 101), "accent_color": (192, 132, 252)
    },
    {
        "filename": "cjp-12aug-ndtv-rural-schools.png",
        "title": "CJP Launches Nationwide Campaign to Improve Village Schools; Asks Parents to Act",
        "channel_name": "NDTV / India Today",
        "category_tag": "NDTV & INDIA TODAY WIRE",
        "pub_date": "12 August 2026",
        "bullets": [
            "Abhijeet Dipke announces nationwide drive for primary education in rural villages.",
            "Urges parents to demand basic amenities, toilet facilities, and teacher recruitment.",
            "'Village children still forced to walk long distances; basic infrastructure missing'."
        ],
        "start_color": (16, 185, 129), "end_color": (6, 78, 59), "accent_color": (52, 211, 153)
    },
    {
        "filename": "cjp-20july-reclaim-jantar-mantar-hindu.png",
        "title": "The Hindu: CJP Delhi Highlights — Dipke & Protesters Reclaim Jantar Mantar Site",
        "channel_name": "The Hindu · Delhi Highlights",
        "category_tag": "JANTAR MANTAR RECLAIM",
        "pub_date": "20 July 2026 (Highlights Archive)",
        "bullets": [
            "The Hindu documents CJP protesters reclaiming dismantled Jantar Mantar protest site.",
            "Abhijeet Dipke leads peaceful sit-in awaiting central government response to 5 demands.",
            "Landmark moment establishing CJP's presence at India's iconic protest grounds."
        ],
        "start_color": (217, 119, 6), "end_color": (120, 53, 15), "accent_color": (251, 191, 36)
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

print("All 6 new 13 August 2026 posters successfully generated!")
