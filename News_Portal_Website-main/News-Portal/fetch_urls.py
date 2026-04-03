import urllib.request
import urllib.parse
import json

topics = [
    "T-Hub",
    "IIT Madras",
    "Nariman Point",
    "Amaravati",
    "Rajiv Gandhi International Cricket Stadium",
    "M. A. Chidambaram Stadium",
    "Mumbai Marathon",
    "Visakhapatnam",
    "Jio World Centre",
    "Chennai Port",
    "BSE SENSEX",
    "HITEC City",
    "Kia India",
    "Ramoji Film City",
    "Bollywood",
    "Carnatic music",
    "Centre for Cellular and Molecular Biology",
    "Apollo Hospitals",
    "Tata Memorial Hospital",
    "Marine Drive, Mumbai",
    "National Institute of Mental Health and Neurosciences",
    "Marina Beach",
    "Coastal Road (Mumbai)",
    "Ramakrishna Mission Beach",
    "Water purification",
    "Dharavi",
    "Kondapalli toy",
    "Charminar"
]

results = {}
for topic in topics:
    url = f"https://en.wikipedia.org/api/rest_v1/page/summary/{urllib.parse.quote(topic)}"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            source = data.get('originalimage', {}).get('source', '')
            results[topic] = source
    except Exception as e:
        results[topic] = ''

with open('urls.json', 'w') as f:
    json.dump(results, f, indent=2)
