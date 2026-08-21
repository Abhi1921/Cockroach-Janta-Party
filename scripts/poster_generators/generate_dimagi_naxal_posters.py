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
    draw.text((width - 50 - date_w, 57), pub_date, fill=(255, 255, 255), font=f_date)

    draw.rectangle([(50, 135), (420, 175)], fill=(255, 255, 255))
    f_tag = get_font(font_latin_bold, 20)
    draw.text((65, 143), f"⚡ {category_tag.upper()}", fill=accent_color, font=f_tag)

    f_title = get_font(font_latin_bold, 40)
    title_lines = wrap_text(title, f_title, width - 100, draw)
    y_text = 200
    for line in title_lines:
        bbox = draw.textbbox((0, 0), line, font=f_title)
        draw.rectangle([(45, y_text - 5), (width - 45, y_text + (bbox[3] - bbox[0]) + 15)], fill=(0, 0, 0, 160))
        draw.text((50, y_text), line, fill=(255, 255, 250), font=f_title)
        y_text += (bbox[3] - bbox[0]) + 24

    draw.line([(50, y_text + 10), (width - 50, y_text + 10)], fill=accent_color, width=3)
    y_text += 35

    f_bullet = get_font(font_latin_bold, 26)
    for bullet in bullets:
        b_lines = wrap_text(f"• {bullet}", f_bullet, width - 120, draw)
        for bl in b_lines:
            draw.text((60, y_text), bl, fill=(255, 245, 230), font=f_bullet)
            y_text += 38
        y_text += 12

    y_footer = height - 120
    draw.rectangle([(30, y_footer), (width - 30, height - 30)], fill=(15, 12, 10))
    f_cjp = get_font(font_latin_bold, 26)
    f_sub = get_font(font_latin_reg, 18)
    draw.text((50, y_footer + 15), "🪳 COCKROACH JANTA PARTY (CJP) MEDIA DESK", fill=(220, 38, 38), font=f_cjp)
    draw.text((50, y_footer + 50), "Official Parody, Satire & Student Rights Advocacy · cockroachjantapartywale.com", fill=(200, 200, 200), font=f_sub)

    filepath = os.path.join(output_dir, filename)
    img.save(filepath, "PNG")
    print(f"✅ Generated poster: {filepath}")

create_poster(
    "cjp-20aug-dimagi-naxal-explainer.png",
    "EXPLAINED: 'Dimagi Naxal' Label — How Political Parties Smear Youth Protest Movements",
    "OPINDIA & NATIONAL MEDIA WIRE",
    "20 AUGUST 2026 SPECIAL EXPLAINER",
    "20 AUGUST 2026",
    [
        "What is 'Dimagi Naxal'? Political term used by critics alleging ideological warfare by educated youth.",
        "Connection to CJP & AAP: Media reports analyze how CJP's satire and protest tactics draw political debates.",
        "CJP Response: Abhijeet Dipke clarifies: 'Demanding exam transparency & rural school desks is NOT Naxalism!'",
        "Youth Rights & Constitution: Civic satire protected under Article 19(1)(a) against political smearing."
    ],
    (45, 10, 10), (120, 20, 20), (220, 38, 38)
)

create_poster(
    "dimagi-naxal-poster.png",
    "Dimagi Naxal vs Student Rights: The Truth Behind CJP & Youth Agitation Debates",
    "PRESS & EXPLAINER BUREAU",
    "DIMAGI NAXAL DOSSIER",
    "20 AUGUST 2026",
    [
        "Explaining the 'Dimagi Naxal' label used in TV news debates & OpIndia feature articles.",
        "CJP strictly 100% non-partisan: Rejects election tickets and alliance lures from all political parties.",
        "Focus on 100% Meritocracy Act, NEET server log audits, and rural primary school infrastructure.",
        "Over 30 Million verified student volunteers reject political name-calling and focus on results."
    ],
    (30, 15, 60), (70, 20, 100), (124, 58, 237)
)
