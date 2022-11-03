'use strict';

var React = require('react');
var Slider = require('react-slick');
var gatsbyPluginImage = require('gatsby-plugin-image');

function Cta(_ref) {
  let {
    url,
    label,
    isButton = false
  } = _ref;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    className: "btn ".concat(isButton ? "btn-primary" : ""),
    href: url
  }, label && label));
}

function CtaList(_ref) {
  let {
    ctas
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    className: "ctas"
  }, ctas.map(cta => {
    var _cta$link, _cta$link2, _cta$link2$content, _cta$link3, _cta$link4, _cta$link4$content;
    return /*#__PURE__*/React.createElement(Cta, {
      url: (_cta$link = cta.link) !== null && _cta$link !== void 0 && _cta$link.content ? (_cta$link2 = cta.link) === null || _cta$link2 === void 0 ? void 0 : (_cta$link2$content = _cta$link2.content) === null || _cta$link2$content === void 0 ? void 0 : _cta$link2$content.slug : (_cta$link3 = cta.link) === null || _cta$link3 === void 0 ? void 0 : _cta$link3.url,
      label: cta.title ? cta.title : (_cta$link4 = cta.link) === null || _cta$link4 === void 0 ? void 0 : (_cta$link4$content = _cta$link4.content) === null || _cta$link4$content === void 0 ? void 0 : _cta$link4$content.label,
      isButton: cta.isButton
    });
  }));
}

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1
};
function CTSlider(_ref) {
  let {
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(Slider, settings, children);
}

const _excluded$1 = ["image"];
const GlobalImage = _ref => {
  let {
      image
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded$1);
  if (image !== null && image !== void 0 && image.gatsbyImageData) {
    return /*#__PURE__*/React.createElement(gatsbyPluginImage.GatsbyImage, _extends({
      image: image.gatsbyImageData
    }, props));
  }
  return image.url ? /*#__PURE__*/React.createElement("img", {
    src: image.url
  }) : null;
};

const _excluded = ["image"];
function ImageWrapper(_ref) {
  let {
      image
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  if (Array.isArray(image) && image.length > 0) {
    return /*#__PURE__*/React.createElement(CTSlider, null, image.map(img => /*#__PURE__*/React.createElement(GlobalImage, _extends({
      image: img
    }, props))));
  }
  return /*#__PURE__*/React.createElement(GlobalImage, _extends({
    image: image
  }, props));
}

function NarrativeBlock(_ref) {
  let {
    title = null,
    preTitle = null,
    content = null,
    alignment = null,
    bgColor = null,
    images = null,
    ctas = null
  } = _ref;
  const hasImages = (images === null || images === void 0 ? void 0 : images.length) > 0;
  const hasImageAndCentered = hasImages && alignment === "center";
  return /*#__PURE__*/React.createElement("div", {
    className: "component-narrative-block ".concat(bgColor)
  }, /*#__PURE__*/React.createElement("div", {
    className: "container pt-4 pb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row ".concat(alignment === "left" ? "flex-row-reverse" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(hasImageAndCentered || !hasImages ? "col-lg-12 text-center" : "col-lg-6 mb-5 mb-lg-0", " ").concat(alignment === "left" ? "offset-lg-1" : "")
  }, preTitle && /*#__PURE__*/React.createElement("h3", null, preTitle), title && /*#__PURE__*/React.createElement("h2", null, title), content && /*#__PURE__*/React.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: content
    }
  }), ctas && ctas.length > 0 && /*#__PURE__*/React.createElement(CtaList, {
    ctas: ctas
  })), images && /*#__PURE__*/React.createElement("div", {
    className: "".concat(alignment === "center" ? "col-lg-12" : "col-lg-5", " ").concat(alignment === "right" ? "offset-lg-1" : "")
  }, /*#__PURE__*/React.createElement(ImageWrapper, {
    image: images,
    objectFit: "contain"
  })))));
}

exports.NarrativeBlock = NarrativeBlock;
