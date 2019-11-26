const USERS_DATA = [
    {
        "id": 1,
        "phone_number": "06 06 06 06 06",
        "email": "john@doe.com",
        "created_at": "2017-05-29T10:08:59.526286Z",
        "region": "Europe",
        "country": "France",
        "gender": "M",
        "city": "Paris",
        "status": "visitor",
        "score": 0,
        "name": "John Doe",
        "tags": "Active",
        "companies": [
            {
                "id": 1,
                "name": "Company name",
                "member_since": "2018-06-14T08:49:56.515083Z"
            }
        ]
    },
    {
        "id": 2,
        "phone_number": "06 06 06 06 06",
        "email": "merry@chrismas.com",
        "created_at": "2017-05-29T10:08:59.526286Z",
        "region": "Europe",
        "country": "France",
        "gender": "M",
        "city": "Paris",
        "status": "administrator",
        "score": 25,
        "name": "Merry Christmas",
        "tags": "Unknown",
        "companies": [
            {
                "id": 1,
                "name": "Company name",
                "member_since": "2018-06-14T08:49:56.515083Z"
            }
        ]
    }
];

module.exports = USERS_DATA;
