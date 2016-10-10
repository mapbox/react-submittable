var React = require('react');
var enzyme = require('enzyme');
var Submittable = require('../index.js');

describe('Submittable', function() {
  it('calls onEnter when it gets an enter event', function() {
    // Render a checkbox with label in the document
    var wrapper = enzyme.mount(
      <Submittable onEnter={onEnter}>
        <input type='text' />
      </Submittable>);

    var onEnterCalled = false;
    function onEnter() {
      onEnterCalled = true;
    }

    // Simulate a click and verify that it is now On
    wrapper.find('input').simulate('keyDown', { key: 'Enter', keyCode: 13 });

    expect(onEnterCalled).toBe(true);
  });

  it('calls onCancel when it gets an exit event and has a binding', function() {
    // Render a checkbox with label in the document
    var wrapper = enzyme.mount(
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
    wrapper.find('input').simulate('keyDown', { key: "Escape", keyCode: 27 });

    expect(onCancelCalled).toBe(true);
  });
});
