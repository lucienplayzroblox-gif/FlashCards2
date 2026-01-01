import re
import html
import json

# Read the file
with open('Chemistry.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract text between span tags and decode HTML entities
texts = re.findall(r'<span[^>]*>([^<]+)</span>', content)

# Decode and clean
items = []
for text in texts:
    decoded = html.unescape(text).strip()
    if decoded and len(decoded) > 0:
        items.append(decoded)

# Save to file
with open('extracted_text.txt', 'w', encoding='utf-8') as f:
    for item in items:
        f.write(item + '\n')

print(f"Extracted {len(items)} items")
print("\nFirst 50 items:")
for i, item in enumerate(items[:50]):
    print(f"{i}: {item[:100]}")
