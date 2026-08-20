import glob, os, datetime

files = sorted(glob.glob('*.html'))
today = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%d")

xml_entries = []

for f in files:
    if f.startswith('google'):
        continue
    if f == 'index.html':
        url = 'https://cockroachjantapartywale.com/'
        prio = '1.0'
        freq = 'daily'
    elif f in ['articles.html', 'protests.html', 'rha.html', 'gallery.html', 'dimagi-naxal.html', 'jharkhand-protest.html']:
        slug = f.replace('.html', '')
        url = f'https://cockroachjantapartywale.com/{slug}'
        prio = '0.9'
        freq = 'daily'
    elif f in ['manifesto.html', 'vision.html', 'school-thik-karo.html', 'neet-audit.html', 'members.html', 'join.html', 'card.html']:
        slug = f.replace('.html', '')
        url = f'https://cockroachjantapartywale.com/{slug}'
        prio = '0.8'
        freq = 'weekly'
    else:
        slug = f.replace('.html', '')
        url = f'https://cockroachjantapartywale.com/{slug}'
        prio = '0.7'
        freq = 'weekly'
        
    xml_entries.append(f"""  <url>
    <loc>{url}</loc>
    <lastmod>{today}</lastmod>
    <changefreq>{freq}</changefreq>
    <priority>{prio}</priority>
  </url>""")

sitemap_content = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{"\n".join(xml_entries)}
</urlset>"""

with open("sitemap.xml", "w", encoding="utf-8") as f:
    f.write(sitemap_content)

print(f"✅ sitemap.xml updated with {len(xml_entries)} URLs!")
