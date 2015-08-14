'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');

/**
 * The submittable component is a replacement for form inputs that
 * replicates their onSubmit handler - pressing 'Enter' with the cursor
 * focused on an input element calls an onEvent property.
 */
var Submittable = React.createClass({
  displayName: 'Submittable',

  propTypes: {
    children: React.PropTypes.any.isRequired,
    onEnter: React.PropTypes.func.isRequired,
    onCancel: React.PropTypes.func
  },
  onKeyDown: function onKeyDown(event) {
    if (event.target.tagName === 'INPUT') {
      if (event.keyCode === 13) {
        this.props.onEnter(event);
      } else if (event.keyCode === 27 && this.props.onCancel) {
        this.props.onCancel(event);
      }
    }
  },
  render: function render() {
    return React.createElement(
      'div',
      _extends({ onKeyDown: this.onKeyDown }, this.props),
      this.props.children
    );
  }
});

module.exports = Submittable;

