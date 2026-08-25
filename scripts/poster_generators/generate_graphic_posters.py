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

def draw_gradient_rect(draw, width, height, color1, color2):
    r1, g1, b1 = color1
    r2, g2, b2 = color2
    for y in range(height):
        r = int(r1 + (r2 - r1) * (y / height))
        g = int(g1 + (g2 - g1) * (y / height))
        b = int(b1 + (b2 - b1) * (y / height))
        draw.line([(0, y), (width, y)], fill=(r, g, b))

def draw_tricolor_strip(draw, y_start, width, height=18):
    h3 = height // 3
    draw.rectangle([(0, y_start), (width, y_start + h3)], fill=(255, 153, 51))
    draw.rectangle([(0, y_start + h3), (width, y_start + 2*h3)], fill=(255, 255, 255))
    draw.rectangle([(0, y_start + 2*h3), (width, y_start + height)], fill=(19, 136, 8))

def draw_stamp(draw, center_x, center_y, radius, text, bg_color, text_color, outline_color):
    draw.ellipse([center_x - radius, center_y - radius, center_x + radius, center_y + radius], fill=bg_color, outline=outline_color, width=4)
    draw.ellipse([center_x - radius + 6, center_y - radius + 6, center_x + radius - 6, center_y + radius - 6], outline=outline_color, width=2)
    f = get_font(font_bold, 14)
    bbox = draw.textbbox((0, 0), text, font=f)
    w = bbox[2] - bbox[0]
    h = bbox[3] - bbox[1]
    draw.text((center_x - w//2, center_y - h//2), text, fill=text_color, font=f)

def build_poster_1(): # Sept 5 Delhi March
    w, h = 1000, 1000
    img = Image.new("RGB", (w, h), (20, 5, 5))
    draw = ImageDraw.Draw(img)

    draw_gradient_rect(draw, w, h, (180, 20, 20), (30, 5, 5))
    draw.rectangle([(25, 25), (w-25, h-25)], outline=(245, 158, 11), width=6)
    draw.rectangle([(35, 35), (w-35, h-35)], outline=(255, 255, 255), width=2)

    # Top Header Banner
    draw.rectangle([(35, 35), (w-35, 120)], fill=(220, 38, 38))
    draw_tricolor_strip(draw, 120, w, 15)

    f_top = get_font(font_bold, 36)
    draw.text((60, 55), "🪳 COCKROACH JANTA PARTY (CJP)", fill=(255, 255, 255), font=f_top)
    
    f_badge = get_font(font_bold, 20)
    draw.text((w - 320, 65), "🔥 NATIONAL PROTEST CALL", fill=(254, 240, 138), font=f_badge)

    # Main Hero Title Box
    draw.rectangle([(60, 170), (w-60, 370)], fill=(0, 0, 0), outline=(239, 68, 68), width=4)
    f_big = get_font(font_bold, 64)
    draw.text((85, 190), "SEPTEMBER 5", fill=(251, 191, 36), font=f_big)
    draw.text((85, 270), "DELHI PROTEST MARCH", fill=(255, 255, 255), font=f_big)

    # Route Banner Box
    draw.rectangle([(60, 400), (w-60, 480)], fill=(220, 38, 38))
    f_route = get_font(font_bold, 32)
    draw.text((85, 420), "📍 INDIA GATE  ➔  DELHI POLICE HQ", fill=(255, 255, 255), font=f_route)

    # Demand Grid Box
    draw.rectangle([(60, 510), (w-60, 770)], fill=(15, 23, 42), outline=(245, 158, 11), width=3)
    f_dh = get_font(font_bold, 28)
    draw.text((85, 530), "✊ KEY MARCH DEMANDS:", fill=(251, 191, 36), font=f_dh)

    f_db = get_font(font_bold, 24)
    demands = [
        "1. Justice for Deceased NEET Aspirants & Exam Paper Leak Audit",
        "2. Action Against Police Lathi-Charge on Student Protesters",
        "3. Release PM CARES Funds for Village Primary Schools",
        "4. Mandatory Cryptographic Audit Logs for Entrance Exams"
    ]
    dy = 575
    for d in demands:
        draw.text((85, dy), f"• {d}", fill=(241, 245, 249), font=f_db)
        dy += 45

    # Visual Stamp
    draw_stamp(draw, 850, 640, 80, "100% MERITOCRACY\nCJP SWARM", (220, 38, 38), (255, 255, 255), (251, 191, 36))

    # Bottom Footer
    draw_tricolor_strip(draw, 875, w, 15)
    draw.rectangle([(35, 890), (w-35, h-35)], fill=(15, 15, 15))
    
    f_foot = get_font(font_bold, 26)
    draw.text((60, 915), "JOIN THE YOUTH SWARM · REGISTER FREE AT CJP.ORG", fill=(251, 191, 36), font=f_foot)
    
    f_hash = get_font(font_bold, 22)
    draw.text((w - 380, 918), "#Sept5DelhiMarch #MainBhiCockroach", fill=(255, 255, 255), font=f_hash)

    img.save("assets/img/cjp/cjp-25aug-sept5-delhi-march.png", "PNG")
    print("Saved graphic poster 1")

def build_poster_2(): # School Thik Karo
    w, h = 1000, 1000
    img = Image.new("RGB", (w, h), (180, 83, 9))
    draw = ImageDraw.Draw(img)

    draw_gradient_rect(draw, w, h, (217, 119, 6), (69, 26, 3))
    draw.rectangle([(25, 25), (w-25, h-25)], outline=(251, 191, 36), width=6)

    # Top Banner
    draw.rectangle([(35, 35), (w-35, 120)], fill=(180, 83, 9))
    draw_tricolor_strip(draw, 120, w, 15)

    f_top = get_font(font_bold, 38)
    draw.text((60, 55), "🏫 SCHOOL THIK KARO! ABHIYAN", fill=(255, 255, 255), font=f_top)

    # Main Hero Text
    draw.rectangle([(60, 170), (w-60, 390)], fill=(0, 0, 0), outline=(251, 191, 36), width=4)
    f_big = get_font(font_bold, 60)
    draw.text((85, 190), "FIX VILLAGE SCHOOLS,", fill=(251, 191, 36), font=f_big)
    draw.text((85, 265), "NOT LAVISH BUNGALOWS!", fill=(255, 255, 255), font=f_big)
    f_sub = get_font(font_bold, 26)
    draw.text((85, 340), "CJP Exposes ₹92 Cr Union Minister Residence Maintenance Bill", fill=(226, 232, 240), font=f_sub)

    # Expose Card
    draw.rectangle([(60, 420), (w-60, 760)], fill=(15, 23, 42), outline=(220, 38, 38), width=3)
    f_eh = get_font(font_bold, 30)
    draw.text((85, 445), "🚨 CJP VILLAGE INFRASTRUCTURE DEMANDS:", fill=(239, 68, 68), font=f_eh)

    f_eb = get_font(font_bold, 24)
    points = [
        "• Re-allocate Unused PM CARES Funds to 1-Teacher Primary Schools",
        "• Install Proper Benches, Blackboards & Clean Drinking Water",
        "• Construct Toilet Blocks & Provide Free Digital Study Cards",
        "• VICTORY: Rajasthan Govt Announces Rampura School Build Starting Sep 1"
    ]
    py = 495
    for p in points:
        draw.text((85, py), p, fill=(241, 245, 249), font=f_eb)
        py += 45

    # Stamp
    draw_stamp(draw, 840, 640, 85, "RAMPURA WIN!\nSEP 1 BUILD", (16, 185, 129), (255, 255, 255), (251, 191, 36))

    # Footer
    draw_tricolor_strip(draw, 875, w, 15)
    draw.rectangle([(35, 890), (w-35, h-35)], fill=(15, 15, 15))
    f_foot = get_font(font_bold, 26)
    draw.text((60, 915), "BETTER SCHOOLS · STRONGER BHARAT · CJP MOVEMENT", fill=(251, 191, 36), font=f_foot)

    img.save("assets/img/cjp/cjp-12aug-school-thik-karo.png", "PNG")
    print("Saved graphic poster 2")

def build_poster_3(): # 100% Meritocracy
    w, h = 1000, 1000
    img = Image.new("RGB", (w, h), (20, 83, 45))
    draw = ImageDraw.Draw(img)

    draw_gradient_rect(draw, w, h, (22, 101, 52), (6, 40, 20))
    draw.rectangle([(25, 25), (w-25, h-25)], outline=(34, 197, 94), width=6)

    # Top Banner
    draw.rectangle([(35, 35), (w-35, 120)], fill=(22, 101, 52))
    draw_tricolor_strip(draw, 120, w, 15)
    f_top = get_font(font_bold, 38)
    draw.text((60, 55), "💯 100% MERITOCRACY CHARTER", fill=(255, 255, 255), font=f_top)

    # Main Big Box
    draw.rectangle([(60, 170), (w-60, 390)], fill=(0, 0, 0), outline=(34, 197, 94), width=4)
    f_big = get_font(font_bold, 62)
    draw.text((85, 190), "28-STATE STUDENT RALLY", fill=(74, 222, 128), font=f_big)
    draw.text((85, 265), "STOP EXAM PAPER LEAKS!", fill=(255, 255, 255), font=f_big)
    f_sub = get_font(font_bold, 25)
    draw.text((85, 340), "Over 350,000 Students Mobilized Across State Capitals", fill=(226, 232, 240), font=f_sub)

    # Demands Box
    draw.rectangle([(60, 420), (w-60, 760)], fill=(15, 23, 42), outline=(74, 222, 128), width=3)
    f_dh = get_font(font_bold, 28)
    draw.text((85, 445), "⚖️ SUPREME COURT PIL & DEMAND CHARTER:", fill=(251, 191, 36), font=f_dh)

    f_db = get_font(font_bold, 24)
    items = [
        "• Mandatory 3rd-Party Cryptographic Server Audits for NTA & Exam Boards",
        "• Strict Penalties & Fast-Track Courts for Paper Leak Cartels",
        "• Transparent Score Calculation & Immediate Answer Key Release",
        "• Economic Need-Based Scholarships & Free Preparation Portals"
    ]
    iy = 495
    for it in items:
        draw.text((85, iy), it, fill=(241, 245, 249), font=f_db)
        iy += 45

    draw_stamp(draw, 840, 640, 80, "SC PIL FILED\n28 STATES", (34, 197, 94), (255, 255, 255), (251, 191, 36))

    draw_tricolor_strip(draw, 875, w, 15)
    draw.rectangle([(35, 890), (w-35, h-35)], fill=(15, 15, 15))
    f_foot = get_font(font_bold, 26)
    draw.text((60, 915), "100% MERITOCRACY · ZERO CORRUPTION · CJP & RHA", fill=(251, 191, 36), font=f_foot)

    img.save("assets/img/cjp/cjp-20aug-rha-100-meritocracy-rally.png", "PNG")
    print("Saved graphic poster 3")

def build_poster_4(): # Rejects NDA Offer
    w, h = 1000, 1000
    img = Image.new("RGB", (w, h), (88, 28, 135))
    draw = ImageDraw.Draw(img)

    draw_gradient_rect(draw, w, h, (126, 34, 206), (46, 16, 101))
    draw.rectangle([(25, 25), (w-25, h-25)], outline=(192, 132, 252), width=6)

    draw.rectangle([(35, 35), (w-35, 120)], fill=(88, 28, 135))
    draw_tricolor_strip(draw, 120, w, 15)
    f_top = get_font(font_bold, 38)
    draw.text((60, 55), "⚡ NON-PARTISAN INTEGRITY DECLARATION", fill=(255, 255, 255), font=f_top)

    draw.rectangle([(60, 170), (w-60, 390)], fill=(0, 0, 0), outline=(192, 132, 252), width=4)
    f_big = get_font(font_bold, 60)
    draw.text((85, 190), "WE DO NOT SELL OUT!", fill=(251, 191, 36), font=f_big)
    draw.text((85, 265), "CJP REJECTS ALLIANCE OFFER", fill=(255, 255, 255), font=f_big)
    f_sub = get_font(font_bold, 25)
    draw.text((85, 340), "“You called us anti-national, now asking to join?” — Abhijeet Dipke", fill=(216, 180, 254), font=f_sub)

    draw.rectangle([(60, 420), (w-60, 760)], fill=(15, 23, 42), outline=(168, 85, 247), width=3)
    f_dh = get_font(font_bold, 28)
    draw.text((85, 445), "🪳 CJP YOUTH INTEGRITY RESOLUTION:", fill=(251, 191, 36), font=f_dh)

    f_db = get_font(font_bold, 24)
    items = [
        "• 100% Independent Non-Electoral Youth Pressure Group",
        "• No Tickets, No Coalitions with Ruling or Opposition Cartels",
        "• 30 Million Gen-Z Members Pledged to Independent Student Rights",
        "• Focus Strictly on Exam Audits, School Infrastructure & Judicial Neutrality"
    ]
    iy = 495
    for it in items:
        draw.text((85, iy), it, fill=(241, 245, 249), font=f_db)
        iy += 45

    draw_stamp(draw, 840, 640, 80, "30 MILLION\nNON-PARTISAN", (126, 34, 206), (255, 255, 255), (251, 191, 36))

    draw_tricolor_strip(draw, 875, w, 15)
    draw.rectangle([(35, 890), (w-35, h-35)], fill=(15, 15, 15))
    f_foot = get_font(font_bold, 26)
    draw.text((60, 915), "COCKROACH JANTA PARTY · 100% YOUTH INTEGRITY", fill=(251, 191, 36), font=f_foot)

    img.save("assets/img/cjp/cjp-20aug-rejects-nda-offer.png", "PNG")
    print("Saved graphic poster 4")

def build_poster_5(): # IIT Suicides & Reforms
    w, h = 1000, 1000
    img = Image.new("RGB", (w, h), (14, 116, 144))
    draw = ImageDraw.Draw(img)

    draw_gradient_rect(draw, w, h, (3, 105, 161), (12, 74, 110))
    draw.rectangle([(25, 25), (w-25, h-25)], outline=(56, 189, 248), width=6)

    draw.rectangle([(35, 35), (w-35, 120)], fill=(14, 116, 144))
    draw_tricolor_strip(draw, 120, w, 15)
    f_top = get_font(font_bold, 38)
    draw.text((60, 55), "💡 IIT CAMPUS REFORMS & MENTAL HEALTH", fill=(255, 255, 255), font=f_top)

    draw.rectangle([(60, 170), (w-60, 390)], fill=(0, 0, 0), outline=(56, 189, 248), width=4)
    f_big = get_font(font_bold, 60)
    draw.text((85, 190), "STOP STUDENT SUICIDES!", fill=(248, 113, 113), font=f_big)
    draw.text((85, 265), "CJP BACKS IIT DELHI PROTESTS", fill=(255, 255, 255), font=f_big)
    f_sub = get_font(font_bold, 25)
    draw.text((85, 340), "Citing 65 Student Suicides Across IITs in 5 Years", fill=(186, 230, 253), font=f_sub)

    draw.rectangle([(60, 420), (w-60, 760)], fill=(15, 23, 42), outline=(56, 189, 248), width=3)
    f_dh = get_font(font_bold, 28)
    draw.text((85, 445), "🚨 URGENT INSTITUTIONAL CHARTER DEMANDS:", fill=(251, 191, 36), font=f_dh)

    f_db = get_font(font_bold, 24)
    items = [
        "• Mandatory Student Mental Health Councils & 24/7 Professional Counseling",
        "• Relative Grading Audit & Reduction of Academic Stress Load",
        "• Anti-Caste Discrimination Committees in All Premium Technical Institutes",
        "• Full CJP Solidarity with IIT Delhi & Pan-India Student Assemblies"
    ]
    iy = 495
    for it in items:
        draw.text((85, iy), it, fill=(241, 245, 249), font=f_db)
        iy += 45

    draw_stamp(draw, 840, 640, 80, "CAMPUS REFORMS\nCJP SOLIDARITY", (14, 116, 144), (255, 255, 255), (251, 191, 36))

    draw_tricolor_strip(draw, 875, w, 15)
    draw.rectangle([(35, 890), (w-35, h-35)], fill=(15, 15, 15))
    f_foot = get_font(font_bold, 26)
    draw.text((60, 915), "SAVE OUR STUDENTS · CAMPUS REFORMS NOW · CJP SWARM", fill=(251, 191, 36), font=f_foot)

    img.save("assets/img/cjp/cjp-25aug-iit-suicides-protest.png", "PNG")
    print("Saved graphic poster 5")

build_poster_1()
build_poster_2()
build_poster_3()
build_poster_4()
build_poster_5()

print("✅ All 5 high-impact visual graphic posters generated successfully!")
