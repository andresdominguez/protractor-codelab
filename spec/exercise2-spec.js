describe('Exercise2', function() {

  beforeEach(function() {
    browser.get('http://localhost:9000/#/exercise2');
  });

  it('should count the number of users', function() {
    // Use element.all to count the number of rows in the table.
  });

  it('should find user using by.repeater', function() {
    // Count the number of users by repeater.

    // Hint:
    // http://www.protractortest.org/#/api?view=ProtractorBy.prototype.repeater
  });

  it('should find Chuck Norris email address in the first row', function() {
    // Chain element finders to get Chuck Norris' email address.

    // Hint: Chuck Norris is always on the first table row.
    // Hint:
    // http://www.protractortest.org/#/api?view=ElementFinder.prototype.element
  });

  it('should find the email address for John Rambo', function() {
    // Use the advanced features of element.all to find John Rambo's email address.

    // Hints:
    // You don't know in which row Larry Page is located, but you know the user
    // is present.
    // http://www.protractortest.org/#/api?view=ElementArrayFinder.prototype.filter
    // http://www.protractortest.org/#/api?view=ElementArrayFinder.prototype.map
  });
});
