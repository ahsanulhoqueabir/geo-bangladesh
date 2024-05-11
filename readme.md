## Geo-Bangladesh Server

Server Domain: https://geobangladesh.netlify.app/.netlify/functions/api/v1/en
Server Domain: https://geo-bangladesh.vercel.app/api/v1/en

## Endpoint

1. To get All Division Name:

- Method: GET
- URL: /divisions

2. To get all districts under a Division:

- Method: GET
- URL: /division/{division_Name}
- division_Name is the name of the division
- Example:

```
- /division/Dhaka
[
    {
    "id": "40",
    "division_id": "6",
    "name": "Narsingdi",
    "bn_name": "নরসিংদী",
    "lat": "23.932233",
    "lon": "90.71541",
    "url": "www.narsingdi.gov.bd"
    },
    {
    "id": "41",
    "division_id": "6",
    "name": "Gazipur",
    "bn_name": "গাজীপুর",
    "lat": "24.0022858",
    "lon": "90.4264283",
    "url": "www.gazipur.gov.bd"
    },
    ...
]

```

3. To get all upazilla of a specific district

- Method: GET
- URL: /districts/{district_Name}
- district_Name is the name of district
- Example:

```
- /districts/chattogram
[
    {
    "id": "65",
    "district_id": "8",
    "name": "Rangunia",
    "bn_name": "রাঙ্গুনিয়া",
    "url": "rangunia.chittagong.gov.bd"
    },
    {
    "id": "66",
    "district_id": "8",
    "name": "Sitakunda",
    "bn_name": "সীতাকুন্ড",
    "url": "sitakunda.chittagong.gov.bd"
    },
    ...
]
```

4. To get all unions of a upazilla

- Method: GET
- URL: /upazilas/{upazilla_Name}
- upazilla_Name is the name of the upzailla name
- It will return an array of objects, each representing one union in that upazila.
- Example:

```
URL = /upazilas/chandanaish
[
    {
    "id": "729",
    "upazilla_id": "73",
    "name": "Kanchanabad",
    "bn_name": "কাঞ্চনাবাদ",
    "url": "kanchanabadup.chittagong.gov.bd"
    },
    {
    "id": "730",
    "upazilla_id": "73",
    "name": "Joara",
    "bn_name": "জোয়ারা",
    "url": "joaraup.chittagong.gov.bd"
    },
    ...
]

```

5. All Districts

- Method : GET
- URL : /districts
- Returns an Array of Objects where Each object represents a district.

6. All Upazillas

- Method : GET
- URL : /upazilas
- Returns an Array of Objects where each object represents an upazilla

7. All unions

- Method : GET
- URL : /unions

8. Containing All division->districts->upazilla->unions

- Method: GET
- URL : /all
- This API will return all divisions, districts, upazillas and union/municipal areas in the response body as nested JSON objects
