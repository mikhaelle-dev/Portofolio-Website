import sys, os, re

path = 'index.html'
src_path = os.path.abspath(path)

# Read file
txt = open(src_path,'r',encoding='utf-8').read()

# Patterns to replace (preload link + main img usage)
# 1. preload link
old1 = '    <link rel="preload" as="image" href="src/assets/hero-portrait-460.jpg" fetchpriority="high" />'
new1 = '    <link rel="preload" as="image" href="src/assets/_MG_3812.JPG" fetchpriority="high" />'

# 2. main picture source
old2 = 'srcset="src/assets/hero-portrait-360.jpg 360w, src/assets/hero-portrait-460.jpg 460w"'
new2 = 'srcset="src/assets/_MG_3812.JPG 360w, src/assets/_MG_3812.JPG 460w"'

old3 = 'src="src/assets/hero-portrait-460.jpg" />'
new3 = 'src="src/assets/_MG_3812.JPG" />'

changes = 0
for o,n in [(old1,new1),(old2,new2),(old3,new3)]:
    if o in txt:
        txt = txt.replace(o,n)
        changes += 1
print('replacements:', changes)

open(src_path,'w',encoding='utf-8').write(txt)

# Also delete old hero portrait files
import os
old_files = [
    r'src/assets/hero-portrait-360.jpg',
    r'src/assets/hero-portrait-460.jpg',
]
for f in old_files:
    if os.path.exists(f):
        os.remove(f)
        print('removed:', f)
    else:
        print('no file to remove:', f)
