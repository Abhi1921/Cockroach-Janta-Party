import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Update canonical and og:url for cockroach-janta-party-wale page
content = content.replace(
    '<link rel="canonical" href="https://cockroachjantapartywale.com/">',
    '<link rel="canonical" href="https://cockroachjantapartywale.com/cockroach-janta-party-wale">'
)
content = content.replace(
    '<meta property="og:url" content="https://cockroachjantapartywale.com/">',
    '<meta property="og:url" content="https://cockroachjantapartywale.com/cockroach-janta-party-wale">'
)
content = content.replace(
    '<body class="" data-page="index" data-ticker="off">',
    '<body class="" data-page="cockroach-janta-party-wale" data-ticker="off">'
)

with open('cockroach-janta-party-wale.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully synced full index.html code into cockroach-janta-party-wale.html!")
