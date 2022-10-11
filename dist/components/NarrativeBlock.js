"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NarrativeBlock(_ref) {
  let {
    title = null,
    content = null,
    col1class = null,
    col2class = null
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: col1class ? col1class : ''
  }, title && /*#__PURE__*/_react.default.createElement("h2", null, title), content && /*#__PURE__*/_react.default.createElement("p", null, content)), /*#__PURE__*/_react.default.createElement("div", {
    className: col2class ? col2class : ''
  }, "columna 2")));
}

var _default = NarrativeBlock;
exports.default = _default;