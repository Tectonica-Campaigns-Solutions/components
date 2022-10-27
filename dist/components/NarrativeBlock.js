"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactSlick = _interopRequireDefault(require("react-slick"));

var _gatsbyPluginImage = require("gatsby-plugin-image");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NarrativeBlock(_ref) {
  let {
    title = null,
    content = null,
    alignment = null,
    bgColor = null,
    images = null,
    ctas = null
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-5"
  }, title && /*#__PURE__*/_react.default.createElement("h2", null, title), content && /*#__PURE__*/_react.default.createElement("p", null, content), ctas && ctas.length > 0 && /*#__PURE__*/_react.default.createElement(CtaList, {
    ctas: block.ctas
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-5"
  }, images && /*#__PURE__*/_react.default.createElement(Image, {
    image: images
  }))));
}

function CtaList(_ref2) {
  let {
    ctas
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement("div", null, "hola");
}

function Image(_ref3) {
  let {
    image
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement(_gatsbyPluginImage.GatsbyImage, {
    image: image.gatsbyImageData
  });
}

var _default = NarrativeBlock;
exports.default = _default;