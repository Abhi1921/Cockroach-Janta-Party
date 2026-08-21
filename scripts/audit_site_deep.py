import glob, re, os

html_files = sorted(glob.glob("*.html"))
print(f"Deep auditing {len(html_files)} HTML files for broken links, missing anchors, and button styles...\n")

broken_links = []
missing_anchors = []
white_buttons = []
escaped_quotes = []

for filepath in html_files:
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # 1. Check for escaped quotes in href or onclick attributes
    if 'href=\\"' in content or 'onclick=\\"' in content:
        escaped_quotes.append(filepath)

    # 2. Search for white-on-white or low contrast buttons
    # Buttons with background: #fff or #ffffff and color: #fff or #ffffff or color: white
    btn_matches = re.findall(r"(<(?:a|button|input)[^>]*class=[\"'][^\"']*(?:btn|button|pill)[^\"']*[\"'][^>]*>)", content, re.IGNORECASE)
    for btn in btn_matches:
        style_match = re.search(r"style=[\"']([^\"']+)[\"']", btn, re.IGNORECASE)
        if style_match:
            style_str = style_match.group(1).lower()
            bg_white = ("background: #fff" in style_str or "background: white" in style_str or "background:#fff" in style_str or "background: #ffffff" in style_str or "background:#ffffff" in style_str or "background: rgb(255, 255, 255)" in style_str or "background: #fffcf8" in style_str)
            text_white = ("color: #fff" in style_str or "color: white" in style_str or "color:#fff" in style_str or "color: #ffffff" in style_str or "color:#ffffff" in style_str or "color: rgb(255, 255, 255)" in style_str)
            text_light = ("color: #f" in style_str or "color: #e" in style_str or "color: #d" in style_str or "color: #ccc" in style_str)
            
            if bg_white and (text_white or text_light) and "color: #1" not in style_str and "color: #2" not in style_str and "color: #3" not in style_str and "color: #0" not in style_str and "color: #dc" not in style_str and "color: #b9" not in style_str and "color: #ea" not in style_str and "color: #78" not in style_str:
                white_buttons.append((filepath, btn))

    # 3. Check all href and src attributes
    hrefs = re.findall(r"href=[\"']([^\"']+)[\"']", content) + re.findall(r"src=[\"']([^\"']+)[\"']", content)
    for h in hrefs:
        if h.startswith(("http://", "https://", "mailto:", "tel:", "javascript:", "data:")) or "${" in h:
            continue
        if h == "#" or h == "":
            continue
        
        clean_h = h.split("?")[0]
        parts = clean_h.split("#")
        target_page = parts[0]
        anchor = parts[1] if len(parts) > 1 else None
        
        base_dir = os.path.dirname(filepath)
        
        if target_page == "":
            resolved_target = filepath
        elif target_page == "/":
            resolved_target = "index.html"
        elif target_page.startswith("/"):
            resolved_target = target_page.lstrip("/")
            ext = os.path.splitext(resolved_target)[1].lower()
            if not ext:
                resolved_target = resolved_target + ".html"
        else:
            ext = os.path.splitext(target_page)[1].lower()
            if not ext:
                target_page = target_page + ".html"
            resolved_target = os.path.normpath(os.path.join(base_dir, target_page))
            
        if not os.path.exists(resolved_target):
            broken_links.append((filepath, h, f"Target file '{resolved_target}' does not exist"))
        elif anchor:
            with open(resolved_target, "r", encoding="utf-8") as tf:
                t_content = tf.read()
            id_pattern = rf"id=[\"']{re.escape(anchor)}[\"']"
            name_pattern = rf"name=[\"']{re.escape(anchor)}[\"']"
            if not re.search(id_pattern, t_content) and not re.search(name_pattern, t_content):
                missing_anchors.append((filepath, h, resolved_target, anchor))

print(f"=== ESCAPED QUOTES IN LINKS ({len(escaped_quotes)}) ===")
for src in escaped_quotes:
    print(f"❌ Escaped quotes found in {src}")

print(f"\n=== BROKEN FILE LINKS ({len(broken_links)}) ===")
if not broken_links:
    print("✅ No broken file links found!")
else:
    for src, link, err in broken_links:
        print(f"❌ In {src}: link '{link}' -> {err}")

print(f"\n=== MISSING ANCHOR HASHTAGS ({len(missing_anchors)}) ===")
if not missing_anchors:
    print("✅ No missing anchor hashtags found!")
else:
    for src, link, target, anchor in missing_anchors:
        print(f"⚠️ In {src}: link '{link}' -> Anchor '{anchor}' missing in '{target}'")

print(f"\n=== WHITE-ON-WHITE / LOW CONTRAST BUTTONS ({len(white_buttons)}) ===")
if not white_buttons:
    print("✅ No white-on-white button styles found!")
else:
    for src, btn in white_buttons:
        print(f"⚠️ In {src}: {btn[:110]}...")
