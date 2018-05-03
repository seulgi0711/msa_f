"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App(prop) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, prop));

    _this.handleAddItem = function (_ref) {
      var item = _ref.detail;

      console.log("added item", item);
      _this.setState(function (state, props) {
        return {
          items: [].concat(_toConsumableArray(state.items), [item])
        };
      });
    };

    _this.renderItem = function (item) {
      return _react2.default.createElement(
        "div",
        null,
        item.product,
        ": $ ",
        item.price
      );
    };

    _this.state = {
      items: []
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("addItem", this.handleAddItem);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("addItem", this.handleAddItem);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "sidebar",
        null,
        _react2.default.createElement(
          "h2",
          null,
          "Cart"
        ),
        this.state.items.length === 0 ? _react2.default.createElement(
          "p",
          null,
          "Your cart is empty"
        ) : _react2.default.createElement(
          "div",
          null,
          this.state.items.map(this.renderItem)
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;