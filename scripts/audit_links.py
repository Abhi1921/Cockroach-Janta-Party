import glob, re, os

html_files = sorted(glob.glob('*.html'))
print(f"Auditing links across {len(html_files)} HTML files...\n")

broken_links = []
missing_anchors = []

for filepath in html_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all hrefs
    hrefs = re.findall(r'href=["\']([^"\']+)["\']', content)
    for h in hrefs:
        # Ignore external or javascript or mailto
        if h.startswith(('http://', 'https://', 'mailto:', 'tel:', 'javascript:', 'data:')):
            continue
        if h == '#' or h == '':
            continue
        
        # Split page and anchor
        parts = h.split('#')
        target_page = parts[0]
        anchor = parts[1] if len(parts) > 1 else None
        
        if target_page == '':
            # Internal anchor on same page
            target_page = filepath
        elif target_page == '/':
            target_page = 'index.html'
        elif not target_page.endswith('.html'):
            target_page = target_page + '.html'
            
        if not os.path.exists(target_page):
            broken_links.append((filepath, h, f"Target file '{target_page}' does not exist"))
        elif anchor:
            # Check if anchor exists in target_page
            with open(target_page, 'r', encoding='utf-8') as tf:
                t_content = tf.read()
            # Look for id="anchor" or name="anchor"
            id_pattern = rf'id=["\']{re.escape(anchor)}["\']'
            name_pattern = rf'name=["\']{re.escape(anchor)}["\']'
            if not re.search(id_pattern, t_content) and not re.search(name_pattern, t_content):
                missing_anchors.append((filepath, h, f"Anchor '{anchor}' not found in '{target_page}'"))

print("=== BROKEN FILE LINKS ===")
if not broken_links:
    print("✅ No broken file links found!")
else:
    for src, link, err in broken_links:
        print(f"❌ In {src}: link '{link}' -> {err}")

print("\n=== MISSING ANCHOR HASHTAGS ===")
if not missing_anchors:
    print("✅ No missing anchor hashtags found!")
else:
    for src, link, err in missing_anchors:
        print(f"⚠️ In {src}: link '{link}' -> {err}")

