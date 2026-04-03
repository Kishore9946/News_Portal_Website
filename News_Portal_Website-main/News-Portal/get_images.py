import urllib.request
import urllib.parse
import json

topics = [
    "T-Hub",
    "IIT Madras",
    "Nariman Point",
    "Amaravati",
    "Sunrisers Hyderabad",
    "Chennai Super Kings",
    "Mumbai Marathon",
    "Visakhapatnam",
    "Jio World Centre",
    "Chennai Port",
    "Bombay Stock Exchange",
    "HITEC City",
    "Kia Motors",
    "Ramoji Film City",
    "Bollywood",
    "Carnatic music",
    "Centre for Cellular and Molecular Biology",
    "Apollo Hospitals",
    "Tata Memorial Hospital",
    "Mumbai",
    "National Institute of Mental Health and Neurosciences",
    "Marina Beach",
    "Coastal Road (Mumbai)",
    "Ramakrishna Mission Beach",
    "Water purification",
    "Dharavi",
    "Kondapalli Toys",
    "Charminar"
]

results = {}

for topic in topics:
    try:
        url = f"https://en.wikipedia.org/w/api.php?action=query&titles={urllib.parse.quote(topic)}&prop=pageimages&format=json&pithumbsize=600"
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            pages = data['query']['pages']
            page = list(pages.values())[0]
            if 'thumbnail' in page:
                results[topic] = page['thumbnail']['source']
            else:
                results[topic] = None
    except Exception as e:
        results[topic] = None

print(json.dumps(results, indent=2))
