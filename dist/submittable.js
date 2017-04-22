'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var propNames = ['onEnter', 'onCancel'];

/**
 * The submittable component is a replacement for form inputs that
 * replicates their onSubmit handler - pressing 'Enter' with the cursor
 * focused on an input element calls an onEvent property.
 */

var Submittable = function (_React$Component) {
  _inherits(Submittable, _React$Component);

  function Submittable() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Submittable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Submittable.__proto__ || Object.getPrototypeOf(Submittable)).call.apply(_ref, [this].concat(args))), _this), _this.onKeyDown = function (event) {
      if (event.target.tagName === 'INPUT') {
        if (event.keyCode === 13) {
          _this.props.onEnter(event);
        } else if (event.keyCode === 27 && _this.props.onCancel) {
          _this.props.onCancel(event);
        }
      }
    }, _this.onSubmit = function (event) {
      event.preventDefault();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Submittable, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var formProps = {
        onKeyDown: this.onKeyDown,
        onSubmit: this.onSubmit
      };
      Object.keys(this.props).forEach(function (key) {
        if (propNames.indexOf(key) !== -1) return;
        formProps[key] = _this2.props[key];
      });
      return React.createElement('form', formProps, this.props.children);
    }
  }]);

  return Submittable;
}(React.Component);

module.exports = Submittable;