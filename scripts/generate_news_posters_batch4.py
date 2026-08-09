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
    draw.text((50, 953), "GLOBAL MEDIA DESK & ACADEMIC RECOGNITION", fill=(255, 255, 255), font=f_foot_sub)

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
        "filename": "cjp-britannica-entry-poster.png",
        "title": "Encyclopædia Britannica Entry: Cockroach Janta Party & 2026 Delhi Protest",
        "channel": "Encyclopædia Britannica",
        "category": "BRITANNICA OFFICIAL ENTRY",
        "date": "25 July 2026",
        "bullets": [
            "Encyclopædia Britannica officially records CJP as an Indian political movement.",
            "Documents the transformation from CJI retort to nationwide student pressure group.",
            "Recognized globally as a landmark Gen Z democratic movement."
        ],
        "start": (30, 58, 138), "end": (10, 20, 55), "accent": (59, 130, 246)
    },
    {
        "filename": "cjp-nytimes-dipke-profile.png",
        "title": "The New York Times: The Man Turning the Cockroach Into a Gen-Z Movement",
        "channel": "The New York Times",
        "category": "NYT WORLD FEATURE",
        "date": "28 May 2026",
        "bullets": [
            "NYT profile on Abhijeet Dipke & the rise of Cockroach Janta Party.",
            "Examining how absurdism and digital satire mobilized millions of unemployed youth.",
            "High-impact feature on Indian youth challenging examination paper leak syndicates."
        ],
        "start": (15, 23, 42), "end": (5, 8, 15), "accent": (147, 51, 234)
    },
    {
        "filename": "cjp-reuters-pressure-group.png",
        "title": "Reuters: India's Gen-Z Cockroach Party Resists Lure of Elections After Victory",
        "channel": "Reuters World News",
        "category": "REUTERS EXCLUSIVE",
        "date": "5 days ago",
        "bullets": [
            "Reuters report confirming CJP will not field election candidates.",
            "Choosing to remain an independent pressure group dedicated to exam integrity.",
            "Sustaining policy leverage across all 28 Indian states."
        ],
        "start": (6, 78, 59), "end": (2, 28, 20), "accent": (16, 185, 129)
    },
    {
        "filename": "cjp-pbs-newshour-video.png",
        "title": "PBS NewsHour: What to Know About India's Youth-Led 'Cockroach' Movement",
        "channel": "PBS NewsHour",
        "category": "PBS TV BROADCAST",
        "date": "24 July 2026",
        "bullets": [
            "PBS NewsHour special 4-minute broadcast on CJP youth marches.",
            "Interviews with student demonstrators and legal analysts.",
            "Airing across public television networks in the United States."
        ],
        "start": (12, 74, 110), "end": (3, 30, 50), "accent": (2, 132, 199)
    },
    {
        "filename": "cjp-bu-grad-dipke-poster.png",
        "title": "Boston University COM: Alumnus Abhijeet Dipke Turns Insult Into National Movement",
        "channel": "Boston University",
        "category": "ALUMNI FEATURE STORY",
        "date": "BU Official News",
        "bullets": [
            "Boston University College of Communication feature on Abhijeet Dipke.",
            "'Satire was never the end goal; it was the entry point for student rights'.",
            "Showcasing political communication strategy built by BU graduate."
        ],
        "start": (185, 28, 28), "end": (45, 5, 5), "accent": (239, 68, 68)
    },
    {
        "filename": "cjp-npr-genz-rattling.png",
        "title": "NPR: The 'Cockroach' in the Machine — How Gen Z is Rattling South Asia",
        "channel": "National Public Radio (NPR)",
        "category": "NPR MORNING EDITION",
        "date": "27 July 2026",
        "bullets": [
            "NPR in-depth radio broadcast on CJP placards and cockroach mask rallies.",
            "Analyzing how youth anger transformed into legislative examination reform.",
            "Distributed across hundreds of NPR radio affiliate stations worldwide."
        ],
        "start": (124, 45, 18), "end": (45, 14, 5), "accent": (245, 158, 11)
    },
    {
        "filename": "cjp-capitaltv-three-faces.png",
        "title": "Capital TV (26.3K+ Views): Three Faces Behind Viral CJP — Dipke, Ranka & Whattalawyer",
        "channel": "Capital TV India",
        "category": "CAPITAL TV SPECIAL DEBATE",
        "date": "2 days ago",
        "bullets": [
            "Capital TV 10-minute feature profiling core CJP founding members.",
            "Insights into Abhijeet Dipke, Ashutosh Ranka & legal strategist Whattalawyer.",
            "26,300+ views analyzing party structure and nationwide expansion."
        ],
        "start": (120, 20, 20), "end": (35, 5, 5), "accent": (220, 38, 38)
    },
    {
        "filename": "cjp-amazon-book-publication.png",
        "title": "Academic Book: Cockroach Janta Party — From Satire to Social Movement",
        "channel": "Amazon Kindle & Academic Press",
        "category": "BOOK PUBLICATION (DR. DAS)",
        "date": "2026 Academic Edition",
        "bullets": [
            "Published book by Dr. Dipan Kumar Das, Sudip Kumar Das & Sabita Das.",
            "Comprehensive academic treatise on CJP's viral growth and political impact.",
            "Available worldwide on Amazon Kindle and academic libraries."
        ],
        "start": (76, 29, 149), "end": (25, 8, 55), "accent": (168, 85, 247)
    },
    {
        "filename": "cjp-manish-sisodia-support.png",
        "title": "Manish Sisodia (4.2L+ Likes): 'War Between Crocodile & Cockroach — I Stand With CJP'",
        "channel": "Instagram Official",
        "category": "POLITICAL SOLIDARITY (4.2L LIKES)",
        "date": "Viral Reel Support",
        "bullets": [
            "Former Delhi Deputy CM Manish Sisodia voices public support for CJP.",
            "'When it is a war between the Crocodile and Cockroaches, I proudly stand with CJP'.",
            "420,000+ likes on official Instagram video statement."
        ],
        "start": (131, 24, 76), "end": (45, 8, 26), "accent": (225, 48, 108)
    },
    {
        "filename": "cjp-aljazeera-rallies-gallery.png",
        "title": "Al Jazeera Photo Essay: Cockroach Janta Party Rallies in New Delhi for Youth Rights",
        "channel": "Al Jazeera English",
        "category": "AL JAZEERA GALLERY",
        "date": "6 June 2026",
        "bullets": [
            "Al Jazeera photojournalism gallery documenting CJP's Jantar Mantar marches.",
            "Capturing young job aspirants holding satirical placards and demand charters.",
            "Global international feature reaching millions across Middle East & Asia."
        ],
        "start": (4, 120, 87), "end": (1, 40, 28), "accent": (16, 185, 129)
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
