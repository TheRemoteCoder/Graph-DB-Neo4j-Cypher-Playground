// MATCH p=()-[r:ACTED_IN]->() RETURN p LIMIT 3

const records = 
[
  {
    "p":{
      "start":{
        "identity":1,
        "labels":[
          "Person"
        ],
        "properties":{
          "born":1964,
          "name":"Keanu Reeves"
        }
      },
      "end":{
        "identity":154,
        "labels":[
          "Movie"
        ],
        "properties":{
          "title":"Something's Gotta Give",
          "released":2003
        }
      },
      "segments":[
        {
          "start":{
            "identity":1,
            "labels":[
              "Person"
            ],
            "properties":{
              "born":1964,
              "name":"Keanu Reeves"
            }
          },
          "relationship":{
            "identity":221,
            "start":1,
            "end":154,
            "type":"ACTED_IN",
            "properties":{
              "roles":[
                "Julian Mercer"
              ]
            }
          },
          "end":{
            "identity":154,
            "labels":[
              "Movie"
            ],
            "properties":{
              "title":"Something's Gotta Give",
              "released":2003
            }
          }
        }
      ],
      "length":1.0
    }
  },
  {
    "p":{
      "start":{
        "identity":1,
        "labels":[
          "Person"
        ],
        "properties":{
          "born":1964,
          "name":"Keanu Reeves"
        }
      },
      "end":{
        "identity":87,
        "labels":[
          "Movie"
        ],
        "properties":{
          "tagline":"Pain heals, Chicks dig scars... Glory lasts forever",
          "title":"The Replacements",
          "released":2000
        }
      },
      "segments":[
        {
          "start":{
            "identity":1,
            "labels":[
              "Person"
            ],
            "properties":{
              "born":1964,
              "name":"Keanu Reeves"
            }
          },
          "relationship":{
            "identity":114,
            "start":1,
            "end":87,
            "type":"ACTED_IN",
            "properties":{
              "roles":[
                "Shane Falco"
              ]
            }
          },
          "end":{
            "identity":87,
            "labels":[
              "Movie"
            ],
            "properties":{
              "tagline":"Pain heals, Chicks dig scars... Glory lasts forever",
              "title":"The Replacements",
              "released":2000
            }
          }
        }
      ],
      "length":1.0
    }
  },
  {
    "p":{
      "start":{
        "identity":1,
        "labels":[
          "Person"
        ],
        "properties":{
          "born":1964,
          "name":"Keanu Reeves"
        }
      },
      "end":{
        "identity":100,
        "labels":[
          "Movie"
        ],
        "properties":{
          "tagline":"The hottest data on earth. In the coolest head in town",
          "title":"Johnny Mnemonic",
          "released":1995
        }
      },
      "segments":[
        {
          "start":{
            "identity":1,
            "labels":[
              "Person"
            ],
            "properties":{
              "born":1964,
              "name":"Keanu Reeves"
            }
          },
          "relationship":{
            "identity":132,
            "start":1,
            "end":100,
            "type":"ACTED_IN",
            "properties":{
              "roles":[
                "Johnny Mnemonic"
              ]
            }
          },
          "end":{
            "identity":100,
            "labels":[
              "Movie"
            ],
            "properties":{
              "tagline":"The hottest data on earth. In the coolest head in town",
              "title":"Johnny Mnemonic",
              "released":1995
            }
          }
        }
      ],
      "length":1.0
    }
  }
]

