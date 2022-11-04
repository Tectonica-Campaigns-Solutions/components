import e from"react";import t from"react-slick";import{GatsbyImage as l}from"gatsby-plugin-image";function n(t){let{url:l,label:n,isButton:r=!1}=t;return e.createElement("div",{className:"cta-component"},e.createElement("a",{className:"btn ".concat(r?"btn-primary":""),href:l},n&&n))}function r(t){let{ctas:l}=t;return e.createElement("div",{className:"ctas"},l.map((t=>{var l,r,a,c,o,i;return e.createElement(n,{url:null!==(l=t.link)&&void 0!==l&&l.content?null===(r=t.link)||void 0===r||null===(a=r.content)||void 0===a?void 0:a.slug:null===(c=t.link)||void 0===c?void 0:c.url,label:t.title?t.title:null===(o=t.link)||void 0===o||null===(i=o.content)||void 0===i?void 0:i.label,isButton:t.isButton})})))}function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},a.apply(this,arguments)}function c(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}const o={dots:!1,arrows:!1,infinite:!0,autoplay:!0,autoplaySpeed:5e3,speed:1e3,slidesToShow:1,slidesToScroll:1};function i(l){let{children:n}=l;return e.createElement(t,o,n)}const m=["image"],s=t=>{let{image:n}=t,r=c(t,m);return null!=n&&n.gatsbyImageData?e.createElement(l,a({image:n.gatsbyImageData},r)):n.url?e.createElement("img",{src:n.url}):null},u=["image"];function g(t){let{image:l}=t,n=c(t,u);return Array.isArray(l)&&l.length>0?e.createElement(i,null,l.map((t=>e.createElement(s,a({image:t},n))))):e.createElement(s,a({image:l},n))}function f(t){let{title:l=null,preTitle:n=null,content:a=null,alignment:c=null,bgColor:o=null,images:i=null,ctas:m=null}=t;const s=(null==i?void 0:i.length)>0,u=s&&"center"===c;return e.createElement("div",{className:"component-narrative-block ".concat(o)},e.createElement("div",{className:"container pt-4 pb-4"},e.createElement("div",{className:"row ".concat("left"===c?"flex-row-reverse":"")},e.createElement("div",{className:"nb-first-col ".concat(u||!s?"col-lg-12 text-center":"col-lg-6 mb-5 mb-lg-0"," ").concat("left"===c?"offset-lg-1":"")},n&&e.createElement("h3",null,n),l&&e.createElement("h2",null,l),a&&e.createElement("p",{dangerouslySetInnerHTML:{__html:a}}),m&&m.length>0&&e.createElement(r,{ctas:m})),i&&e.createElement("div",{className:"nb-second-col ".concat("center"===c?"col-lg-12":"col-lg-5"," ").concat("right"===c?"offset-lg-1":"")},e.createElement(g,{image:i,objectFit:"contain"})))))}export{f as NarrativeBlock};