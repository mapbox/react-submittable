'use strict';

var React = require('react');

var propTypes = {
  children: React.PropTypes.any.isRequired,
  onEnter: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func
};

/**
 * The submittable component is a replacement for form inputs that
 * replicates their onSubmit handler - pressing 'Enter' with the cursor
 * focused on an input element calls an onEvent property.
 */
var Submittable = React.createClass({
  displayName: 'Submittable',
  propTypes: propTypes,
  onKeyDown: function onKeyDown(event) {
    if (event.target.tagName === 'INPUT') {
      if (event.keyCode === 13) {
        this.props.onEnter(event);
      } else if (event.keyCode === 27 && this.props.onCancel) {
        this.props.onCancel(event);
      }
    }
  },
  onSubmit: function(event) {
    event.preventDefault();
  },
  render: function render() {
    var formProps = {
      onKeyDown: this.onKeyDown,
      onSubmit: this.onSubmit
    };
    Object.keys(this.props).forEach(function(key) {
      if (propTypes[key] !== undefined) return;
      formProps[key] = this.props[key];
    }, this);
    return React.createElement(
      'form',
      formProps,
      this.props.children
    );
  }
});

module.exports = Submittable;
