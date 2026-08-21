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
font_deva_bold = "/usr/share/fonts/truetype/noto/NotoSansDevanagari-Bold.ttf"
font_deva_reg = "/usr/share/fonts/truetype/noto/NotoSansDevanagari-Regular.ttf"

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

def create_poster(filename, title, channel_name, category_tag, pub_date, bullets, start_color, end_color, accent_color, is_marathi=False):
    width, height = 1024, 1024
    img = Image.new("RGB", (width, height), (0, 0, 0))
    draw = ImageDraw.Draw(img)

    draw_gradient(draw, width, height, start_color, end_color)

    draw.rectangle([(20, 20), (width - 20, height - 20)], outline=accent_color, width=4)
    draw.rectangle([(28, 28), (width - 28, height - 28)], outline=(255, 255, 255, 100), width=1)

    draw.rectangle([(30, 30), (width - 30, 110)], fill=accent_color)
    f_header = get_font(font_latin_bold, 34)
    draw.text((50, 52), f"🌐 {channel_name.upper()}", fill=(255, 255, 255), font=f_header)

    f_date = get_font(font_latin_bold, 24)
    date_bbox = draw.textbbox((0, 0), pub_date, font=f_date)
    date_w = date_bbox[2] - date_bbox[0]
    draw.text((width - 50 - date_w, 58), pub_date, fill=(255, 255, 255), font=f_date)

    f_badge = get_font(font_latin_bold, 22)
    draw.rectangle([(50, 140), (450, 185)], fill=(0, 0, 0), outline=accent_color, width=2)
    draw.text((65, 150), f"⚡ {category_tag}", fill=accent_color, font=f_badge)

    if is_marathi:
        f_title = get_font(font_deva_bold, 44)
    else:
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
    draw.text((65, y_offset + 20), "KEY HIGHLIGHTS & MEDIA LINK DETAILS:", fill=accent_color, font=f_bullet_head)
    
    b_y = y_offset + 65
    if is_marathi:
        f_bullet = get_font(font_deva_reg, 30)
    else:
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
    draw.text((50, 953), "OFFICIAL MEDIA VAULT & SOCIAL NETWORKS", fill=(255, 255, 255), font=f_foot_sub)

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
        "filename": "cjp-france24-storm-poster.png",
        "title": "'Cockroach Janta Party' takes India by storm • FRANCE 24 English",
        "channel": "FRANCE 24 English",
        "category": "WORLD TV BROADCAST",
        "date": "2 weeks ago",
        "bullets": [
            "France 24 English feature report on CJP's historic youth revolution.",
            "Examining CJI remarks, Jantar Mantar rallies, and Pradhan's resignation.",
            "68K+ views on YouTube broadcast with global acclaim."
        ],
        "start": (15, 23, 42), "end": (5, 8, 15), "accent": (2, 132, 199)
    },
    {
        "filename": "cjp-instagram-viral-reel-poster.png",
        "title": "Viral Reel (1.2Cr+ Likes): COCKROACH JANTA PARTY — 'देश नहीं झुकने देंगे'",
        "channel": "Instagram Official",
        "category": "VIRAL REEL (1.2CR LIKES)",
        "date": "24 July 2026",
        "bullets": [
            "Over 1.2 Crore (12 Million+) likes on official Instagram Reel.",
            "Abhijeet Dipke & student leaders declare: 'Cockroaches are resilient'.",
            "Highest engaging Indian youth political video of 2026."
        ],
        "start": (131, 24, 76), "end": (45, 8, 26), "accent": (225, 48, 108)
    },
    {
        "filename": "cjp-cfr-analysis-poster.png",
        "title": "Council on Foreign Relations: India's Cockroach Party Protests Have a Powerful Impact",
        "channel": "Council on Foreign Relations",
        "category": "CFR STRATEGIC ANALYSIS",
        "date": "31 July 2026",
        "bullets": [
            "CFR special publication on CJP's reclamation of judicial slurs.",
            "How Gen-Z digital activism forced minister resignation & exam audit law.",
            "Benchmark case study in peaceful democratic pressure groups."
        ],
        "start": (20, 35, 75), "end": (8, 15, 35), "accent": (59, 130, 246)
    },
    {
        "filename": "cjp-saakshi-vault-poster.png",
        "title": "Saakshi Vault: CJP Official Legal Evidence Archive & Protester Defense Network",
        "channel": "CJP Saakshi Vault",
        "category": "PRESERVE EVIDENCE & DEFEND",
        "date": "Official Vault Launch",
        "bullets": [
            "Preserve video evidence, CCTV footage & drone captures from rallies.",
            "Legal defense support for peaceful student activists across 28 states.",
            "Official protection against copycat, impersonator & scam sites."
        ],
        "start": (120, 20, 20), "end": (35, 5, 5), "accent": (220, 38, 38)
    },
    {
        "filename": "cjp-instagram-27m-followers-poster.png",
        "title": "Cockroach Janta Party (@cockroachjantaparty) Crosses 2.7 Crore Followers",
        "channel": "Instagram Handle",
        "category": "2.7CR+ FOLLOWERS MILESTONE",
        "date": "Official Handle",
        "bullets": [
            "2.7 Crore (27 Million+) active followers on Instagram handle.",
            "India's largest digital youth civic network founded by Abhijeet Dipke.",
            "Direct student feedback, live rally updates & legal assistance link in bio."
        ],
        "start": (118, 12, 100), "end": (40, 4, 34), "accent": (193, 53, 132)
    },
    {
        "filename": "cjp-facebook-major-announcement.png",
        "title": "Facebook Official: CJP Major Announcement on September 'Kya Bolti Public' Tour",
        "channel": "Facebook Official",
        "category": "14.5K+ COMMUNITY WIRE",
        "date": "Live Post",
        "bullets": [
            "Official Facebook page announcement by Dipke, Ranka & legal team.",
            "Roadmap for September nationwide campus dialogues and public forums.",
            "Empowering students to question political representatives in every district."
        ],
        "marathi": True,
        "start": (24, 119, 242), "end": (8, 40, 82), "accent": (59, 130, 246)
    },
    {
        "filename": "cjp-frontline-columns-poster.png",
        "title": "Frontline Magazine: From Jantar Mantar to State Repression & Voter Roll Battles",
        "channel": "Frontline Columns",
        "category": "POLITICAL ANALYSIS",
        "date": "17h ago",
        "bullets": [
            "In-depth Frontline analysis on CJP's post-resignation strategy.",
            "Fighting police intimidation & monitoring student FIR closure orders.",
            "Scaling voter verification squads across university campuses."
        ],
        "start": (99, 27, 27), "end": (35, 8, 8), "accent": (220, 38, 38)
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
        is_marathi=p.get("marathi", False)
    )
