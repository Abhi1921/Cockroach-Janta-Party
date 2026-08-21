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
    hash_txt = "#SchoolThikKaro"
    hash_bbox = draw.textbbox((0, 0), hash_txt, font=f_hashtag)
    hash_w = hash_bbox[2] - hash_bbox[0]
    draw.text((width - 50 - hash_w, 935), hash_txt, fill=(251, 191, 36), font=f_hashtag)

    filepath = os.path.join(output_dir, filename)
    img.save(filepath, "PNG")
    print(f"Saved {filepath}")

posters = [
    {
        "filename": "cjp-12aug-school-thik-karo.png",
        "title": "'School Thik Karo': CJP Founder Abhijeet Dipke Announces Nationwide Campaign to Improve Village Schools",
        "channel_name": "Hindustan Times / The Hindu / Outlook",
        "category_tag": "SCHOOL THIK KARO CAMPAIGN",
        "pub_date": "12 August 2026",
        "bullets": [
            "CJP founder Abhijeet Dipke launches 'School Thik Karo' campaign ahead of Independence Day.",
            "Dipke: 'New PM House, why not new schools? Rural children failed in the worst way'.",
            "Nationwide mobilization demanding infrastructure, single-teacher school fixes, and merit hiring."
        ],
        "start_color": (16, 185, 129), "end_color": (6, 78, 59), "accent_color": (52, 211, 153)
    },
    {
        "filename": "cjp-12aug-supreme-court-cbi-notice.png",
        "title": "Supreme Court Seeks Response from Centre & CBI on CJP Probe PIL Over CJI Remark Content",
        "channel_name": "The Times of India / Deccan Herald",
        "category_tag": "SUPREME COURT NOTICE",
        "pub_date": "12 August 2026",
        "bullets": [
            "SC issues notice to Centre, BCI, and CBI on plea seeking probe into CJP digital monetization.",
            "Petition alleges CJP twisted CJI remarks for viral digital content and youth campaigns.",
            "CJP legal bureau confirms top advocates will present full defense in Supreme Court."
        ],
        "start_color": (185, 28, 28), "end_color": (69, 10, 10), "accent_color": (248, 113, 113)
    },
    {
        "filename": "cjp-12aug-instagram-censorship-altnews.png",
        "title": "Alt News Report: Government Takedown Orders Trigger Sweeping Instagram Censorship Post-CJP Protest",
        "channel_name": "Alt News",
        "category_tag": "ALT NEWS CENSORSHIP EXPOSÉ",
        "pub_date": "12 August 2026",
        "bullets": [
            "Alt News uncovers series of government censorship orders targeting CJP protest clips.",
            "Dozens of student activist Instagram posts and video reels shadowbanned or blocked.",
            "CJP condemns digital censorship and demands transparent IT Act compliance records."
        ],
        "start_color": (109, 40, 217), "end_color": (46, 16, 101), "accent_color": (192, 132, 252)
    },
    {
        "filename": "cjp-12aug-sonu-nigam-statement.png",
        "title": "Sonu Nigam Reveals Why He Didn't Comment on CJP Protests: 'Promised My Father I Won't'",
        "channel_name": "The Indian Express",
        "category_tag": "INDIAN EXPRESS EXCLUSIVE",
        "pub_date": "12 August 2026",
        "bullets": [
            "Singer Sonu Nigam addresses fans asking about his silence during CJP youth protests.",
            "Nigam: 'Promised my father I won't enter political debates, but respect youth energy'.",
            "Expresses sympathy for student issues while maintaining his personal pledge."
        ],
        "start_color": (217, 119, 6), "end_color": (120, 53, 15), "accent_color": (251, 191, 36)
    },
    {
        "filename": "cjp-12aug-thewire-cjp-journey.png",
        "title": "The Wire #DigitalArrest: Isha Vermani & Meghnad Unpack CJP's Journey & Youth Agitation",
        "channel_name": "The Wire (YouTube / Facebook)",
        "category_tag": "THE WIRE SPECIAL PODCAST",
        "pub_date": "12 August 2026",
        "bullets": [
            "The Wire's 21-minute video episode unpacking the evolution of Cockroach Janta Party.",
            "Analysis of youth protest dynamics, political reactions, and Gen-Z digital tactics.",
            "Examines impact of CJP's nationwide campaigns on state and national elections."
        ],
        "start_color": (3, 105, 161), "end_color": (12, 74, 110), "accent_color": (56, 189, 248)
    },
    {
        "filename": "cjp-12aug-jharkhand-protest-day20.png",
        "title": "Jharkhand Protest Day 20: Deadlock Persists Over 2 Key Demands; 100+ ABVP Workers Detained",
        "channel_name": "Times of India / NDTV / Telegraph",
        "category_tag": "JHARKHAND SIEGE DAY 20",
        "pub_date": "12 August 2026",
        "bullets": [
            "Jharkhand student agitation enters Day 20 with 6 hunger strikers including Devendra Mahto.",
            "Over 100 ABVP workers detained during Vidhan Sabha march; lathicharge condemned.",
            "Kangana Ranaut jabs Naseeruddin Shah over protest silence; political row deepens."
        ],
        "start_color": (190, 18, 60), "end_color": (76, 5, 25), "accent_color": (251, 113, 133)
    },
    {
        "filename": "cjp-12aug-jharkhand-cid-leak-report.png",
        "title": "Viral Report: 120 Out of 150 JSSC-CGL Questions Were Leaked — Shelved CID Probe Sparks Rage",
        "channel_name": "Instagram / Student Media Wire",
        "category_tag": "57K+ LIKES VIRAL EXPOSÉ",
        "pub_date": "12 August 2026",
        "bullets": [
            "Viral Instagram post (57.6K+ likes) exposes shelved 2025 CID report on JSSC-CGL paper leak.",
            "120 out of 150 questions were leaked; state later gave clean chit, infuriating aspirants.",
            "Students demand immediate cancellation, independent CBI probe, and systemic audit."
        ],
        "start_color": (220, 38, 38), "end_color": (69, 10, 10), "accent_color": (248, 113, 113)
    },
    {
        "filename": "cjp-12aug-national-support-jharkhand.png",
        "title": "National Solidarity: Kejriwal, Chidambaram & Vishal Dadlani Stand With Jharkhand Protesters",
        "channel_name": "Instagram / X Wire",
        "category_tag": "NATIONAL SOLIDARITY WAVE",
        "pub_date": "12 August 2026",
        "bullets": [
            "Arvind Kejriwal & P. Chidambaram appeal to govt to stop police force against students.",
            "Musician Vishal Dadlani (63.5K+ likes): 'May the Youth of India rise and truth prevail'.",
            "CJP coordinates medical and legal aid for hunger striking students in Ranchi."
        ],
        "start_color": (124, 58, 237), "end_color": (46, 16, 101), "accent_color": (167, 139, 250)
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

print("All 8 new 12 August 2026 posters successfully generated!")
