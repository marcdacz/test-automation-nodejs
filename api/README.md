# API Test Automation

### Installation:

Install node.js then:

```sh
$ cd momenton/api
$ npm install
```

### Execution:

```
$ npm run test
```

### Report:

```
api\mochawesome-report\mochawesome.html
```

### Issues:

GET Countries Endpoint: Some Countries do not have a name

```
GET https://api.openaq.org/v1/countries
[
  {
    "code": "BK",
    "count": 5149,
    "locations": 1,
    "cities": 1
  },
  {
    "code": "CE",
    "count": 7501,
    "locations": 1,
    "cities": 1
  },
  {
    "code": "CS",
    "count": 4900,
    "locations": 2,
    "cities": 1
  },
  {
    "code": "IZ",
    "count": 3680,
    "locations": 1,
    "cities": 1
  },
  {
    "code": "KU",
    "count": 4990,
    "locations": 1,
    "cities": 1
  },
  {
    "code": "KV",
    "count": 5142,
    "locations": 1,
    "cities": 1
  },
  {
    "code": "SU",
    "count": 765,
    "locations": 1,
    "cities": 1
  },
  {
    "code": "TI",
    "count": 5349,
    "locations": 1,
    "cities": 1
  },
  {
    "code": "TX",
    "count": 4833,
    "locations": 1,
    "cities": 1
  },
  {
    "code": "UC",
    "count": 4,
    "locations": 1,
    "cities": 1
  }
]
```
