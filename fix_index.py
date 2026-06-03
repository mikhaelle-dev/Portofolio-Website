import os
file_path = r'd:\TUGAS KULIAH\TUGAS SEMESTER 2\Portofolio Website\index.html'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()
# 1. Replace Tailwind CSS link with CDN
content = content.replace(
    '<!-- Tailwind build output -->\n    <link rel="stylesheet" href="dist/output.css">',
    '<!-- Tailwind CDN -->\n    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>'
)
# 2. Replace Marquee images
replacements = {
    'src/assets/python.svg': 'https://cdn.simpleicons.org/python/3776AB',
    'src/assets/js.svg': 'https://cdn.simpleicons.org/javascript/F7DF1E',
    'src/assets/CSS.svg': 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg',
    'src/assets/html5.svg': 'https://cdn.simpleicons.org/html5/E34F26',
    'src/assets/cisco.svg': 'https://cdn.simpleicons.org/cisco/005073',
    'src/assets/pngegg.png': 'https://i.pinimg.com/736x/68/5b/4c/685b4c65372d5274ba62e65d6ef1767e.jpg',
    'src/assets/app.ico': 'https://hurbad.com/wp-content/uploads/2021/12/Cisco-Packet-Tracer.png',
    'src/assets/wireshark.svg': 'https://cdn.simpleicons.org/wireshark/167EBE',
    'src/assets/claude.svg': 'https://cdn.simpleicons.org/anthropic/D97757',
    'src/assets/stich.png': 'https://www.gstatic.com/labs-code/stitch/favicon-512x512.png',
    'src/assets/gemini.svg': 'https://cdn.simpleicons.org/googlegemini/8E75FF',
    'src/assets/git.svg': 'https://cdn.simpleicons.org/git/F05032'
}
for old, new in replacements.items():
    content = content.replace(old, new)
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print('Replacements done.')