describe('Exercise1', function() {
  it('should navigate to exercise 1', function() {
    // Use browser to navigate to http://localhost:9000/#/exercise1

    browser.get('#/exercise1');
  });

  it('should find element by model', function() {
    // Use element to find an element by model

    var nameElement = element(by.model('ctrl.user.name'));
    expect(nameElement.isPresent()).toBe(true);
  });

  it('should find element by binding', function() {
    // Use element to find an element by binding

    var nameElement = element(by.binding('ctrl.displayUser.name'));
    expect(nameElement.isPresent()).toBe(true);
  });

  it('should find element by css', function() {
    // Use element to find an element by css

    var emailElement = element(by.css('#contact-email'));
    expect(emailElement.isPresent()).toBe(true);
  });

  it('should get element text', function() {
    // Use element to get the text of a DOM node. For example: get Bruce Lee's
    // email address.
    var email = element(by.binding('ctrl.displayUser.email')).getText();
    expect(email).toBe('bruce.lee@google.com');
  });

  it('should get input text', function() {
    // Use element to get the text of an input. For example: get the name,
    // email, or phone in the inputs.
    var name = element(by.model('ctrl.user.name')).getAttribute('value');
    var email = element(by.model('ctrl.user.email')).getAttribute('value');
    var phone = element(by.model('ctrl.user.phone')).getAttribute('value');

    expect(name).toBe('Bruce Lee');
    expect(email).toBe('bruce.lee@google.com');
    expect(phone).toBe('212 555-1234');
  });

  it('should set input text', function() {
    // Use element to manipulate an input. For example: clear the name and
    // replace it with a new text value.
    element(by.model('ctrl.user.name')).clear().sendKeys('John Rambo');
    var name = element(by.model('ctrl.user.name')).getAttribute('value');
    expect(name).toBe('John Rambo');
  });

  it('should update contact information', function() {
    // Update the contact information.
    var name = element(by.model('ctrl.user.name'));
    var email = element(by.model('ctrl.user.email'));
    var phone = element(by.model('ctrl.user.phone'));

    name.clear().sendKeys('The name');
    email.clear().sendKeys('The email');
    phone.clear().sendKeys('The phone');

    // Click on the update button.
    element(by.id('save-button')).click();

    // Verify the "Contact info" was updated.
    var nameText = element(by.binding('ctrl.displayUser.name')).getText();
    var emailText = element(by.binding('ctrl.displayUser.email')).getText();
    var phoneText = element(by.binding('ctrl.displayUser.phone')).getText();

    expect(nameText).toBe('The name');
    expect(emailText).toBe('The email');
    expect(phoneText).toBe('The phone');
  });
});
