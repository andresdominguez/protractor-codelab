var faker = require('faker');
var _ = require('lodash');

/**
 * Generate a list of random users.
 * @return {Array<{
 *   name: string,
 *   email: string,
 *   phone: string,
 *   company: string,
 *   city: string,
 *   country: string
 * }>}
 */
var getUsers = function() {
  return _.times(10).map(function() {
    return {
      name: faker.name.findName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      company: faker.company.companyName(),
      city: faker.address.city(),
      country: faker.address.county()
    }
  })
};

module.exports = {
  getUsers: getUsers
};
