import os
from PIL import Image, ImageDraw, ImageFont

output_dir = "assets/img/cjp"
os.makedirs(output_dir, exist_ok=True)

def get_font(font_path, size):
    try:
        return ImageFont.truetype(font_path, size)
    except Exception:
        return ImageFont.load_default()

font_bold = "/usr/share/fonts/truetype/noto/NotoSans-Bold.ttf"
font_reg = "/usr/share/fonts/truetype/noto/NotoSans-Regular.ttf"
font_dev_bold = "/usr/share/fonts/truetype/noto/NotoSansDevanagari-Bold.ttf"

def draw_vertical_gradient(draw, width, height, start_color, end_color):
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
        if bbox[2] - bbox[0] <= max_width:
            current_line.append(word)
        else:
            if current_line:
                lines.append(" ".join(current_line))
            current_line = [word]
    if current_line:
        lines.append(" ".join(current_line))
    return lines

# ----------------------------------------------------
# Poster 1: JANTAR MANTAR 2.0 SEASON 2 REVOLUTION
# ----------------------------------------------------
def create_poster_1():
    w, h = 1024, 1024
    img = Image.new("RGB", (w, h))
    draw = ImageDraw.Draw(img)
    draw_vertical_gradient(draw, w, h, (180, 20, 20), (15, 5, 5))

    # Outer Double Borders
    draw.rectangle([(20, 20), (w - 20, h - 20)], outline=(251, 191, 36), width=6)
    draw.rectangle([(30, 30), (w - 30, h - 30)], outline=(255, 255, 255), width=2)

    # Top Header Pill
    draw.rectangle([(40, 45), (w - 40, 125)], fill=(220, 38, 38))
    draw.text((65, 62), "🔥 JANTAR MANTAR 2.0 (SEASON 2)", fill=(255, 255, 255), font=get_font(font_bold, 36))
    draw.text((w - 310, 68), "13 AUGUST 2026", fill=(251, 191, 36), font=get_font(font_bold, 24))

    # Main Headline Banner
    draw.rectangle([(50, 155), (w - 50, 380)], fill=(15, 15, 25, 240), outline=(251, 191, 36), width=3)
    draw.text((70, 175), "'दिल्ली में जंतर-मंतर सीजन-२ जल्द'", fill=(251, 191, 36), font=get_font(font_dev_bold, 40))
    draw.text((70, 240), "CJP ALLEGES VENUE SNUB & COERCION", fill=(255, 255, 255), font=get_font(font_bold, 38))
    draw.text((70, 310), "SWARM MOVES FROM PARK TO STREETS", fill=(56, 189, 248), font=get_font(font_bold, 36))

    # Details Box
    draw.rectangle([(50, 410), (w - 50, 890)], fill=(0, 0, 0, 210), outline=(239, 68, 68), width=2)
    draw.text((75, 435), "OFFICIAL ANNOUNCEMENT & MEDIA WIRE:", fill=(251, 191, 36), font=get_font(font_bold, 28))

    bullets = [
        "Abhijeet Dipke: 'Hall owners threatened to cancel CJP venue bookings in Delhi'.",
        "CJP volunteers gathered in public park, declaring Jantar Mantar Season 2 coming soon.",
        "Demanding 100% Meritocracy, NTA/CBI server log audits & rural school overhauls.",
        "National Coverage: Telegraph India, The Wire, Times of India, Amar Ujala & ABP Ananda.",
        "Supreme Court compliance monitored; CJP legal wings deployed in all 28 states."
    ]

    y_cur = 485
    f_b = get_font(font_reg, 26)
    for b in bullets:
        for line in wrap_text(f"• {b}", f_b, 860, draw):
            if y_cur < 870:
                draw.text((75, y_cur), line, fill=(240, 245, 255), font=f_b)
                y_cur += 38

    # Footer Strip
    draw.rectangle([(40, h - 90), (w - 40, h - 40)], fill=(251, 191, 36))
    draw.text((65, h - 80), "COCKROACH JANTA PARTY · TOGETHER WE SURVIVE", fill=(0, 0, 0), font=get_font(font_bold, 26))
    draw.text((w - 320, h - 80), "cockroachjantapartywale.com", fill=(180, 20, 20), font=get_font(font_bold, 22))

    path = os.path.join(output_dir, "cjp-trending-poster-1-season2.png")
    img.save(path, quality=95)
    print(f"Created {path}")

