import os

files = os.listdir('./legal')

data = []

for f in files:
    line = dict()
    line['name'] = f.replace('-', ' ').capitalize()
    line['link'] = f
    data.append(line)
    pass

print(data)