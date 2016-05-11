`
Write a lookup() function that takes login and a property as
arguments and returns the property value.

The function should check if login is an actual user and the given
property is a property of that contact.

If both are true, then return the "value" of that property.

If login is not found, return an error with the message,
"Could not find user."

If prop is not found, return an error with the message,
"Could not find property."
`

// Data
const users = [
  {
    "login": "knuth",
    "firstName": "Donald",
    "lastName": "Knuth",
    "likes": ["C", "Unix"]
  },
  {
    "login": "norvig",
    "firstName": "Peter",
    "lastName": "Norvig",
    "likes": ["AI", "Search", "NASA", "Mars"]
  },
  {
    "login": "mfowler",
    "firstName": "Martin",
    "lastName": "Fowler",
    "likes": ["Design Patterns", "Refactoring"]
  },
  {
    "login": "kent",
    "firstName": "Kent",
    "lastName": "Beck",
    "likes": ["TDD", "wikis", "Design Patterns"]
  }
];

const lookup = (login, prop) => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].login === login) {
      if (users[i].hasOwnProperty(prop)) {
        return users[i][prop]
      }
      return { message: 'Could not find property.' }
    }
  }
  return { message: 'Could not find user.' }
};

module.exports = lookup