# ----------------------------------------------------
# Poster 2: 100% PURE MERITOCRACY & YOGYATA CHARTER
# ----------------------------------------------------
def create_poster_2():
    w, h = 1024, 1024
    img = Image.new("RGB", (w, h))
    draw = ImageDraw.Draw(img)
    draw_vertical_gradient(draw, w, h, (5, 46, 22), (2, 20, 10))

    # Outer Borders
    draw.rectangle([(20, 20), (w - 20, h - 20)], outline=(74, 222, 128), width=6)
    draw.rectangle([(30, 30), (w - 30, h - 30)], outline=(255, 255, 255), width=2)

    # Top Header
    draw.rectangle([(40, 45), (w - 40, 125)], fill=(16, 185, 129))
    draw.text((65, 62), "💯 100% PURE MERITOCRACY CHARTER", fill=(255, 255, 255), font=get_font(font_bold, 36))
    draw.text((w - 280, 68), "28 STATES RALLY", fill=(251, 191, 36), font=get_font(font_bold, 24))

    # Headline Banner
    draw.rectangle([(50, 155), (w - 50, 380)], fill=(6, 78, 59, 240), outline=(74, 222, 128), width=3)
    draw.text((70, 175), "'आरक्षण हटाओ, शुद्ध योग्यता लाओ'", fill=(251, 191, 36), font=get_font(font_dev_bold, 40))
    draw.text((70, 240), "EQUAL OPPORTUNITY FOR ALL YOUTH", fill=(255, 255, 255), font=get_font(font_bold, 38))
    draw.text((70, 310), "NEET, JEE, UPSC & SSC EXAM TRANSPARENCY", fill=(134, 239, 172), font=get_font(font_bold, 34))

    # Details Box
    draw.rectangle([(50, 410), (w - 50, 890)], fill=(0, 0, 0, 210), outline=(34, 197, 94), width=2)
    draw.text((75, 435), "KEY MERITOCRACY DEMANDS & PROVISIONS:", fill=(74, 222, 128), font=get_font(font_bold, 28))

    bullets = [
        "100% Merit-Based evaluation in all competitive national & state entrance exams.",
        "Economic-only financial scholarships provided to needy students regardless of caste.",
        "Cryptographic 3rd-party audit of exam servers before result publication.",
        "Supreme Court PIL Notice tracking & constitutional equality under Article 14.",
        "Over 10 Lakh youth pledged support nationwide in 28 state rallies."
    ]

    y_cur = 485
    f_b = get_font(font_reg, 26)
    for b in bullets:
        for line in wrap_text(f"• {b}", f_b, 860, draw):
            if y_cur < 870:
                draw.text((75, y_cur), line, fill=(240, 253, 244), font=f_b)
                y_cur += 38

    # Footer
    draw.rectangle([(40, h - 90), (w - 40, h - 40)], fill=(34, 197, 94))
    draw.text((65, h - 80), "CJP REVOLUTIONARY MERIT FRONT · 2026", fill=(0, 0, 0), font=get_font(font_bold, 26))
    draw.text((w - 320, h - 80), "cockroachjantapartywale.com", fill=(5, 46, 22), font=get_font(font_bold, 22))

    path = os.path.join(output_dir, "cjp-trending-poster-2-meritocracy.png")
    img.save(path, quality=95)
    print(f"Created {path}")

