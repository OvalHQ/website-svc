terms_file = open('terms.txt', 'r')
outfile = open('ll.html', 'w')
lines = ''
while True:
    line = terms_file.readline()
    if line.isspace():
        continue
    if not line:
        break;
    x = ''
    if line.startswith('-'): 
        x = f'<li>{line[2:]}</li>'
    elif line.startswith('#'):
        x =  f'<h3 className="mb-4">{line[1:]}</h3>'
    else: 
        x = f'<p className="mb-4">{line}</p>'
  
    outfile.write(x)







