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

def create_media_poster(filename, title, channel_name, category_tag, pub_date, bullets, start_color, end_color, accent_color):
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
    draw.rectangle([(50, 140), (520, 185)], fill=(0, 0, 0), outline=accent_color, width=2)
    draw.text((65, 150), f"⚡ {category_tag}", fill=accent_color, font=f_badge)

    f_title = get_font(font_latin_bold, 40)
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
    draw.text((65, y_offset + 20), "KEY HIGHLIGHTS & MEDIA WIRE DETAILS:", fill=accent_color, font=f_bullet_head)
    
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
    draw.text((50, 953), "JHARKHAND YOUTH AGITATION & PRESS WIRE", fill=(255, 255, 255), font=f_foot_sub)

    f_hashtag = get_font(font_latin_bold, 24)
    hash_txt = "#MainBhiCockroach"
    hash_bbox = draw.textbbox((0, 0), hash_txt, font=f_hashtag)
    hash_w = hash_bbox[2] - hash_bbox[0]
    draw.text((width - 50 - hash_w, 935), hash_txt, fill=(251, 191, 36), font=f_hashtag)

    filepath = os.path.join(output_dir, filename)
    img.save(filepath, "PNG")
    print(f"Saved {filepath}")

def create_10aug_bulletin():
    width, height = 1024, 1024
    img = Image.new("RGB", (width, height), (0, 0, 0))
    draw = ImageDraw.Draw(img)

    draw_gradient(draw, width, height, (185, 28, 28), (40, 5, 5))

    draw.rectangle([(20, 20), (width - 20, height - 20)], outline=(239, 68, 68), width=4)
    draw.rectangle([(28, 28), (width - 28, height - 28)], outline=(255, 255, 255, 100), width=1)

    # Top Banner
    draw.rectangle([(30, 30), (width - 30, 110)], fill=(220, 38, 38))
    f_header = get_font(font_latin_bold, 30)
    draw.text((50, 50), "📌 10 AUGUST 2026 JHARKHAND BREAKING BULLETIN", fill=(255, 255, 255), font=f_header)

    f_date = get_font(font_latin_bold, 22)
    draw.text((width - 240, 56), "TODAY'S RELEASE", fill=(255, 255, 0), font=f_date)

    # Title Box (Devanagari + English)
    y_offset = 140
    f_dev_headline = get_font(font_dev_bold, 38)
    f_latin_headline = get_font(font_latin_bold, 40)

    dev_line1 = "१० अगस्त २०२६ - सीजेपी झारखंड छात्र आंदोलन एवं १४वीं JPSC रद्द"
    dev_line2 = "विधानसभा घेराव, आँसू गैस व संस्थापक अभिजीत दिपके का पूर्ण समर्थन"
    latin_line3 = "JSSC & JPSC DIGITAL SERVER AUDIT DEMAND"

    draw.rectangle([(45, y_offset), (width - 45, y_offset + 220)], fill=(15, 15, 25, 240), outline=(255, 255, 255), width=2)

    draw.text((65, y_offset + 20), dev_line1, fill=(251, 191, 36), font=f_dev_headline)
    draw.text((65, y_offset + 80), dev_line2, fill=(255, 255, 255), font=f_dev_headline)
    draw.text((65, y_offset + 145), latin_line3, fill=(56, 189, 248), font=f_latin_headline)

    y_offset += 250

    # Bullets Box
    draw.rectangle([(45, y_offset), (width - 45, 870)], fill=(0, 0, 0, 200), outline=(239, 68, 68), width=2)

    f_bullet_head = get_font(font_latin_bold, 26)
    draw.text((65, y_offset + 20), "10 AUGUST 2026 OFFICIAL BULLETIN HIGHLIGHTS:", fill=(239, 68, 68), font=f_bullet_head)

    bullets = [
        "14th JPSC Prelims Cancelled: State Govt agrees to cancel exam & review recruitment orders.",
        "Ranchi Vidhan Sabha Siege: Police fire tear gas, water cannons & lathicharge near assembly.",
        "CJP Founder Abhijeet Dipke: 'In 100% solidarity with protesting Jharkhand students'.",
        "Demanding 3rd-Party Cryptographic Log Audit for JSSC & JPSC exam servers.",
        "Unconditional withdrawal of all police FIRs booked against peaceful student protesters."
    ]

    b_y = y_offset + 65
    f_bullet = get_font(font_latin_reg, 28)

    for b in bullets:
        b_lines = wrap_text(f"• {b}", f_bullet, 880, draw)
        for bl in b_lines:
            if b_y < 850:
                draw.text((65, b_y), bl, fill=(240, 240, 245), font=f_bullet)
                b_y += 38

    # Footer
    draw.rectangle([(30, 890), (width - 30, 994)], fill=(10, 10, 15))
    f_foot_cjp = get_font(font_latin_bold, 30)
    draw.text((50, 915), "COCKROACH JANTA PARTY (CJP)", fill=(239, 68, 68), font=f_foot_cjp)

    f_foot_sub = get_font(font_dev_bold, 20)
    draw.text((50, 955), "आधिकारिक सूचना बुलेटिन | cockroachjantapartywale.com", fill=(255, 255, 255), font=f_foot_sub)

    f_hashtag = get_font(font_latin_bold, 24)
    hash_txt = "#MainBhiCockroach"
    hash_bbox = draw.textbbox((0, 0), hash_txt, font=f_hashtag)
    hash_w = hash_bbox[2] - hash_bbox[0]
    draw.text((width - 50 - hash_w, 935), hash_txt, fill=(251, 191, 36), font=f_hashtag)

    filepath = os.path.join(output_dir, "cjp-10aug-todays-official-bulletin-poster.png")
    img.save(filepath, "PNG")
    print(f"Saved {filepath}")

# 1. Media Poster: Assembly Clash & Tear Gas
create_media_poster(
    filename="cjp-10aug-jharkhand-assembly-clash.png",
    title="Police Fire Tear Gas at Jharkhand Assembly; Govt Agrees to Cancel 14th JPSC Exam",
    channel_name="BBC / Al Jazeera / Republic World / NDTV",
    category_tag="JHARKHAND ASSEMBLY CLASH & JPSC CANCELLED",
    pub_date="10 August 2026",
    bullets=[
        "Police fire tear gas, water cannons & baton charge as students storm Vidhan Sabha gates in Ranchi.",
        "Major Agitation Victory: State Government agrees to cancel 14th JPSC preliminary exam.",
        "Students & CJP demand CBI probe for JSSC-CGL, server audits, and quashing of police cases."
    ],
    start_color=(185, 28, 28), end_color=(45, 5, 5), accent_color=(239, 68, 68)
)

# 2. Media Poster: CJP Founder Support & Political Showdown
create_media_poster(
    filename="cjp-10aug-cjp-bjp-showdown.png",
    title="JPSC-JSSC Protest: CJP Founder Abhijeet Dipke Backs Jharkhand Students in Solidarity",
    channel_name="The Times of India / India Today / Lallantop",
    category_tag="ABHIJEET DIPKE SOLIDARITY & POLITICS",
    pub_date="10 August 2026",
    bullets=[
        "CJP Founder Abhijeet Dipke issues central statement: 'Standing shoulder-to-shoulder with student marchers'.",
        "BJP targets CJP leadership over student mobilization; LoP Rahul Gandhi condemns police lathicharge.",
        "CJP demands immediate release of all detained student leaders and 100% Meritocracy."
    ],
    start_color=(12, 74, 110), end_color=(3, 30, 50), accent_color=(2, 132, 199)
)

# 3. Daily Bulletin Poster
create_10aug_bulletin()
