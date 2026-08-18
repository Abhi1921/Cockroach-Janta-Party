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
    draw.text((65, y_offset + 20), "KEY HIGHLIGHTS & BREAKING MEDIA COVERAGE:", fill=accent_color, font=f_bullet_head)
    
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
    hash_txt = "#SchoolThikKaro"
    hash_bbox = draw.textbbox((0, 0), hash_txt, font=f_hashtag)
    hash_w = hash_bbox[2] - hash_bbox[0]
    draw.text((width - 50 - hash_w, 935), hash_txt, fill=(251, 191, 36), font=f_hashtag)

    filepath = os.path.join(output_dir, filename)
    img.save(filepath, "PNG")
    print(f"Saved {filepath}")

posters = [
    {
        "filename": "cjp-18aug-indiatoday-bengal-beaten.png",
        "title": "Cockroach Janta Party Volunteer's Father Beaten to Death in Bengal, 8 Arrested",
        "channel_name": "India Today / PTI Wire / Telegraph / Republic",
        "category_tag": "BENGAL VOLUNTEER ATTACK",
        "pub_date": "18 August 2026",
        "bullets": [
            "Sheikh Abdul Hafeez, father of CJP volunteer in Bankura, West Bengal, beaten to death.",
            "West Bengal police arrest 8 accused following intense public outrage & CJP protest call.",
            "CJP founder Abhijeet Dipke demands fast-track trial & protection for volunteer families."
        ],
        "start_color": (220, 38, 38), "end_color": (50, 5, 5), "accent_color": (248, 113, 113)
    },
    {
        "filename": "cjp-18aug-bloomberg-worry-for-modi.png",
        "title": "Why India's 'Cockroach' Movement Is a Worry for Modi — Bloomberg Global Feature",
        "channel_name": "Bloomberg / Financial Times / Reuters / Straits Times",
        "category_tag": "BLOOMBERG GLOBAL FEATURE",
        "pub_date": "18 August 2026",
        "bullets": [
            "Bloomberg feature details how social media joke turned into major headache for political establishment.",
            "Gen-Z movement mobilizes millions across India demanding exam transparency and meritocracy.",
            "Global analysts note CJP shifting political narratives ahead of upcoming state elections."
        ],
        "start_color": (109, 40, 217), "end_color": (30, 10, 70), "accent_color": (192, 132, 252)
    },
    {
        "filename": "cjp-18aug-aljazeera-modi-bjp.png",
        "title": "Will India's 'Cockroach' Movement Force Modi's BJP to Rethink Its Politics? — Al Jazeera",
        "channel_name": "Al Jazeera / BBC World / France 24 / DW News",
        "category_tag": "AL JAZEERA SPECIAL REPORT",
        "pub_date": "18 August 2026",
        "bullets": [
            "Al Jazeera documents how CJP student movement challenges ruling BJP media dominance.",
            "Youth frustration over paper leaks and unemployment uniting voters across regional lines.",
            "CJP grassroots swarms force policy shifts and mandatory recruitment exam audits."
        ],
        "start_color": (217, 119, 6), "end_color": (70, 30, 5), "accent_color": (251, 191, 36)
    },
    {
        "filename": "cjp-18aug-telegraph-school-thik-karo-rajasthan.png",
        "title": "CJP's 'School Thik Karo' Campaign Rattles Rajasthan; Govt Tightens Entry & Filming Rules",
        "channel_name": "Telegraph India / HT / Indian Express / NDTV",
        "category_tag": "RAJASTHAN SCHOOL CAMPAIGN",
        "pub_date": "18 August 2026",
        "bullets": [
            "CJP co-convener Ashutosh Ranka announces surprise inspection visits to government schools.",
            "Rajasthan government responds by tightening school entry and filming regulations.",
            "CJP vows to continue auditing rural school infrastructure and basic student facilities."
        ],
        "start_color": (16, 185, 129), "end_color": (5, 50, 35), "accent_color": (52, 211, 153)
    },
    {
        "filename": "cjp-18aug-thehindu-abhijeet-dipke-school-cleaning.png",
        "title": "CJP Founder Abhijeet Dipke Kicks Off 'School Thik Karo' School Cleaning Campaign",
        "channel_name": "The Hindu / Deccan Herald / Times of India / Outlook",
        "category_tag": "SCHOOL CLEANING DRIVE",
        "pub_date": "18 August 2026",
        "bullets": [
            "CJP founder Abhijeet Dipke personally leads school cleaning drive at government school in Pune.",
            "Hundreds of youth volunteers join hands to renovate classrooms, sanitation, & drinking water.",
            "Drive inspires nationwide #SchoolThikKaro student volunteer initiative across 15 states."
        ],
        "start_color": (2, 132, 199), "end_color": (5, 40, 70), "accent_color": (56, 189, 248)
    },
    {
        "filename": "cjp-18aug-opindia-dimagi-naxal.png",
        "title": "Explained: Dimagi Naxal Party & Its Alleged Connection to Cockroach Janta Party",
        "channel_name": "OpIndia / Pioneer / Capital TV / Organiser",
        "category_tag": "OPINDIA EXPLAINER",
        "pub_date": "18 August 2026",
        "bullets": [
            "OpIndia analysis explores social media links between Dimagi Naxal Party, CJP & AAP.",
            "Mysterious political satire handles trigger online debates on Gen-Z political messaging.",
            "CJP reiterates its strict non-violent, satirical, student rights meritocracy stance."
        ],
        "start_color": (185, 28, 28), "end_color": (60, 5, 5), "accent_color": (248, 113, 113)
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

print("All 6 Google News 18 August 2026 posters generated successfully!")
