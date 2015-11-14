describe('Exercise1', function() {

  beforeEach(function() {
    browser.get('http://localhost:9000/#/exercise1');
  });

  it('should find element by model', function() {
    // Use element to find an element by model. For example, find Bruce Lee's
    // email address:
    // <div>
    //   <label for="email">Email</label>
    //   <input type="text" id="email" ng-model="ctrl.user.email"/>
    // </div>

    // Hint:
    // http://www.protractortest.org/#/api?view=ProtractorBy.prototype.model
  });

  it('should find element by binding', function() {
    // Use element to find an element by binding. For example, find Bruce Lee's
    // phone number:
    // <div>
    //   <strong>Phone:</strong>
    //   <span>{{ctrl.displayUser.phone}}</span>
    // </div>


  // Hint:
    // http://www.protractortest.org/#/api?view=ProtractorBy.prototype.binding
  });

  it('should find element by css', function() {
    // Use element to find an element by css. For example, find the email under
    // this tag:
    //
    // <div id="contact-email">
    //    <strong>Email:</strong>
    //    <span class="ng-binding">bruce.lee@google.com</span>
    // </div>
  });

  it('should get element text', function() {
    // Use element to get the text of a DOM node. For example: get Bruce Lee's
    // email address.
  });

  it('should get input text', function() {
    // Use element to get the text of an input. For example: get the name,
    // email, or phone in the inputs.
  });

  it('should set input text', function() {
    // Use element to manipulate an input. For example: clear the name and
    // replace it with a new text value.
  });

  it('should update contact information', function() {
    // Update the contact information.
    // Click on the update button.
    // Verify the "Contact info" was updated.
  });
});
