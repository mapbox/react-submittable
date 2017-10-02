const React = require('react');

const propNames = ['onEnter', 'onCancel'];

/**
 * The submittable component is a replacement for form inputs that
 * replicates their onSubmit handler - pressing 'Enter' with the cursor
 * focused on an input element calls an onEvent property.
 */
class Submittable extends React.Component {
  onKeyDown = event => {
    if (event.target.tagName === 'INPUT') {
      if (event.keyCode === 13) {
        this.props.onEnter(event);
      } else if (event.keyCode === 27 && this.props.onCancel) {
        this.props.onCancel(event);
      }
    }
  };

  onSubmit = event => {
    event.preventDefault();
  };

  render() {
    const formProps = {
      onKeyDown: this.onKeyDown,
      onSubmit: this.onSubmit
    };
    Object.keys(this.props).forEach(key => {
      if (propNames.indexOf(key) !== -1) return;
      formProps[key] = this.props[key];
    });
    return React.createElement('form', formProps, this.props.children);
  }
}

module.exports = Submittable;
