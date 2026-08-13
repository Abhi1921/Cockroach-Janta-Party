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

def create_jantar_mantar_2_poster_1():
    width, height = 1024, 1024
    img = Image.new("RGB", (width, height), (0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Crimson to dark black gradient background
    draw_gradient(draw, width, height, (220, 38, 38), (20, 5, 5))

    # Outer border
    draw.rectangle([(20, 20), (width - 20, height - 20)], outline=(251, 191, 36), width=5)
    draw.rectangle([(28, 28), (width - 28, height - 28)], outline=(255, 255, 255, 120), width=2)

    # Top Header
    draw.rectangle([(30, 30), (width - 30, 115)], fill=(239, 68, 68))
    f_header = get_font(font_latin_bold, 36)
    draw.text((50, 50), "🔥 JANTAR MANTAR 2.0 (SEASON 2)", fill=(255, 255, 255), font=f_header)

    f_date = get_font(font_latin_bold, 24)
    draw.text((width - 290, 58), "13 AUGUST 2026", fill=(251, 191, 36), font=f_date)

    # Main Headline Banner
    y_offset = 145
    draw.rectangle([(45, y_offset), (width - 45, y_offset + 220)], fill=(15, 15, 25, 240), outline=(251, 191, 36), width=3)

    f_dev_headline = get_font(font_dev_bold, 38)
    f_latin_headline = get_font(font_latin_bold, 40)

    draw.text((65, y_offset + 20), "'दिल्ली में जंतर-मंतर सीजन-२ जल्द'", fill=(251, 191, 36), font=f_dev_headline)
    draw.text((65, y_offset + 80), "CJP ALLEGES BJP VENUE SNUB & COERCION", fill=(255, 255, 255), font=f_latin_headline)
    draw.text((65, y_offset + 145), "YOUTH SWARM MOVES FROM PARK TO STREETS", fill=(56, 189, 248), font=f_latin_headline)

    y_offset += 250

    # Key Highlights Box
    draw.rectangle([(45, y_offset), (width - 45, 870)], fill=(0, 0, 0, 210), outline=(239, 68, 68), width=2)

    f_bullet_head = get_font(font_latin_bold, 26)
    draw.text((65, y_offset + 20), "OFFICIAL ANNOUNCEMENT & MEDIA COVERAGE:", fill=(251, 191, 36), font=f_bullet_head)

    bullets = [
        "Abhijeet Dipke: 'Hall owners threatened with coercion (उल्टा लटकाने की धमकी) to cancel CJP meet'.",
        "CJP volunteers gathered in a public park, declaring 'Jantar Mantar Season 2 is coming very soon'.",
        "Demanding 100% Meritocracy, NTA/CBI paper leak audits, and school infrastructure overhauls.",
        "Wide coverage: Telegraph India, The Wire, Times of India, Deccan Herald, Amar Ujala & ABP Ananda.",
        "Supreme Court compliance monitored; CJP legal teams dispatched across all 28 Indian states."
    ]

    b_y = y_offset + 65
    f_bullet = get_font(font_latin_reg, 27)

    for b in bullets:
        b_lines = wrap_text(f"• {b}", f_bullet, 880, draw)
        for bl in b_lines:
            if b_y < 850:
                draw.text((65, b_y), bl, fill=(240, 245, 255), font=f_bullet)
                b_y += 38

    # Bottom Footer
    draw.rectangle([(30, 890), (width - 30, 994)], fill=(10, 10, 15))
    f_foot_cjp = get_font(font_latin_bold, 30)
    draw.text((50, 915), "COCKROACH JANTA PARTY (CJP)", fill=(239, 68, 68), font=f_foot_cjp)

    f_foot_sub = get_font(font_dev_bold, 20)
    draw.text((50, 955), "जंतर-मंतर सीजन-२ आधिकारिक पोस्ट | cockroachjantapartywale.com", fill=(255, 255, 255), font=f_foot_sub)

    f_hashtag = get_font(font_latin_bold, 24)
    hash_txt = "#JantarMantar2"
    hash_bbox = draw.textbbox((0, 0), hash_txt, font=f_hashtag)
    hash_w = hash_bbox[2] - hash_bbox[0]
    draw.text((width - 50 - hash_w, 935), hash_txt, fill=(251, 191, 36), font=f_hashtag)

    filepath = os.path.join(output_dir, "cjp-jantar-mantar-2-poster.png")
    img.save(filepath, "PNG")
    print(f"Saved {filepath}")

def create_jantar_mantar_2_poster_2():
    width, height = 1024, 1024
    img = Image.new("RGB", (width, height), (0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Deep Orange-Violet Gradient
    draw_gradient(draw, width, height, (180, 83, 9), (30, 10, 50))

    draw.rectangle([(20, 20), (width - 20, height - 20)], outline=(251, 191, 36), width=4)
    draw.rectangle([(28, 28), (width - 28, height - 28)], outline=(255, 255, 255, 100), width=1)

    draw.rectangle([(30, 30), (width - 30, 110)], fill=(217, 119, 6))
    f_header = get_font(font_latin_bold, 34)
    draw.text((50, 52), "📢 JANTAR MANTAR SEASON 2.0 MOVEMENT", fill=(255, 255, 255), font=f_header)

    f_date = get_font(font_latin_bold, 24)
    draw.text((width - 250, 58), "AUGUST 2026", fill=(255, 255, 255), font=f_date)

    f_badge = get_font(font_latin_bold, 22)
    draw.rectangle([(50, 140), (600, 185)], fill=(0, 0, 0), outline=(251, 191, 36), width=2)
    draw.text((65, 150), "⚡ SEASON 2 NATIONAL DEMAND CHARTER", fill=(251, 191, 36), font=f_badge)

    f_title = get_font(font_latin_bold, 38)
    title_lines = [
        "JANTAR MANTAR 2.0: CJP'S 5 BINDING YOUTH DEMANDS FOR EDUCATION & INTEGRITY"
    ]
    title_wrapped = wrap_text(title_lines[0], f_title, 920, draw)

    y_offset = 200
    headline_height = len(title_wrapped) * 52 + 30
    draw.rectangle([(45, y_offset), (width - 45, y_offset + headline_height)], fill=(15, 15, 25, 240), outline=(255, 255, 255, 180), width=2)

    for line in title_wrapped:
        draw.text((65, y_offset + 15), line, fill=(255, 255, 255), font=f_title)
        y_offset += 52

    y_offset += 40
    draw.rectangle([(45, y_offset), (width - 45, 870)], fill=(0, 0, 0, 190), outline=(251, 191, 36), width=2)

    f_bullet_head = get_font(font_latin_bold, 26)
    draw.text((65, y_offset + 20), "5 BINDING DEMANDS OF JANTAR MANTAR 2.0:", fill=(251, 191, 36), font=f_bullet_head)

    bullets = [
        "1. Mandatory Cryptographic Log Audits for all NTA, JSSC & JPSC exam servers.",
        "2. Nationwide 'School Thik Karo' overhaul for village primary & secondary schools.",
        "3. 100% Meritocracy & Economic Scholarships for impoverished job aspirants.",
        "4. Immediate dropping of all police FIRs booked against student marchers nationwide.",
        "5. Complete digital transparency & protection against social media shadowbans."
    ]

    b_y = y_offset + 65
    f_bullet = get_font(font_latin_reg, 27)

    for b in bullets:
        b_lines = wrap_text(b, f_bullet, 880, draw)
        for bl in b_lines:
            if b_y < 850:
                draw.text((65, b_y), bl, fill=(240, 240, 245), font=f_bullet)
                b_y += 38

    draw.rectangle([(30, 890), (width - 30, 994)], fill=(10, 10, 15))
    f_foot_cjp = get_font(font_latin_bold, 30)
    draw.text((50, 915), "COCKROACH JANTA PARTY (CJP)", fill=(251, 191, 36), font=f_foot_cjp)

    f_foot_sub = get_font(font_latin_bold, 22)
    draw.text((50, 953), "JOIN THE SWARM · cockroachjantapartywale.com", fill=(255, 255, 255), font=f_foot_sub)

    f_hashtag = get_font(font_latin_bold, 24)
    hash_txt = "#JantarMantarSeason2"
    hash_bbox = draw.textbbox((0, 0), hash_txt, font=f_hashtag)
    hash_w = hash_bbox[2] - hash_bbox[0]
    draw.text((width - 50 - hash_w, 935), hash_txt, fill=(251, 191, 36), font=f_hashtag)

    filepath = os.path.join(output_dir, "cjp-jantar-mantar-season2-full.png")
    img.save(filepath, "PNG")
    print(f"Saved {filepath}")

create_jantar_mantar_2_poster_1()
create_jantar_mantar_2_poster_2()
