[![Actions Status](https://github.com/ZhushmanMS/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/ZhushmanMS/frontend-project-lvl2/actions)
[![Node CI](https://github.com/ZhushmanMS/frontend-project-lvl2/workflows/Node%20CI/badge.svg)](https://github.com/ZhushmanMS/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/885a61216d54f3b9c43b/maintainability)](https://codeclimate.com/github/ZhushmanMS/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/885a61216d54f3b9c43b/test_coverage)](https://codeclimate.com/github/ZhushmanMS/frontend-project-lvl2/test_coverage)

# Gendiff


## Description

A difference calculator is a program that determines the difference between two data structures. Such a mechanism is used when outputting tests or when automatically tracking changes in configuration files.

Utility features:

- Support for different input formats: yaml, json
- Report generation as plain text, stylish and json
- Working with absolute and relative paths of compared files.

____


## Prepare to use

Clone repository:
```sh
git clone https://github.com/ZhushmanMS/frontend-project-lvl2

```

Install program in your OS:
```sh
make install
```

Help:
```sh
gendiff -h
```

Example clone and install repository:

[![asciicast](https://asciinema.org/a/Swckbph4dExJfwkCnh4mUmzmx.svg)](https://asciinema.org/a/Swckbph4dExJfwkCnh4mUmzmx)

____


## Examples of usage

Fixtures used:

- file1.json
```
{
  "common": {
    "setting1": "Value 1",
    "setting2": 200,
    "setting3": true,
    "setting6": {
      "key": "value",
      "doge": {
        "wow": ""
      }
    }
  },
  "group1": {
    "baz": "bas",
    "foo": "bar",
    "nest": {
      "key": "value"
    }
  },
  "group2": {
    "abc": 12345,
    "deep": {
      "id": 45
    }
  }
}
```

- file2.json
```
{
  "common": {
    "follow": false,
    "setting1": "Value 1",
    "setting3": null,
    "setting4": "blah blah",
    "setting5": {
      "key5": "value5"
    },
    "setting6": {
      "key": "value",
      "ops": "vops",
      "doge": {
        "wow": "so much"
      }
    }
  },
  "group1": {
    "foo": "bar",
    "baz": "bars",
    "nest": "str"
  },
  "group3": {
    "deep": {
      "id": {
        "number": 45
      }
    },
    "fee": 100500
  }
}
```

- file1.yml
```
common:
  setting1: Value 1
  setting2: 200
  setting3: true
  setting6:
    key: value
    doge:
      wow: ""
group1:
  baz: bas
  foo: bar
  nest:
    key: value
group2:
  abc: 12345
  deep:
    id: 45
```

- file2.yml
```
common: 
 follow: false
 setting1: Value 1
 setting3: null
 setting4: blah blah
 setting5: 
  key5: value5
 setting6: 
  key: value
  ops: vops
  doge: 
   wow: so much
group1: 
 foo: bar
 baz: bars
 nest: str
group3: 
 deep: 
  id: 
   number: 45
 fee: 100500
 ```

Example work with files in default format (stylish):

[![asciicast](https://asciinema.org/a/U3iSM9sHtmKaBNrlqPjSCppr6.svg)](https://asciinema.org/a/U3iSM9sHtmKaBNrlqPjSCppr6)


Example work with files in plain format:

[![asciicast](https://asciinema.org/a/5kr2zkK8HCN0noXT4VmcksFGE.svg)](https://asciinema.org/a/5kr2zkK8HCN0noXT4VmcksFGE)


Example work with files in plain format:

[![asciicast](https://asciinema.org/a/m59J29Cb9d46dgkHYAURUwxFp.svg)](https://asciinema.org/a/m59J29Cb9d46dgkHYAURUwxFp)