# ----------------------------------------------------
# Poster 3: SCHOOL THIK KARO - VILLAGE EDUCATION DRIVE
# ----------------------------------------------------
def create_poster_3():
    w, h = 1024, 1024
    img = Image.new("RGB", (w, h))
    draw = ImageDraw.Draw(img)
    draw_vertical_gradient(draw, w, h, (12, 74, 110), (3, 25, 42))

    draw.rectangle([(20, 20), (w - 20, h - 20)], outline=(56, 189, 248), width=6)
    draw.rectangle([(30, 30), (w - 30, h - 30)], outline=(255, 255, 255), width=2)

    draw.rectangle([(40, 45), (w - 40, 125)], fill=(2, 132, 199))
    draw.text((65, 62), "🚨 'SCHOOL THIK KARO' CAMPAIGN", fill=(255, 255, 255), font=get_font(font_bold, 36))
    draw.text((w - 290, 68), "12 AUGUST 2026", fill=(251, 191, 36), font=get_font(font_bold, 24))

    draw.rectangle([(50, 155), (w - 50, 380)], fill=(12, 74, 110, 240), outline=(56, 189, 248), width=3)
    draw.text((70, 175), "'नया PM आवास बना, तो नए स्कूल क्यों नहीं?'", fill=(251, 191, 36), font=get_font(font_dev_bold, 38))
    draw.text((70, 240), "NATIONWIDE VILLAGE SCHOOL OVERHAUL", fill=(255, 255, 255), font=get_font(font_bold, 38))
    draw.text((70, 310), "SINGLE-TEACHER PRIMARY SCHOOLS DRIVE", fill=(186, 230, 253), font=get_font(font_bold, 34))

    draw.rectangle([(50, 410), (w - 50, 890)], fill=(0, 0, 0, 210), outline=(2, 132, 199), width=2)
    draw.text((75, 435), "CAMPAIGN HIGHLIGHTS & DEMANDS:", fill=(56, 189, 248), font=get_font(font_bold, 28))

    bullets = [
        "Abhijeet Dipke launches 'School Thik Karo' ahead of Independence Day.",
        "Urgent infrastructure overhaul demanded for single-teacher primary schools in rural villages.",
        "Smart classrooms, clean drinking water, toilets & electricity for every rural school.",
        "Direct auditing of state education budgets by local youth auditor squads.",
        "Massive student mobilization across rural districts in 28 states."
    ]

    y_cur = 485
    f_b = get_font(font_reg, 26)
    for b in bullets:
        for line in wrap_text(f"• {b}", f_b, 860, draw):
            if y_cur < 870:
                draw.text((75, y_cur), line, fill=(240, 249, 255), font=f_b)
                y_cur += 38

    draw.rectangle([(40, h - 90), (w - 40, h - 40)], fill=(2, 132, 199))
    draw.text((65, h - 80), "CJP VILLAGE EDUCATION MOVEMENT · 2026", fill=(255, 255, 255), font=get_font(font_bold, 26))
    draw.text((w - 320, h - 80), "cockroachjantapartywale.com", fill=(251, 191, 36), font=get_font(font_bold, 22))

    path = os.path.join(output_dir, "cjp-trending-poster-3-school.png")
    img.save(path, quality=95)
    print(f"Created {path}")

# ----------------------------------------------------
# Poster 4: FREE SPEECH & ANTI-CENSORSHIP EXPOSÉ
# ----------------------------------------------------
def create_poster_4():
    w, h = 1024, 1024
    img = Image.new("RGB", (w, h))
    draw = ImageDraw.Draw(img)
    draw_vertical_gradient(draw, w, h, (70, 15, 100), (20, 5, 35))

    draw.rectangle([(20, 20), (w - 20, h - 20)], outline=(192, 132, 252), width=6)
    draw.rectangle([(30, 30), (w - 30, h - 30)], outline=(255, 255, 255), width=2)

    draw.rectangle([(40, 45), (w - 40, 125)], fill=(126, 34, 206))
    draw.text((65, 62), "🔍 ALT NEWS EXPOSÉ: FREE SPEECH SHIELD", fill=(255, 255, 255), font=get_font(font_bold, 34))
    draw.text((w - 280, 68), "CENSORSHIP ALERT", fill=(251, 191, 36), font=get_font(font_bold, 22))

    draw.rectangle([(50, 155), (w - 50, 380)], fill=(46, 16, 101, 240), outline=(192, 132, 252), width=3)
    draw.text((70, 175), "'तुम अकाउंट शैडोबैन कर सकते हो, आवाज़ नहीं'", fill=(251, 191, 36), font=get_font(font_dev_bold, 36))
    draw.text((70, 240), "GOVT IG TAKEDOWN NOTICES EXPOSED", fill=(255, 255, 255), font=get_font(font_bold, 38))
    draw.text((70, 310), "DIGITAL FREEDOM & RIGHTS DEFENSE", fill=(233, 213, 255), font=get_font(font_bold, 34))

    draw.rectangle([(50, 410), (w - 50, 890)], fill=(0, 0, 0, 210), outline=(147, 51, 234), width=2)
    draw.text((75, 435), "INVESTIGATION FINDINGS & LEGAL ACTION:", fill=(192, 132, 252), font=get_font(font_bold, 28))

    bullets = [
        "Alt News investigation exposes government takedown notices post-Ranchi agitation.",
        "Viral CJP protest clips and student activist handles shadowbanned on Instagram.",
        "CJP Legal Wing files constitutional motion against illegal digital censorship under Article 19.",
        "Distributed decentralized channels deployed across Telegram, WhatsApp & Web.",
        "Truth cannot be silenced: Over 50 Million views generated across independent platforms."
    ]

    y_cur = 485
    f_b = get_font(font_reg, 26)
    for b in bullets:
        for line in wrap_text(f"• {b}", f_b, 860, draw):
            if y_cur < 870:
                draw.text((75, y_cur), line, fill=(250, 245, 255), font=f_b)
                y_cur += 38

    draw.rectangle([(40, h - 90), (w - 40, h - 40)], fill=(126, 34, 206))
    draw.text((65, h - 80), "CJP DIGITAL RIGHTS & FREE SPEECH WING", fill=(255, 255, 255), font=get_font(font_bold, 26))
    draw.text((w - 320, h - 80), "cockroachjantapartywale.com", fill=(251, 191, 36), font=get_font(font_bold, 22))

    path = os.path.join(output_dir, "cjp-trending-poster-4-freespeech.png")
    img.save(path, quality=95)
    print(f"Created {path}")

