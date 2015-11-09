describe('Exercise2', function() {

  beforeEach(function() {
    browser.get('http://localhost:9000/#/exercise2');
  });

  it('should count the number of users', function() {
    // Use element.all to count the number of rows in the table.
    var rows = element.all(by.css('.user-row'));
    expect(rows.count()).toBe(8);
  });

  it('should find user using by.repeater', function() {
    // Count the number of users by repeater.
    var rows = element.all(by.repeater('row in ctrl.userList'));
    expect(rows.count()).toBe(8);
  });

  it('should find Chuck Norris email address in the first row', function() {
    // Chain element finders to get Chuck Norris' email address.
    var email = element.all(by.css('.user-row'))
        .get(0)
        .element(by.binding('row.email'))
        .getText();

    expect(email).toBe('chuck@gmail.com');
  });

  it('should find the email address for John Rambo', function() {
    var email = $$('.user-row')
        .filter(function(elm) {
          var name = elm.element(by.binding('row.name')).getText();
          return name.then(function(nameText) {
            return nameText === 'John Rambo';
          })
        })
        .map(function(elm) {
          return elm.element(by.binding('row.email')).getText();
        })
        .then(function(emails) {
          return emails[0];
        });

    expect(email).toBe('rambo@gmail.com');
  });
});
