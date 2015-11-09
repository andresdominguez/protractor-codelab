var faker = require('faker');
var _ = require('lodash');

/**
 * Generate a list of random users.
 * @return {Array<{
 *   name: string,
 *   email: string,
 *   phone: string
 * }>}
 */
var getUsers = function() {
  var chuckNorris = {
    name: 'Chuck Norris',
    email: 'chuck@gmail.com',
    phone: '212-555-1234'
  };
  var rambo = {
    name: 'John Rambo',
    email: 'rambo@gmail.com',
    phone: '415-555-9876'
  };

  var fakeUsers = _.times(6).map(function() {
    return {
      name: faker.name.findName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber()
    };
  });

  // Add chuck norris at the beginning
  fakeUsers.unshift(chuckNorris);

  // Add rambo in the middle (range 1-4)
  var randomIndex = (new Date()).getTime() % 4 + 1;
  // removes 0 elements from index 'randomIndex', and inserts item
  fakeUsers.splice(randomIndex, 0, rambo);

  return fakeUsers;
};

module.exports = {
  getUsers: getUsers
};
