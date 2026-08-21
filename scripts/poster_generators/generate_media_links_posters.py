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
    draw.text((65, y_offset + 20), "KEY HIGHLIGHTS & MEDIA WIRE COVERAGE:", fill=accent_color, font=f_bullet_head)
    
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
    draw.text((50, 953), "GLOBAL MEDIA & PRESS WIRE ARCHIVE", fill=(255, 255, 255), font=f_foot_sub)

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
        "filename": "cjp-chatham-house-global-impact.png",
        "title": "Has the 'Cockroach' Movement Changed Indian Politics? — Chatham House",
        "channel_name": "Chatham House / International Affairs",
        "category_tag": "CHATHAM HOUSE GLOBAL REPORT",
        "pub_date": "29 July 2026",
        "bullets": [
            "Chatham House publishes in-depth global analysis on Cockroach Janta Party movement.",
            "Documents how Gen-Z political satire redefined youth civic activism across South Asia.",
            "Highlights demands for cryptographic exam audits, 100% meritocracy, & transparency."
        ],
        "start_color": (15, 23, 42), "end_color": (30, 41, 59), "accent_color": (56, 189, 248)
    },
    {
        "filename": "cjp-thewire-jantar-mantar-whats-next.png",
        "title": "Three Sets of Questions: Cockroach Janta Party After Jantar Mantar, What's Next?",
        "channel_name": "The Wire / Media Analysis Desk",
        "category_tag": "THE WIRE SPECIAL REPORT",
        "pub_date": "29 July 2026",
        "bullets": [
            "The Wire raises three critical questions on CJP's post-Jantar Mantar national trajectory.",
            "Examined student leadership, 28-state mobilization, and non-partisan pressure tactics.",
            "Focuses on upcoming 'Kya Bolti Public' nationwide student dialogue tour."
        ],
        "start_color": (185, 28, 28), "end_color": (69, 10, 10), "accent_color": (248, 113, 113)
    },
    {
        "filename": "cjp-toi-ashutosh-ranka-confrontation.png",
        "title": "Heated Confrontation Between CJP Co-Convenor Ashutosh Ranka & Authorities",
        "channel_name": "Times of India / Video Desk",
        "category_tag": "TOI VIDEO EXCLUSIVE",
        "pub_date": "30 July 2026",
        "bullets": [
            "Times of India releases video of CJP co-convener Ashutosh Ranka confronting authorities.",
            "Ranka challenges official restrictions on school audits and paper leak evidence submission.",
            "Video garners hundreds of thousands of views across national news networks."
        ],
        "start_color": (217, 119, 6), "end_color": (120, 53, 15), "accent_color": (251, 191, 36)
    },
    {
        "filename": "cjp-abc-australia-sunday-extra.png",
        "title": "Cockroach Janta Party: How Courtroom Insult Sparked Youth Revolution — ABC Australia",
        "channel_name": "ABC Net Australia / Sunday Extra",
        "category_tag": "ABC AUSTRALIA SPECIAL",
        "pub_date": "30 July 2026",
        "bullets": [
            "ABC Radio National features CJP in worldwide 'Sunday Extra' international broadcast.",
            "Analyzes how Abhijeet Dipke turned 'cockroach' insult into a 30M+ youth movement.",
            "Explores digital activism, satirical memes, and real-world student policy impacts."
        ],
        "start_color": (109, 40, 217), "end_color": (46, 16, 101), "accent_color": (192, 132, 252)
    },
    {
        "filename": "cjp-frontline-jantar-mantar-future.png",
        "title": "Cockroach Janta Party After Jantar Mantar: What's Next? — Frontline Magazine",
        "channel_name": "Frontline Magazine / The Hindu",
        "category_tag": "FRONTLINE FEATURE",
        "pub_date": "31 July 2026",
        "bullets": [
            "Frontline Magazine column evaluates CJP's transition from protest rallies to policy push.",
            "Analyzes 5 Cabinet accords signed into law including NEET 3rd-party log audits.",
            "Profiles youth coordinators leading grassroots state-level chapters."
        ],
        "start_color": (16, 185, 129), "end_color": (6, 78, 59), "accent_color": (52, 211, 153)
    },
    {
        "filename": "cjp-youtube-shorts-changed-politics.png",
        "title": "Has the 'Cockroach' Movement Changed Indian Politics? — Viral Video Report",
        "channel_name": "YouTube Shorts / CJP Media Wire",
        "category_tag": "VIRAL YOUTUBE SHORTS",
        "pub_date": "August 2026",
        "bullets": [
            "Viral YouTube video exploring CJP's transformative impact on Indian youth politics.",
            "Features interviews with student aspirants, founder Abhijeet Dipke, & media experts.",
            "Verified working YouTube Embed ID: auFZ2nuS6Jc."
        ],
        "start_color": (220, 38, 38), "end_color": (60, 5, 5), "accent_color": (248, 113, 113)
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

print("All media links poster PNGs generated successfully!")
