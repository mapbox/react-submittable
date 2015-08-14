jest.dontMock('../index.js');
describe('Submittable', function() {
  it('calls onEnter when it gets an enter event', function(done) {
    var React = require('react/addons');
    var Submittable = require('../index.js');
    var TestUtils = React.addons.TestUtils;

    // Render a checkbox with label in the document
    var pseudoForm = TestUtils.renderIntoDocument(
      <Submittable onEnter={onEnter}>
        <input type='text' />
      </Submittable>);

    var onEnterCalled = false;
    function onEnter(event) {
      onEnterCalled = true;
    }

    // Simulate a click and verify that it is now On
    var input = TestUtils.findRenderedDOMComponentWithTag(
      pseudoForm, 'input');

    TestUtils.Simulate.keyDown(input, { key: "Enter", keyCode: 13 });

    waitsFor(function() {
      return onEnterCalled;
    });
  });

  it('calls onCancel when it gets an exit event and has a binding', function(done) {
    var React = require('react/addons');
    var Submittable = require('../index.js');
    var TestUtils = React.addons.TestUtils;

    // Render a checkbox with label in the document
    var pseudoForm = TestUtils.renderIntoDocument(
      <Submittable
        onCancel={onCancel}
        onEnter={onEnter}>
        <input type='text' />
      </Submittable>);

    var onEnterCalled = false;
    function onEnter(event) {
      onEnterCalled = true;
    }

    var onCancelCalled = false;
    function onCancel(event) {
      onCancelCalled = true;
    }

    // Simulate a click and verify that it is now On
    var input = TestUtils.findRenderedDOMComponentWithTag(
      pseudoForm, 'input');

    TestUtils.Simulate.keyDown(input, { key: "Escape", keyCode: 27 });

    waitsFor(function() {
      return onCancelCalled;
    });
  });
});
