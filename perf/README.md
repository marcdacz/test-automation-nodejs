# Performance Test Automation

### Installation:

Install node.js then:

```sh
$ cd momenton/perf
$ npm install
```

### Execution:

```
$ npm run test
```

### Report:

```
$ npm run report
```

### Sample Results:

-   Report below shows median latency of about 5.6s.
-   Received Forbidden and Timeouts (most likely when I tried hammering the endpoint several times)

```
{
  "aggregate": {
    "timestamp": "2020-06-22T03:05:52.330Z",
    "scenariosCreated": 1000,
    "scenariosCompleted": 886,
    "requestsCompleted": 886,
    "latency": {
      "min": 1367.2,
      "max": 15243.1,
      "median": 5653.4,
      "p95": 6427.1,
      "p99": 7052.4
    },
    "rps": {
      "count": 1000,
      "mean": 38.4
    },
    "scenarioDuration": {
      "min": 1374.4,
      "max": 15246.9,
      "median": 5659,
      "p95": 6432.5,
      "p99": 7054.9
    },
    "scenarioCounts": {
      "0": 1000
    },
    "errors": {
      "ETIMEDOUT": 114
    },
    "codes": {
      "200": 15,
      "403": 871
    },
    "matches": 0,
    "customStats": {},
    "counters": {},
    "scenariosAvoided": 0,
    "phases": [
      {
        "duration": 5,
        "arrivalCount": 1000
      }
    ]
  },
  "intermediate": [
    {
      "timestamp": "2020-06-22T03:05:36.243Z",
      "scenariosCreated": 1000,
      "scenariosCompleted": 882,
      "requestsCompleted": 882,
      "latency": {
        "min": 1367.2,
        "max": 7101.1,
        "median": 5647.8,
        "p95": 6420.2,
        "p99": 6519.3
      },
      "rps": {
        "count": 1000,
        "mean": 100.5
      },
      "scenarioDuration": {
        "min": 1374.4,
        "max": 7109.2,
        "median": 5656.2,
        "p95": 6423.6,
        "p99": 6522.1
      },
      "scenarioCounts": {
        "0": 1000
      },
      "errors": {},
      "codes": {
        "200": 15,
        "403": 867
      },
      "matches": 0,
      "customStats": {},
      "counters": {},
      "concurrency": 118,
      "pendingRequests": 118,
      "scenariosAvoided": 0
    },
    {
      "timestamp": "2020-06-22T03:05:46.251Z",
      "scenariosCreated": 0,
      "scenariosCompleted": 4,
      "requestsCompleted": 4,
      "latency": {
        "min": 7215.4,
        "max": 15243.1,
        "median": 7242.1,
        "p95": 15243.1,
        "p99": 15243.1
      },
      "rps": {
        "count": 0,
        "mean": null
      },
      "scenarioDuration": {
        "min": 7217.8,
        "max": 15246.9,
        "median": 7245.6,
        "p95": 15246.9,
        "p99": 15246.9
      },
      "scenarioCounts": {},
      "errors": {},
      "codes": {
        "403": 4
      },
      "matches": 0,
      "customStats": {},
      "counters": {},
      "concurrency": 114,
      "pendingRequests": 114,
      "scenariosAvoided": 0
    },
    {
      "timestamp": "2020-06-22T03:05:52.304Z",
      "scenariosCreated": 0,
      "scenariosCompleted": 0,
      "requestsCompleted": 0,
      "latency": {
        "min": null,
        "max": null,
        "median": null,
        "p95": null,
        "p99": null
      },
      "rps": {
        "count": 0,
        "mean": null
      },
      "scenarioDuration": {
        "min": null,
        "max": null,
        "median": null,
        "p95": null,
        "p99": null
      },
      "scenarioCounts": {},
      "errors": {
        "ETIMEDOUT": 114
      },
      "codes": {},
      "matches": 0,
      "customStats": {},
      "counters": {},
      "concurrency": 0,
      "pendingRequests": 114,
      "scenariosAvoided": 0
    }
  ]
}
```
