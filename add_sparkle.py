import re, sys
path='index.html'
txt=open(path,encoding='utf-8').read()
# Find the mobile topbar div containing brand-sparkle-icon
pattern=r'(<div class="liquid-glass !bg-white/30[^>]*>\s*<span class="brand-sparkle-icon sparkle-anim"[^>]*></span>)'
new='<div class="liquid-glass !bg-white/30 dark:!bg-slate-900/30 rounded-full px-4 py-2 flex items-center gap-3"><svg class="text-primary text-2xl sparkle-anim" width="1em" height="1em" viewBox="0 0 24 24" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path fill="currentColor" d="m19 9-1.25-2.75L15 5l2.75-1.25L19 1l1.25 2.75L23 5l-2.75 1.25L19 9Zm0 14-1.25-2.75L15 19l2.75-1.25L19 15l1.25 2.75L23 19l-2.75 1.25L19 23ZM9 20l-2.5-5.5L1 12l5.5-2.5L9 4l2.5 5.5L17 12l-5.5 2.5L9 20Z"/></svg>'
if re.search(pattern, txt):
    txt = re.sub(pattern, new, txt, count=1)
    open(path,'w',encoding='utf-8').write(txt)
    print('sparkle added')
else:
    print('not found')
