import glob, re, os

html_files = sorted(glob.glob('*.html'))
print(f"Auditing links across {len(html_files)} HTML files...\n")

broken_links = []
missing_anchors = []

for filepath in html_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all hrefs and srcs
    hrefs = re.findall(r'href=["\']([^"\']+)["\']', content) + re.findall(r'src=["\']([^"\']+)["\']', content)
    for h in hrefs:
        # Ignore external or javascript or mailto or template literals
        if h.startswith(('http://', 'https://', 'mailto:', 'tel:', 'javascript:', 'data:')) or '${' in h:
            continue
        if h == '#' or h == '':
            continue
        
        # Split query params and anchors
        clean_h = h.split('?')[0]
        parts = clean_h.split('#')
        target_page = parts[0]
        anchor = parts[1] if len(parts) > 1 else None
        
        base_dir = os.path.dirname(filepath)
        
        if target_page == '':
            # Internal anchor on same page
            resolved_target = filepath
        elif target_page == '/':
            resolved_target = 'index.html'
        elif target_page.startswith('/'):
            resolved_target = target_page.lstrip('/')
            ext = os.path.splitext(resolved_target)[1].lower()
            if not ext:
                resolved_target = resolved_target + '.html'
        else:
            ext = os.path.splitext(target_page)[1].lower()
            if not ext:
                target_page = target_page + '.html'
            resolved_target = os.path.normpath(os.path.join(base_dir, target_page))
            
        if not os.path.exists(resolved_target):
            broken_links.append((filepath, h, f"Target file '{resolved_target}' does not exist"))
        elif anchor:
            # Check if anchor exists in target_page
            with open(resolved_target, 'r', encoding='utf-8') as tf:
                t_content = tf.read()
            # Look for id="anchor" or name="anchor"
            id_pattern = rf'id=["\']{re.escape(anchor)}["\']'
            name_pattern = rf'name=["\']{re.escape(anchor)}["\']'
            if not re.search(id_pattern, t_content) and not re.search(name_pattern, t_content):
                missing_anchors.append((filepath, h, f"Anchor '{anchor}' not found in '{resolved_target}'"))

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

