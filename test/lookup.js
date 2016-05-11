const test = require('tape')
const lookup = require('../index')

// Tests
test('lookup() likes', assert => {
  const msg = `lookup(<login>, 'likes') should return likes
    for the specified user.`;

  const actual = lookup('norvig', 'likes');
  const expected = ["AI", "Search", "NASA", "Mars"];

  assert.deepEqual(actual, expected, msg);
  assert.end();
});


test('lookup() last name', assert => {
  const msg = `lookup(<login>, 'lastName') should return the last name
     for the specified user.`;

  const actual = lookup('knuth', 'lastName');
  const expected = 'Knuth';

  assert.deepEqual(actual, expected, msg);
  assert.end();
});


test('lookup() with unknown user', assert => {
  const msg = `lookup() with unknown user should return an error
    with the correct message.`;

  const value = lookup('nobody', 'likes');

  const actual = value.message;
  const expected = 'Could not find user.';

  assert.equal(actual, expected, msg);
  assert.end();
});


test('lookup() with unknown property', assert => {
  const msg = `lookup() with unknown property should return an error
    with the correct message`;

  const value = lookup('mfowler', 'noprop');

  const actual = value.message;
  const expected = 'Could not find property.';

  assert.equal(actual, expected, msg);
  assert.end();
});
