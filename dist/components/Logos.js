"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Logos(_ref) {
  let {
    backgroundColor = null,
    title = null,
    intro = null,
    logos = null,
    ctas = null
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "logos-block ".concat(backgroundColor)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, title && /*#__PURE__*/_react.default.createElement("h2", null, title), intro && /*#__PURE__*/_react.default.createElement("div", {
    className: "intro",
    dangerouslySetInnerHTML: {
      __html: intro
    }
  }), logos && /*#__PURE__*/_react.default.createElement("div", {
    className: "row logos-list justify-content-center g-5"
  }, logos.map(logo => /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-2 col-md-3 col-6"
  }, "Logo")))));
}

var _default = Logos;
exports.default = _default;