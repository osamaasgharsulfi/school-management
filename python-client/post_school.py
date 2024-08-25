# python-client/post_school.py

import requests

url = "http://localhost:3000/schools"

school_data = {
    "name": "School-A",
    "status": "old",
    "startTime": "8:30am",
    "endTime": "1:30pm",
    "shift": "Morning",
    "address": {
        "town": "Nehar Kot",
        "tehsil": "Barkhan",
        "district": "Barkhan",
        "state": "Balochistan",
        "address": "address-1",
        "latitude": 29.79,
        "longitude": 69.47
    },
    "hasProjector": False,
    "hasLaptop": False,
    "organization": {
        "name": "publicschools"
    }
}

response = requests.post(url, json=school_data)
print(response.json())
