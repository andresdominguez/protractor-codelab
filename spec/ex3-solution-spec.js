var UserListPage = require('./user-list-page');
var UserPropertiesPage = require('./user-properties-page');

describe('Exercise 3', function() {
  var userList = new UserListPage();
  var userProperties = new UserPropertiesPage();
  var uniqueId = (new Date()).getTime();

  beforeEach(function() {
    userList.get();
  });

  it('should add user', function() {
    var name = 'test name ' + uniqueId;
    var email = 'foo' + uniqueId + '@gmail.com';
    var phone = '212-555-0000';

    userList.addUserButton.click();

    userProperties.name.sendKeys(name);
    userProperties.email.sendKeys(email);
    userProperties.phone.sendKeys(phone);
    userProperties.saveButton.click();

    expect(userList.list.getUsersByName(name)).toEqual([{
      name: name,
      email: email,
      phone: phone
    }]);
  });
});
