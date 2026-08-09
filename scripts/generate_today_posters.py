import os
from PIL import Image, ImageDraw, ImageFont

output_dir = "assets/img/cjp"
os.makedirs(output_dir, exist_ok=True)

def get_font(font_path, size):
    try:
        return ImageFont.truetype(font_path, size)
    except Exception:
        return ImageFont.load_default()

font_dev_bold = "/usr/share/fonts/truetype/noto/NotoSansDevanagari-Bold.ttf"
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

# 1. Generate 8 August 2026 Jharkhand Official Live Bulletin Poster (matching screenshot)
def create_8aug_bulletin():
    width, height = 1024, 1024
    img = Image.new("RGB", (width, height), (0, 0, 0))
    draw = ImageDraw.Draw(img)

    draw_gradient(draw, width, height, (185, 28, 28), (40, 5, 5))

    draw.rectangle([(20, 20), (width - 20, height - 20)], outline=(239, 68, 68), width=4)
    draw.rectangle([(28, 28), (width - 28, height - 28)], outline=(255, 255, 255, 100), width=1)

    # Top Banner
    draw.rectangle([(30, 30), (width - 30, 110)], fill=(220, 38, 38))
    f_header = get_font(font_latin_bold, 30)
    draw.text((50, 50), "📌 8 AUGUST 2026 JHARKHAND LIVE BULLETIN", fill=(255, 255, 255), font=f_header)

    f_date = get_font(font_latin_bold, 22)
    draw.text((width - 240, 56), "DAY 4 PROTEST", fill=(255, 255, 0), font=f_date)

    # Title Box (Devanagari + English)
    y_offset = 140
    f_dev_headline = get_font(font_dev_bold, 40)
    f_latin_headline = get_font(font_latin_bold, 42)

    dev_line1 = "८ अगस्त २०२६ - सीजेपी झारखंड विरोध दिवस ४"
    dev_line2 = "रांची विधानसभा घेराव और प्रदेशव्यापी बंद"
    latin_line3 = "JSSC & JPSC DIGITAL SERVER AUDIT DEMAND"

    draw.rectangle([(45, y_offset), (width - 45, y_offset + 220)], fill=(15, 15, 25, 240), outline=(255, 255, 255), width=2)

    draw.text((65, y_offset + 20), dev_line1, fill=(251, 191, 36), font=f_dev_headline)
    draw.text((65, y_offset + 80), dev_line2, fill=(255, 255, 255), font=f_dev_headline)
    draw.text((65, y_offset + 145), latin_line3, fill=(56, 189, 248), font=f_latin_headline)

    y_offset += 250

    # Bullets Box
    draw.rectangle([(45, y_offset), (width - 45, 870)], fill=(0, 0, 0, 200), outline=(239, 68, 68), width=2)

    f_bullet_head = get_font(font_latin_bold, 26)
    draw.text((65, y_offset + 20), "OFFICIAL BULLETIN HIGHLIGHTS & KEY DEMANDS:", fill=(239, 68, 68), font=f_bullet_head)

    bullets = [
        "Ranchi Assembly Siege: Thousands of student marchers surround Jharkhand Assembly.",
        "Jaipal Singh Munda Stadium Hunger Strike (Day 4) led by student coordinators.",
        "Demanding 3rd-Party Cryptographic Log Audit for JSSC & JPSC exam servers.",
        "Unconditional withdrawal of all police FIRs booked against peaceful student protesters.",
        "Statewide Educational Bandh call across all 24 Jharkhand districts."
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

    filepath = os.path.join(output_dir, "cjp-8aug-jharkhand-live-bulletin-poster.png")
    img.save(filepath, "PNG")
    print(f"Saved {filepath}")

# 2. Generate 9 August 2026 Today's Official Bulletin Poster
def create_9aug_bulletin():
    width, height = 1024, 1024
    img = Image.new("RGB", (width, height), (0, 0, 0))
    draw = ImageDraw.Draw(img)

    draw_gradient(draw, width, height, (2, 132, 199), (5, 30, 60))

    draw.rectangle([(20, 20), (width - 20, height - 20)], outline=(56, 189, 248), width=4)
    draw.rectangle([(28, 28), (width - 28, height - 28)], outline=(255, 255, 255, 100), width=1)

    # Top Banner
    draw.rectangle([(30, 30), (width - 30, 110)], fill=(2, 132, 199))
    f_header = get_font(font_latin_bold, 30)
    draw.text((50, 50), "🚨 9 AUGUST 2026 TODAY'S OFFICIAL BULLETIN", fill=(255, 255, 255), font=f_header)

    f_date = get_font(font_latin_bold, 22)
    draw.text((width - 240, 56), "TODAY'S RELEASE", fill=(255, 255, 0), font=f_date)

    # Title Box (Devanagari + English)
    y_offset = 140
    f_dev_headline = get_font(font_dev_bold, 38)
    f_latin_headline = get_font(font_latin_bold, 40)

    dev_line1 = "९ अगस्त २०२६ - सीजेपी राष्ट्रीय कार्यसमिति एवं 'क्या बोलती पब्लिक'"
    dev_line2 = "२८ राज्यों में छात्र-संवाद यात्रा व डोमेन सुरक्षा निर्देश जारी"
    latin_line3 = "OFFICIAL CENTRAL PORTAL: cockroachjantapartywale.com"

    draw.rectangle([(45, y_offset), (width - 45, y_offset + 220)], fill=(15, 15, 35, 240), outline=(255, 255, 255), width=2)

    draw.text((65, y_offset + 20), dev_line1, fill=(251, 191, 36), font=f_dev_headline)
    draw.text((65, y_offset + 80), dev_line2, fill=(255, 255, 255), font=f_dev_headline)
    draw.text((65, y_offset + 145), latin_line3, fill=(56, 189, 248), font=f_latin_headline)

    y_offset += 250

    # Bullets Box
    draw.rectangle([(45, y_offset), (width - 45, 870)], fill=(0, 0, 0, 200), outline=(56, 189, 248), width=2)

    f_bullet_head = get_font(font_latin_bold, 26)
    draw.text((65, y_offset + 20), "9 AUGUST 2026 TODAY'S NATIONAL KEY UPDATES:", fill=(56, 189, 248), font=f_bullet_head)

    bullets = [
        "September 1 Nationwide Campaign: 'Kya Bolti Public' tour schedule finalized for all 28 states.",
        "Official Domain Advisory: cockroachjantapartywale.com confirmed as sole central portal.",
        "Global Media Recognition: Britannica, BBC News, NYT & Reuters document CJP movement.",
        "Saakshi Evidence Vault: Open portal for student evidence upload & legal protection.",
        "100% Free Digital Membership & ID Cards issued continuously for Indian youth."
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
    draw.text((50, 915), "COCKROACH JANTA PARTY (CJP)", fill=(56, 189, 248), font=f_foot_cjp)

    f_foot_sub = get_font(font_dev_bold, 20)
    draw.text((50, 955), "आज का आधिकारिक बुलेटिन | cockroachjantapartywale.com", fill=(255, 255, 255), font=f_foot_sub)

    f_hashtag = get_font(font_latin_bold, 24)
    hash_txt = "#MainBhiCockroach"
    hash_bbox = draw.textbbox((0, 0), hash_txt, font=f_hashtag)
    hash_w = hash_bbox[2] - hash_bbox[0]
    draw.text((width - 50 - hash_w, 935), hash_txt, fill=(251, 191, 36), font=f_hashtag)

    filepath = os.path.join(output_dir, "cjp-9aug-todays-official-bulletin-poster.png")
    img.save(filepath, "PNG")
    print(f"Saved {filepath}")

create_8aug_bulletin()
create_9aug_bulletin()
