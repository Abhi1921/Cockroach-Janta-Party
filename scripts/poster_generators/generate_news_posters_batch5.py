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
    f_header = get_font(font_latin_bold, 34)
    draw.text((50, 52), f"📰 {channel_name.upper()}", fill=(255, 255, 255), font=f_header)

    f_date = get_font(font_latin_bold, 24)
    date_bbox = draw.textbbox((0, 0), pub_date, font=f_date)
    date_w = date_bbox[2] - date_bbox[0]
    draw.text((width - 50 - date_w, 58), pub_date, fill=(255, 255, 255), font=f_date)

    f_badge = get_font(font_latin_bold, 22)
    draw.rectangle([(50, 140), (450, 185)], fill=(0, 0, 0), outline=accent_color, width=2)
    draw.text((65, 150), f"⚡ {category_tag}", fill=accent_color, font=f_badge)

    f_title = get_font(font_latin_bold, 44)
    title_lines = wrap_text(title, f_title, 920, draw)
    y_offset = 210

    headline_height = len(title_lines) * 58 + 40
    draw.rectangle([(45, y_offset), (width - 45, y_offset + headline_height)], fill=(15, 15, 25, 230), outline=(255, 255, 255, 180), width=2)

    for line in title_lines:
        draw.text((65, y_offset + 20), line, fill=(255, 255, 255), font=f_title)
        y_offset += 58

    y_offset += 50

    draw.rectangle([(45, y_offset), (width - 45, 870)], fill=(0, 0, 0, 180), outline=accent_color, width=2)
    
    f_bullet_head = get_font(font_latin_bold, 26)
    draw.text((65, y_offset + 20), "KEY HIGHLIGHTS & MEDIA DETAILS:", fill=accent_color, font=f_bullet_head)
    
    b_y = y_offset + 65
    f_bullet = get_font(font_latin_reg, 30)

    for b in bullets:
        b_lines = wrap_text(f"• {b}", f_bullet, 880, draw)
        for bl in b_lines:
            if b_y < 850:
                draw.text((65, b_y), bl, fill=(230, 235, 245), font=f_bullet)
                b_y += 42

    draw.rectangle([(30, 890), (width - 30, 994)], fill=(10, 10, 15))
    f_foot_cjp = get_font(font_latin_bold, 30)
    draw.text((50, 915), "COCKROACH JANTA PARTY (CJP)", fill=(239, 68, 68), font=f_foot_cjp)
    
    f_foot_sub = get_font(font_latin_bold, 22)
    draw.text((50, 953), "JHARKHAND YOUTH AGITATION & PRESS WIRE", fill=(255, 255, 255), font=f_foot_sub)

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
        "filename": "cjp-jharkhand-talks-deadlock.png",
        "title": "Jharkhand Student Protest: Govt Talks Fail; Devendra Nath Mahto Hunger Strike Day 16",
        "channel": "The Hindu / Times of India",
        "category": "JHARKHAND TALKS DEADLOCK",
        "date": "9 August 2026",
        "bullets": [
            "Round 2 of talks between Jharkhand ministers and student panel ends in deadlock.",
            "Devendra Nath Mahto enters 16th day of hunger strike at Jaipal Singh Munda Stadium.",
            "Students demand direct talks with CM Hemant Soren & cancellation of 14th JPSC exam."
        ],
        "start": (185, 28, 28), "end": (45, 5, 5), "accent": (239, 68, 68)
    },
    {
        "filename": "cjp-ashutosh-ranka-ie-interview.png",
        "title": "Indian Express Interview: CJP Co-Convener Ashutosh Ranka on Jharkhand Movement",
        "channel": "The Indian Express (19K Views)",
        "category": "ASHUTOSH RANKA EXCLUSIVE",
        "date": "9 August 2026",
        "bullets": [
            "Indian Express exclusive video interview (19.2K+ views) with Ashutosh Ranka.",
            "CJP leadership outlines national support for JSSC/JPSC exam transparency.",
            "Calling for 3rd-party server log audits and quashing of police cases."
        ],
        "start": (12, 74, 110), "end": (3, 30, 50), "accent": (2, 132, 199)
    },
    {
        "filename": "cjp-abhi-niyu-explainer.png",
        "title": "Abhi and Niyu (1.3L+ Views): Jharkhand Student Protest EXPLAINED",
        "channel": "Abhi and Niyu YouTube",
        "category": "ABHI & NIYU (1.3L VIEWS)",
        "date": "8 August 2026",
        "bullets": [
            "15-minute special explainer video by Abhi and Niyu surpassing 130,000 views.",
            "Analyzing JSSC-JPSC paper leak allegations, student demands & CJP role.",
            "Highlighting how Indian youth across states demand 100% Meritocracy."
        ],
        "start": (124, 45, 18), "end": (45, 14, 5), "accent": (245, 158, 11)
    },
    {
        "filename": "cjp-ndtv-flashlight-march.png",
        "title": "NDTV Special: Thousands Hold Flashlight & Torch March in Ranchi Over Exam Leaks",
        "channel": "NDTV India",
        "category": "NDTV FLASHLIGHT MARCH",
        "date": "9 August 2026",
        "bullets": [
            "NDTV broadcast covering massive night flashlight march in Ranchi.",
            "Thousands of students march peacefully from Morabadi Ground to Assembly gates.",
            "Demand CBI investigation into JPSC and JSSC recruitment irregularities."
        ],
        "start": (6, 78, 59), "end": (2, 28, 20), "accent": (16, 185, 129)
    },
    {
        "filename": "cjp-piyush-mishra-support.png",
        "title": "Piyush Mishra Visits Ranchi Site: 'Saw Pain & Tears in Their Eyes — I Stand With Youth'",
        "channel": "PTI News & Media Desk",
        "category": "PIYUSH MISHRA SOLIDARITY",
        "date": "8 August 2026",
        "bullets": [
            "Acclaimed singer-actor Piyush Mishra visits Ranchi protest site in person.",
            "Supplying mats, tarpaulins, food, and financial support for 4 days.",
            "'I love the youth; their hardship inspired me to participate and stand with them'."
        ],
        "start": (76, 29, 149), "end": (25, 8, 55), "accent": (168, 85, 247)
    },
    {
        "filename": "cjp-bbc-jharkhand-agitation.png",
        "title": "BBC News: A New Youth Agitation Grips Jharkhand After 'Cockroach' Victory",
        "channel": "BBC News India",
        "category": "BBC NEWS REPORT",
        "date": "8 August 2026",
        "bullets": [
            "BBC News report on how CJP victory ignited student movements in Jharkhand.",
            "Over 20,000 job aspirants gather at Jaipal Singh Munda Stadium, Ranchi.",
            "Demand overhaul of state public service commission exams."
        ],
        "start": (185, 28, 28), "end": (45, 5, 5), "accent": (239, 68, 68)
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
