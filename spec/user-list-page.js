var ListHelper = require('./list-helper');

/**
 * Page object for user list.
 * @constructor
 */
var UserListPage = function() {
  this.addUserButton = $('#add-user-button');

  /** @type {ListHelper} */
  this.list = new ListHelper();
};

UserListPage.prototype.get = function() {
  browser.get('http://localhost:9000/testapp/#/exercise3');
};

/** @type {UserListPage} */
module.exports = UserListPage;
