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
    f_header = get_font(font_latin_bold, 32)
    draw.text((50, 52), f"📰 {channel_name.upper()}", fill=(255, 255, 255), font=f_header)

    f_date = get_font(font_latin_bold, 24)
    date_bbox = draw.textbbox((0, 0), pub_date, font=f_date)
    date_w = date_bbox[2] - date_bbox[0]
    draw.text((width - 50 - date_w, 58), pub_date, fill=(255, 255, 255), font=f_date)

    f_badge = get_font(font_latin_bold, 22)
    draw.rectangle([(50, 140), (600, 185)], fill=(0, 0, 0), outline=accent_color, width=2)
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
    draw.text((50, 953), "25 AUGUST 2026 NATIONWIDE BREAKING BULLETIN", fill=(255, 255, 255), font=f_foot_sub)

    f_hashtag = get_font(font_latin_bold, 24)
    hash_txt = "#Sept5DelhiMarch"
    hash_bbox = draw.textbbox((0, 0), hash_txt, font=f_hashtag)
    hash_w = hash_bbox[2] - hash_bbox[0]
    draw.text((width - 50 - hash_w, 935), hash_txt, fill=(251, 191, 36), font=f_hashtag)

    filepath = os.path.join(output_dir, filename)
    img.save(filepath, "PNG")
    print(f"Saved {filepath}")

posters = [
    {
        "filename": "cjp-25aug-sept5-delhi-march.png",
        "title": "CJP Announces Nationwide Protest March in Delhi on September 5: India Gate to Police HQ",
        "channel": "NDTV / Times of India / HT / DW / Aaj Tak",
        "category": "BREAKING · DELHI MARCH 2.0",
        "date": "25 August 2026",
        "bullets": [
            "Barely 4 weeks after Jantar Mantar wins, CJP calls for massive march on Sept 5.",
            "Protest to march from India Gate to Delhi Police HQ over broken commitments.",
            "Families of deceased NEET victims and lathi-charge victims to lead front line."
        ],
        "start": (185, 28, 28), "end": (45, 5, 5), "accent": (239, 68, 68)
    },
    {
        "filename": "cjp-25aug-delhi-police-intel.png",
        "title": "Delhi Police Steps Up Intel Gathering & Ground Preparedness Ahead of CJP Sept 5 March",
        "channel": "Deccan Chronicle / ANI News Wire",
        "category": "SECURITY & INTEL PREPAREDNESS",
        "date": "25 August 2026",
        "bullets": [
            "Police Chief orders intel wing to gather advance verified participant profiles.",
            "Field units tracking state-wise mobilization, stay points, and leader movements.",
            "Checking wireless communications to ensure law & order during high youth turnout."
        ],
        "start": (30, 58, 138), "end": (10, 20, 55), "accent": (59, 130, 246)
    },
    {
        "filename": "cjp-25aug-sc-hearing-privacy-suit.png",
        "title": "SC Hearing on Violence Panel & Delhi HC Issues Notice on Saurav Das Privacy Suit",
        "channel": "Bar & Bench / The New Indian Express",
        "category": "SUPREME COURT & HC LEGAL DESK",
        "date": "25 August 2026",
        "bullets": [
            "SG Tushar Mehta opposes SC plea to reconstitute panel on CJP protest violence.",
            "Delhi HC issues notice & summons to Abhijit Iyer Mitra, X, Google & news portals.",
            "CJP spokespersons maintain strict constitutional defense of student right to protest."
        ],
        "start": (109, 40, 217), "end": (30, 10, 70), "accent": (192, 132, 252)
    },
    {
        "filename": "cjp-25aug-bungalow-vs-school.png",
        "title": "'Fix Schools, Not Lavish Homes': CJP Flags ₹92 Cr Minister Bungalow Bill & Wins Jaipur School",
        "channel": "The Hindu / Daily Pioneer / Rediff",
        "category": "SCHOOL INFRA AUDIT · RAMPURA VICTORY",
        "date": "25 August 2026",
        "bullets": [
            "CJP exposes ₹92 Cr maintenance cost for Union Ministers' official bungalows.",
            "Following CJP pressure, Rajasthan Govt announces Rampura primary school build on Sep 1.",
            "FIR filed against founder Dipke for school inspection turned into nationwide rallying cry."
        ],
        "start": (217, 119, 6), "end": (70, 30, 5), "accent": (251, 191, 36)
    },
    {
        "filename": "cjp-25aug-iit-suicides-protest.png",
        "title": "CJP Flags 'Structural Crisis' in IITs After Student Deaths; Backs IIT Delhi Protests",
        "channel": "Outlook India / Scroll.in / Telegraph",
        "category": "IIT REFORMS · MENTAL HEALTH AUDIT",
        "date": "25 August 2026",
        "bullets": [
            "CJP highlights 65 student suicides across IITs in 5 years following IIT Delhi death.",
            "Demands academic pressure reduction, grading transparency & mental health councils.",
            "Extends full solidarity to student assemblies protesting institutional apathy."
        ],
        "start": (6, 78, 59), "end": (2, 28, 20), "accent": (16, 185, 129)
    },
    {
        "filename": "cjp-25aug-kangana-vs-dipke.png",
        "title": "Kangana Ranaut Takes Dig at CJP Founder Dipke; CJP Swarm Responds with 30M Youth Facts",
        "channel": "India Today / NDTV / Public Debate",
        "category": "PUBLIC DEBATE & MEDIA CLASH",
        "date": "25 August 2026",
        "bullets": [
            "Kangana Ranaut targets CJP founder's English speaking skills on social media.",
            "CJP responds: 'Our movement is powered by merit & 30M youth, not elite gatekeeping'.",
            "National discussion highlights shift from online satire to ground-level accountability."
        ],
        "start": (180, 20, 90), "end": (50, 5, 25), "accent": (244, 114, 182)
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

print("✅ Generated 6 posters for August 25, 2026 CJP news updates successfully!")
