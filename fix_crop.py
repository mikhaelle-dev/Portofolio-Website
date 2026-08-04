import re
path = 'index.html'
txt = open(path,'r',encoding='utf-8').read()

old = 'class="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"'
new = 'class="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"'

if old in txt:
    txt = txt.replace(old,new)
    open(path,'w',encoding='utf-8').write(txt)
    print('updated')
else:
    print('not found')
