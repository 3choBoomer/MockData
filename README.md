# Random Data Generator

POST a JSON object to this mmicro service and get back an identical model with randomly generated values

### Message Arguments
model: and valid JSON object using a random generator reffernce values.
count: number of models to return

The model values can also be defaulted to a bool, int, or string. Nested modelss are supported.
*Example message*
```javascript
{
    "model": {
        "creator": "_name",
        "control_code": "_charLower",
        "zip": "_zip"
        
    },
    "count": 3
}
```

### Response
Array of objects

*Example response*
```javascript
[
  {
    "creator": "Poole",
    "control_code": "o",
    "zip": 52982
  },
  {
    "creator": "Weaver",
    "control_code": "f",
    "zip": 50641
  }
]
```

## Specifying number of items to generate in an array
_count in an object in an array will create that many objects in the array
If a negative number is supplied, the count will be random with a min of 0 and a max of Math.abs(_count).
```javascript
{
    "model": {
      "arr": [{"_count": -3, "foo":"_name"}]    
    },
    "count": 2
}
```
*Example response*
```javascript
{
   "status":200,
   "data":[
      {
         "arr":[

         ]
      },
      {
         "arr":[
            {
               "foo":"Bowen"
            }
         ]
      }
   ]
}
```

## Random Generator Methods
_bool
_char
_charLower
_date
_guid
_name
_int
_state
_zip

## Extending 