# ----------------------------------------------------
# Poster 5: 5 HISTORIC BINDING ACCORDS SIGNED
# ----------------------------------------------------
def create_poster_5():
    w, h = 1024, 1024
    img = Image.new("RGB", (w, h))
    draw = ImageDraw.Draw(img)
    draw_vertical_gradient(draw, w, h, (120, 80, 10), (25, 15, 5))

    draw.rectangle([(20, 20), (w - 20, h - 20)], outline=(251, 191, 36), width=6)
    draw.rectangle([(30, 30), (w - 30, h - 30)], outline=(255, 255, 255), width=2)

    draw.rectangle([(40, 45), (w - 40, 125)], fill=(217, 119, 6))
    draw.text((65, 62), "📜 HISTORIC BINDING ACCORDS SIGNED", fill=(255, 255, 255), font=get_font(font_bold, 36))
    draw.text((w - 280, 68), "CABINET ENACTED", fill=(255, 255, 255), font=get_font(font_bold, 22))

    draw.rectangle([(50, 155), (w - 50, 380)], fill=(45, 25, 5, 240), outline=(251, 191, 36), width=3)
    draw.text((70, 175), "'सरकार ने सीजेपी की 5 ऐतिहासिक मांगे मानीं'", fill=(251, 191, 36), font=get_font(font_dev_bold, 38))
    draw.text((70, 240), "UNION CABINET ENACTS ALL 5 CJP DEMANDS", fill=(255, 255, 255), font=get_font(font_bold, 36))
    draw.text((70, 310), "GAZETTE NOTIFICATION PASSED IN PARLIAMENT", fill=(254, 240, 138), font=get_font(font_bold, 32))

    draw.rectangle([(50, 410), (w - 50, 890)], fill=(0, 0, 0, 210), outline=(217, 119, 6), width=2)
    draw.text((75, 435), "5 BINDING NATIONAL ENACTMENTS:", fill=(251, 191, 36), font=get_font(font_bold, 28))

    bullets = [
        "Demand 1: Mandatory 3rd-party cryptographic log audit for NEET & NTA exam servers.",
        "Demand 2: Unconditional release & FIR withdrawal for all student protest marchers.",
        "Demand 3: 5-Year cooling off ban on post-retirement government posts for judges.",
        "Demand 4: Mandatory 50% reservation for women in Parliament & State Assemblies.",
        "Demand 5: Instant disqualification & 6-year ban for post-election party defection."
    ]

    y_cur = 485
    f_b = get_font(font_reg, 26)
    for b in bullets:
        for line in wrap_text(f"• {b}", f_b, 860, draw):
            if y_cur < 870:
                draw.text((75, y_cur), line, fill=(254, 243, 199), font=f_b)
                y_cur += 38

    draw.rectangle([(40, h - 90), (w - 40, h - 40)], fill=(251, 191, 36))
    draw.text((65, h - 80), "VICTORY OF THE SWARM · COCKROACH JANTA PARTY", fill=(0, 0, 0), font=get_font(font_bold, 24))
    draw.text((w - 320, h - 80), "cockroachjantapartywale.com", fill=(180, 20, 20), font=get_font(font_bold, 22))

    path = os.path.join(output_dir, "cjp-trending-poster-5-demands.png")
    img.save(path, quality=95)
    print(f"Created {path}")

if __name__ == "__main__":
    create_poster_1()
    create_poster_2()
    create_poster_3()
    create_poster_4()
    create_poster_5()
