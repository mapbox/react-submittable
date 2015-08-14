var React = require('react');

/**
 * The submittable component is a replacement for form inputs that
 * replicates their onSubmit handler - pressing 'Enter' with the cursor
 * focused on an input element calls an onEvent property.
 */
var Submittable = React.createClass({
  propTypes: {
    children: React.PropTypes.any.isRequired,
    onEnter: React.PropTypes.func.isRequired,
    onCancel: React.PropTypes.func
  },
  onKeyDown: function(event) {
    if (event.target.tagName === 'INPUT') {
      if (event.keyCode === 13) {
        this.props.onEnter(event);
      } else if (event.keyCode === 27 && this.props.onCancel) {
        this.props.onCancel(event);
      }
    }
  },
  render: function() {
    return (
      <div onKeyDown={this.onKeyDown} {...this.props}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Submittable;
