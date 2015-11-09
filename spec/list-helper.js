/**
 * Page object for List.
 * @constructor
 */
var ListHelper = function() {
};

/**
 * @param {string} name
 * @return {!webdriver.promise.Promise<Array<{name: string, email: string, phone: string}>>}
 */
ListHelper.prototype.getUsersByName = function(name) {
  return $$('.user-row').filter(function(row) {
    return row.element(by.binding('row.name')).getText().then(function(rName) {
      return name === rName;
    });
  }).map(function(row) {
    return {
      name: row.element(by.binding('row.name')).getText(),
      email: row.element(by.binding('row.email')).getText(),
      phone: row.element(by.binding('row.phone')).getText()
    }
  });
};

/** @type {ListHelper} */
module.exports = ListHelper;
