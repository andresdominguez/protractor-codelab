/**
 * Page object for user properties.
 * @constructor
 */
var UserPropertiesPage = function() {
  this.name = element(by.model('ctrl.user.name'));
  this.email = element(by.model('ctrl.user.email'));
  this.phone = element(by.model('ctrl.user.phone'));
  this.saveButton = element(by.id('save-button'));
};

/** @type {UserPropertiesPage} */
module.exports = UserPropertiesPage;
