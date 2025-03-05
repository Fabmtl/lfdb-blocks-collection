<<<<<<< HEAD
(()=>{"use strict";var e,t={479:()=>{const e=window.wp.blocks,t=window.wp.hooks,l=window.wp.i18n,o=window.wp.blockEditor,n=window.wp.coreData,a=window.wp.data,i=window.wp.element,s=window.wp.components,r=window.React,c=window.wp.primitives,m=(0,r.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(c.Path,{d:"M9 9v6h11V9H9zM4 20h1.5V4H4v16z"})),u=(0,r.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(c.Path,{d:"M12.5 15v5H11v-5H4V9h7V4h1.5v5h7v6h-7Z"})),p=(0,r.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(c.Path,{d:"M4 15h11V9H4v6zM18.5 4v16H20V4h-1.5z"})),g=(0,r.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(c.Path,{d:"M19 5.5H5V4h14v1.5ZM19 20H5v-1.5h14V20ZM5 9h14v6H5V9Z"})),h=(0,r.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(c.Path,{d:"M16 5.5H8V4h8v1.5ZM16 20H8v-1.5h8V20ZM5 9h14v6H5V9Z"})),d=(0,r.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(c.Path,{d:"M5 4h14v11H5V4Zm11 16H8v-1.5h8V20Z"})),w=window.ReactJSXRuntime,_=JSON.parse('{"UU":"outermost/mega-menu"}'),b=(0,w.jsx)("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:(0,w.jsx)("path",{d:"M20,12 L4,12 L4,13.5 L20,13.5 L20,12 Z M10,6.5 L4,6.5 L4,8 L10,8 L10,6.5 Z M20,17.5 L4,17.5 L4,19 L20,19 L20,17.5 Z M20,5.62462724 L16.000015,9 L12,5.62462724 L12.9791165,4.5 L16.000015,7.04920972 L19.0208935,4.5 L20,5.62462724 Z"})});(0,e.registerBlockType)(_.UU,{icon:b,edit:function({attributes:e,setAttributes:t}){const{label:r,menuSlug:c,title:_,description:b,disableWhenCollapsed:v,collapsedUrl:x,justifyMenu:k,width:f}=e,j=(0,a.useSelect)((e=>e("core").getSite()?.url)),y=j?j+"/wp-admin/site-editor.php?postType=wp_template_part&categoryId=menu":"",C=(0,a.useSelect)((e=>e("core/editor").getEditorSettings()?.__experimentalFeatures?.layout)),{hasResolved:L,records:M}=(0,n.useEntityRecords)("postType","wp_template_part",{per_page:-1});let E=[];L&&(E=M.filter((e=>"menu"===e.area)).map((e=>({label:e.title.rendered,value:e.slug}))));const S=E.length>0,V=!c||E.some((e=>e.value===c)),T=(0,w.jsx)(s.Notice,{status:"warning",isDismissible:!1,children:(0,i.createInterpolateElement)((0,l.__)("No menu templates could be found. Create a new one in the <a>Site Editor</a>.","mega-menu-block"),{a:(0,w.jsx)("a",{href:y,target:"_blank",rel:"noreferrer"})})}),B=(0,w.jsx)(s.Notice,{status:"warning",isDismissible:!1,children:(0,l.__)("The selected menu template no longer exists. Choose another.","mega-menu-block")}),H=(0,o.useBlockProps)({className:"wp-block-navigation-item wp-block-outermost-mega-menu__toggle"}),N=[{value:"left",icon:m,label:(0,l.__)("Justify menu left","mega-menu-block")},{value:"center",icon:u,label:(0,l.__)("Justify menu center","mega-menu-block")},{value:"right",icon:p,label:(0,l.__)("Justify menu right","mega-menu-block")}],O=[{value:"content",icon:g,label:(0,l.sprintf)(
// translators: %s: container size (i.e. 600px etc)
// translators: %s: container size (i.e. 600px etc)
(0,l.__)("Content width (%s wide)","mega-menu-block"),C.contentSize)},{value:"wide",icon:h,label:(0,l.sprintf)(
// translators: %s: container size (i.e. 600px etc)
// translators: %s: container size (i.e. 600px etc)
(0,l.__)("Wide width (%s wide)","mega-menu-block"),C.wideSize)},{value:"full",icon:d,label:(0,l.__)("Full width","mega-menu-block")}];return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(o.InspectorControls,{group:"settings",children:[(0,w.jsxs)(s.PanelBody,{className:"outermost-mega-menu__settings-panel",title:(0,l.__)("Settings","mega-menu-block"),initialOpen:!0,children:[(0,w.jsx)(s.TextControl,{label:(0,l.__)("Label","mega-menu-block"),type:"text",value:r,onChange:e=>t({label:e}),autoComplete:"off"}),(0,w.jsx)(s.ComboboxControl,{label:(0,l.__)("Menu Template","mega-menu-block"),value:c,options:E,onChange:e=>t({menuSlug:e}),help:S&&(0,i.createInterpolateElement)((0,l.__)("Create and modify menu templates in the <a>Site Editor</a>.","mega-menu-block"),{a:(0,w.jsx)("a",{href:y,target:"_blank",rel:"noreferrer"})})}),!S&&T,S&&!V&&B,(0,w.jsx)(s.TextareaControl,{className:"settings-panel__description",label:(0,l.__)("Description","mega-menu-block"),type:"text",value:b||"",onChange:e=>{t({description:e})},help:(0,l.__)("The description will be displayed in the menu if the current theme supports it.","mega-menu-block"),autoComplete:"off"}),(0,w.jsx)(s.TextControl,{label:(0,l.__)("Title","mega-menu-block"),type:"text",value:_||"",onChange:e=>{t({title:e})},help:(0,l.__)("Additional information to help clarify the purpose of the link.","mega-menu-block"),autoComplete:"off"}),(0,w.jsx)(s.ToggleControl,{label:(0,l.__)("Disable in navigation overlay","mega-menu-block"),checked:v,onChange:()=>{t({disableWhenCollapsed:!v})},help:(0,l.__)("When the navigation options are displayed in an overlay, typically on mobile devices, disable the mega menu.","mega-menu-block")}),v&&(0,w.jsx)(s.TextControl,{label:(0,l.__)("Url","mega-menu-block"),type:"text",value:x||"",onChange:e=>{t({collapsedUrl:e})},help:(0,l.__)("When the navigtion menu is collapsed, link to this URL instead.","mega-menu-block"),autoComplete:"off"})]}),(0,w.jsx)(s.PanelBody,{className:"outermost-mega-menu__layout-panel",title:(0,l.__)("Layout","mega-menu-block"),initialOpen:!0,children:(0,w.jsxs)(s.__experimentalHStack,{alignment:"top",justify:"space-between",children:[(0,w.jsx)(s.__experimentalToggleGroupControl,{className:"block-editor-hooks__flex-layout-justification-controls",label:(0,l.__)("Justification","mega-menu-block"),value:k,onChange:e=>{t({justifyMenu:e})},isDeselectable:!0,children:N.map((({value:e,icon:t,iconLabel:l})=>(0,w.jsx)(s.__experimentalToggleGroupControlOptionIcon,{value:e,icon:t,label:l},e)))}),(0,w.jsx)(s.__experimentalToggleGroupControl,{className:"block-editor-hooks__flex-layout-justification-controls",label:(0,l.__)("Width","mega-menu-block"),value:f||"content",onChange:e=>{t({width:e})},__nextHasNoMarginBottom:!0,children:O.map((({value:e,icon:t,iconLabel:l})=>(0,w.jsx)(s.__experimentalToggleGroupControlOptionIcon,{value:e,icon:t,label:l},e)))})]})})]}),(0,w.jsx)("div",{...H,children:(0,w.jsxs)("button",{className:"wp-block-navigation-item__content wp-block-outermost-mega-menu__toggle",children:[(0,w.jsx)(o.RichText,{identifier:"label",className:"wp-block-navigation-item__label",value:r,onChange:e=>t({label:e}),"aria-label":(0,l.__)("Mega menu link text","mega-menu-block"),placeholder:(0,l.__)("Add label…","mega-menu-block"),allowedFormats:["core/bold","core/italic","core/image","core/strikethrough"]}),(0,w.jsx)("span",{className:"wp-block-outermost-mega-menu__toggle-icon",children:(0,w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none","aria-hidden":"true",focusable:"false",children:(0,w.jsx)("path",{d:"M1.50002 4L6.00002 8L10.5 4",strokeWidth:"1.5"})})}),b&&(0,w.jsx)("span",{className:"wp-block-navigation-item__description",children:b})]})})]})}}),(0,t.addFilter)("blocks.registerBlockType","outermost-mega-menu-add-to-navigation",((e,t)=>{var l;return"core/navigation"===t?{...e,allowedBlocks:[...null!==(l=e.allowedBlocks)&&void 0!==l?l:[],"outermost/mega-menu"]}:e}))}},l={};function o(e){var n=l[e];if(void 0!==n)return n.exports;var a=l[e]={exports:{}};return t[e](a,a.exports,o),a.exports}o.m=t,e=[],o.O=(t,l,n,a)=>{if(!l){var i=1/0;for(m=0;m<e.length;m++){l=e[m][0],n=e[m][1],a=e[m][2];for(var s=!0,r=0;r<l.length;r++)(!1&a||i>=a)&&Object.keys(o.O).every((e=>o.O[e](l[r])))?l.splice(r--,1):(s=!1,a<i&&(i=a));if(s){e.splice(m--,1);var c=n();void 0!==c&&(t=c)}}return t}a=a||0;for(var m=e.length;m>0&&e[m-1][2]>a;m--)e[m]=e[m-1];e[m]=[l,n,a]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={621:0,913:0};o.O.j=t=>0===e[t];var t=(t,l)=>{var n,a,i=l[0],s=l[1],r=l[2],c=0;if(i.some((t=>0!==e[t]))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(r)var m=r(o)}for(t&&t(l);c<i.length;c++)a=i[c],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(m)},l=self.webpackChunklfdb_blocks_collection=self.webpackChunklfdb_blocks_collection||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var n=o.O(void 0,[913],(()=>o(479)));n=o.O(n)})();
=======
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/@wordpress/icons/build-module/library/align-none.js":
/*!******************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/align-none.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const alignNone = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19 5.5H5V4h14v1.5ZM19 20H5v-1.5h14V20ZM5 9h14v6H5V9Z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (alignNone);
//# sourceMappingURL=align-none.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/justify-center.js":
/*!**********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/justify-center.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const justifyCenter = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12.5 15v5H11v-5H4V9h7V4h1.5v5h7v6h-7Z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (justifyCenter);
//# sourceMappingURL=justify-center.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/justify-left.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/justify-left.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const justifyLeft = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M9 9v6h11V9H9zM4 20h1.5V4H4v16z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (justifyLeft);
//# sourceMappingURL=justify-left.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/justify-right.js":
/*!*********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/justify-right.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const justifyRight = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4 15h11V9H4v6zM18.5 4v16H20V4h-1.5z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (justifyRight);
//# sourceMappingURL=justify-right.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/stretch-full-width.js":
/*!**************************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/stretch-full-width.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const stretchFullWidth = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M5 4h14v11H5V4Zm11 16H8v-1.5h8V20Z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stretchFullWidth);
//# sourceMappingURL=stretch-full-width.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/stretch-wide.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/stretch-wide.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const stretchWide = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M16 5.5H8V4h8v1.5ZM16 20H8v-1.5h8V20ZM5 9h14v6H5V9Z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stretchWide);
//# sourceMappingURL=stretch-wide.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/symbol-filled.js":
/*!*********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/symbol-filled.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const symbolFilled = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M21.3 10.8l-5.6-5.6c-.7-.7-1.8-.7-2.5 0l-5.6 5.6c-.7.7-.7 1.8 0 2.5l5.6 5.6c.3.3.8.5 1.2.5s.9-.2 1.2-.5l5.6-5.6c.8-.7.8-1.9.1-2.5zm-17.6 1L10 5.5l-1-1-6.3 6.3c-.7.7-.7 1.8 0 2.5L9 19.5l1.1-1.1-6.3-6.3c-.2 0-.2-.2-.1-.3z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (symbolFilled);
//# sourceMappingURL=symbol-filled.js.map

/***/ }),

/***/ "./common/icons.js":
/*!*************************!*\
  !*** ./common/icons.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const icons = {};
icons.slider = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "20",
  height: "16",
  viewBox: "0 0 20 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M5 1C5 0.447715 5.44772 0 6 0H14C14.5523 0 15 0.447715 15 1V15C15 15.5523 14.5523 16 14 16H6C5.44772 16 5 15.5523 5 15V1Z",
  fill: "black"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M0 3C0 2.44772 0.447715 2 1 2H4V14H1C0.447715 14 0 13.5523 0 13V3Z",
  fill: "black"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M16 2H19C19.5523 2 20 2.44772 20 3V13C20 13.5523 19.5523 14 19 14H16V2Z",
  fill: "black"
}));
icons.slide = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "20",
  height: "16",
  viewBox: "0 0 20 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
  x: "5.5",
  y: "0.5",
  width: "9",
  height: "15",
  rx: "1.5",
  fill: "white",
  stroke: "black"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M0 3C0 2.44772 0.447715 2 1 2H4V14H1C0.447715 14 0 13.5523 0 13V3Z",
  fill: "black"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M16 2H19C19.5523 2 20 2.44772 20 3V13C20 13.5523 19.5523 14 19 14H16V2Z",
  fill: "black"
}));
icons.playmobile = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M5.03432 17.1852C4.98693 17.2445 4.91584 17.3274 4.83291 17.4222C4.15757 18.2397 3.44669 18.216 2.8306 17.3511C2.75951 17.2563 2.68842 17.0905 2.61733 17.0905C1.6458 17.0194 1.61026 16.1663 1.40884 15.5621C0.911227 14.0455 0.508396 12.5053 0.152957 10.9532C-0.0247629 10.1831 -0.202482 9.34188 0.579484 8.71394C0.650571 8.6547 0.650571 8.46513 0.638723 8.3348C0.626876 8.20448 0.591332 8.0623 0.532092 7.93197C-0.415746 5.78749 0.816443 3.95105 2.48701 2.87289C4.63149 1.49852 6.9063 0.432207 9.45361 0.112312C10.6621 -0.0417121 11.8824 -0.100952 13.0672 0.361119C14.0032 0.728406 14.5719 1.42744 14.9511 2.28049C15.1525 2.73071 15.4131 2.92028 15.8989 2.99137C16.207 3.03876 16.5505 3.26387 16.7638 3.51268C17.9605 4.8752 18.6239 6.52206 19.3822 8.12154C19.5481 8.47698 19.7021 8.84427 19.8443 9.21155C19.9983 9.57884 20.1405 9.94613 19.7377 10.2897C19.6429 10.3727 19.6547 10.6215 19.6666 10.7873C19.6903 12.2091 19.2756 12.529 17.996 12.1499C17.5576 13.0621 17.0837 13.9389 16.7283 14.863C16.5861 15.2422 16.6335 15.7161 16.669 16.1426C16.7046 16.6284 16.5387 16.9838 16.124 17.1497C14.0032 17.9791 11.8706 18.8084 9.73797 19.5904C9.21665 19.7799 8.73089 19.6378 8.45839 19.0691C8.19773 18.5359 7.75935 18.3108 7.19065 18.1449C6.45608 17.9317 5.79259 17.5288 5.03432 17.1852ZM12.7592 8.32296C13.6833 8.78503 14.0032 9.37742 13.7189 10.0646C13.4582 10.7044 12.771 11.0243 12.1194 10.811C11.3967 10.5622 11.1953 9.93428 11.4796 8.77318C11.1834 8.64285 10.8754 8.50067 10.5436 8.3585C10.2711 8.97459 10.0105 9.57884 9.72612 10.2068C9.09818 9.93428 8.50578 9.67362 7.86599 9.38927C7.71196 9.74471 7.58164 10.0646 7.45131 10.3845C8.39915 10.8229 8.73089 11.4627 8.41099 12.1972C8.13849 12.8252 7.41576 13.1095 6.78782 12.8607C6.05325 12.5645 5.85183 11.8655 6.21912 10.8821C5.88738 10.7399 5.55563 10.5978 5.21204 10.4437C4.92769 11.0954 4.66703 11.6759 4.40638 12.2802C3.77844 12.0077 3.19789 11.7589 2.56994 11.4864C2.5344 12.7186 2.71212 13.7967 3.34006 14.7801C4.33529 16.344 5.69781 17.4103 7.46316 17.9435C7.71196 18.0146 8.03186 17.9791 8.28067 17.8843C10.8635 16.889 13.4464 15.882 16.0174 14.863C16.2543 14.7683 16.4913 14.5905 16.6216 14.3773C17.3088 13.2636 17.6524 12.0314 17.6524 10.7281C17.6524 9.03383 17.214 7.50545 15.816 6.3325C15.5553 6.9249 15.2947 7.51729 15.0222 8.12154C14.3942 7.84904 13.8018 7.58838 13.1739 7.30403C13.0435 7.64762 12.9132 7.96752 12.7592 8.32296ZM16.515 16.4388C16.4676 16.0004 16.4202 15.5621 16.3491 14.9341C13.5649 16.0241 10.8754 17.0786 8.0911 18.1686C8.47023 18.6781 8.73089 19.0335 8.99154 19.3771C11.3967 18.062 13.8729 17.1023 16.515 16.4388Z",
  fill: "black"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M12.7592 8.32296C12.9132 7.97936 13.0436 7.65947 13.1976 7.30403C13.8374 7.58838 14.4179 7.83719 15.0459 8.12154C15.3184 7.51729 15.5672 6.92489 15.8397 6.3325C17.2496 7.4936 17.688 9.03383 17.6761 10.7281C17.6761 12.0314 17.3325 13.2636 16.6453 14.3773C16.515 14.5905 16.2662 14.7683 16.0411 14.863C13.4701 15.882 10.8872 16.889 8.30436 17.8843C8.05555 17.9791 7.73566 18.0264 7.48685 17.9435C5.7215 17.4103 4.35899 16.344 3.36376 14.7801C2.73581 13.7849 2.54625 12.7067 2.59364 11.4864C3.22158 11.7589 3.80213 12.0077 4.43007 12.2802C4.69073 11.6759 4.95139 11.0954 5.23574 10.4437C5.57933 10.5978 5.91107 10.7399 6.24281 10.8821C5.86368 11.8655 6.07694 12.5645 6.81152 12.8607C7.45131 13.1214 8.16219 12.8252 8.43469 12.1972C8.75458 11.4627 8.42284 10.8347 7.475 10.3845C7.60533 10.0646 7.73566 9.74471 7.88968 9.38927C8.52947 9.67362 9.12187 9.92243 9.74981 10.2068C10.0223 9.57884 10.2948 8.97459 10.5673 8.3585C10.8991 8.51252 11.2071 8.64285 11.5033 8.77318C11.219 9.93428 11.4204 10.5622 12.1431 10.811C12.7947 11.0361 13.4819 10.7162 13.7426 10.0646C13.9914 9.36558 13.6833 8.77318 12.7592 8.32296ZM12.072 12.0906C11.4085 13.1806 10.4844 13.5005 9.31144 13.2162C9.70242 14.164 10.5081 14.5313 11.3256 14.1877C12.1194 13.856 12.4512 13.0148 12.072 12.0906Z",
  fill: "white"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M16.515 16.4388C13.8729 17.1023 11.3967 18.062 8.99154 19.3771C8.73089 19.0335 8.47023 18.6781 8.0911 18.1686C10.8754 17.0786 13.5649 16.0241 16.3491 14.9341C16.4202 15.5621 16.4676 16.0004 16.515 16.4388Z",
  fill: "white"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M12.072 12.0906C12.4512 13.0148 12.1194 13.856 11.3256 14.1877C10.5081 14.5313 9.69057 14.164 9.31144 13.2162C10.4725 13.4887 11.4085 13.1806 12.072 12.0906Z",
  fill: "black"
}));
icons.stones = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "19",
  height: "21",
  viewBox: "0 0 19 21",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M17.985 6.62296C15.1052 4.93833 15.4239 3.43581 14.3881 1.45522C14.3881 1.45522 14.206 0.931619 13.3523 0.601521C11.4855 0.168979 10.0854 1.88776 9.75535 2.17233C9.81226 1.6032 8.48049 -0.764402 5.95353 1.42107C4.21198 2.67317 4.21198 5.71235 1.27524 6.88477C1.22971 6.862 0.785787 7.16933 1.24109 7.60188C1.24109 7.60188 2.56149 8.45558 2.60702 9.98086C2.52734 10.2882 1.46875 11.3809 0.876847 13.8737C-0.227274 20.157 6.65926 23.2417 9.91471 17.4138C9.91471 17.4138 12.3392 17.4365 13.7279 14.1583C14.6158 12.2574 14.6727 10.6866 16.9151 8.23931C17.5411 7.57911 17.9623 7.1921 17.9623 7.1921C17.9623 7.1921 18.3493 6.88477 17.985 6.62296Z",
  fill: "#E52421"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M4.73558 5.37087C4.84941 5.09768 4.96323 5.06354 4.96323 5.06354C4.96323 5.06354 5.46407 4.58546 6.38607 4.46025C7.43328 4.39196 7.86582 4.8928 8.18453 5.01801C8.43495 5.17736 9.09515 5.45055 10.0171 4.94971C10.8026 4.42611 11.7132 4.4944 11.7132 4.4944C11.7132 4.4944 12.3961 4.4944 12.8856 4.97247C13.6938 5.82618 14.0011 6.65711 14.0239 6.73679C13.8986 6.7937 12.6921 7.54496 12.1685 6.08798C10.7912 7.70432 9.3911 6.85062 9.1293 6.15627C7.38774 7.55635 6.37469 6.48637 6.34054 5.71235C6.13565 5.96277 5.02015 6.34978 4.73558 5.37087Z",
  fill: "white"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M6.4999 2.06989C6.7617 1.10236 7.9455 1.03406 7.9455 1.03406C7.9455 1.03406 8.98132 1.04545 9.10653 1.75117C9.27727 2.3886 8.7992 2.61626 8.7992 2.61626C8.7992 2.61626 8.28698 2.9805 7.91135 2.44552C7.43328 2.1951 7.20562 2.42275 7.20562 2.42275C7.20562 2.42275 6.24948 2.87806 6.4999 2.06989Z",
  fill: "white"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M11.975 2.33169C11.6904 2.43413 11.2237 2.54796 11.1554 1.95606C11.3375 1.3414 12.1457 1.13651 12.1457 1.13651C12.1457 1.13651 13.3181 0.920236 13.671 1.5349C13.671 1.5349 13.8645 1.96744 13.7621 2.26339C13.1474 3.08295 12.6124 2.36584 12.6124 2.36584C12.6124 2.36584 12.2482 2.16095 11.975 2.33169Z",
  fill: "white"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M5.66896 8.62632C5.54375 8.74015 2.22001 10.9939 2.2883 14.9779C2.37936 15.8429 2.91435 15.8202 2.91435 15.8202C2.91435 15.8202 3.4721 15.8657 3.58593 14.8982C3.63146 13.851 3.93879 11.2102 6.19256 9.00195C6.98935 8.12548 5.99906 8.38728 5.66896 8.62632Z",
  fill: "white"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M10.5749 9.628C9.70982 10.5386 8.60569 14.2494 7.95688 15.3193C7.9455 15.399 6.75032 16.9812 7.69508 17.6756C8.65123 17.9374 9.30004 16.6739 9.56184 15.7064C9.69843 15.2852 10.0854 11.4606 11.9977 9.628C12.3847 9.26375 12.5555 9.07024 12.601 8.85397C12.6238 8.71738 12.6124 8.58079 12.5555 8.54664C12.4189 8.3076 11.7359 8.64908 11.7359 8.64908C11.7359 8.64908 11.1213 8.93365 10.5749 9.628Z",
  fill: "white"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);

/***/ }),

/***/ "./src/outermost-mega-menu/edit.js":
/*!*****************************************!*\
  !*** ./src/outermost-mega-menu/edit.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/icons */ "../../node_modules/@wordpress/icons/build-module/library/justify-left.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/icons */ "../../node_modules/@wordpress/icons/build-module/library/justify-center.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/icons */ "../../node_modules/@wordpress/icons/build-module/library/justify-right.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/icons */ "../../node_modules/@wordpress/icons/build-module/library/symbol-filled.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/icons */ "../../node_modules/@wordpress/icons/build-module/library/align-none.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/icons */ "../../node_modules/@wordpress/icons/build-module/library/stretch-wide.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/icons */ "../../node_modules/@wordpress/icons/build-module/library/stretch-full-width.js");
/* harmony import */ var _edit_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit.scss */ "./src/outermost-mega-menu/edit.scss");

/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 * @param {Object}   props.attributes    Available block attributes.
 * @param {Function} props.setAttributes Function that updates individual attributes.
 *
 * @return {Element} Element to render.
 */
function Edit({
  attributes,
  setAttributes
}) {
  const {
    label,
    menuSlug,
    title,
    description,
    disableWhenCollapsed,
    collapsedUrl,
    justifyMenu,
    width
  } = attributes;

  // Get the Url for the template part screen in the Site Editor.
  const siteUrl = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => select("core").getSite()?.url);
  const menuTemplateUrl = siteUrl ? siteUrl + "/wp-admin/site-editor.php?path=%2Fpatterns&categoryType=wp_template_part&categoryId=menu" : "";

  // Get the layout settings.
  const layout = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => select("core/editor").getEditorSettings()?.__experimentalFeatures?.layout);

  // Fetch all template parts.
  const {
    hasResolved,
    records
  } = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.useEntityRecords)("postType", "wp_template_part", {
    per_page: -1
  });
  let menuOptions = [];

  // Filter the template parts for those in the 'menu' area.
  if (hasResolved) {
    menuOptions = records.filter(item => item.area === "menu").map(item => ({
      label: item.title.rendered,
      value: item.slug
    }));
  }
  const hasMenus = menuOptions.length > 0;
  const selectedMenuAndExists = menuSlug ? menuOptions.some(option => option.value === menuSlug) : true;

  // Notice for when no menus have been created.
  const noMenusNotice = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Notice, {
    status: "warning",
    isDismissible: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.createInterpolateElement)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No menu templates could be found. Create a new one in the <a>Site Editor</a>.", "mega-menu-block"), {
    a: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      // eslint-disable-line
      href: menuTemplateUrl,
      target: "_blank",
      rel: "noreferrer"
    })
  }));

  // Notice for when the selected menu template no longer exists.
  const menuDoesntExistNotice = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Notice, {
    status: "warning",
    isDismissible: false
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("The selected menu template no longer exists. Choose another.", "mega-menu-block"));

  // Modify block props.
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: "wp-block-navigation-item wp-block-outermost-mega-menu__toggle"
  });
  const justificationOptions = [{
    value: "left",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__["default"],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Justify menu left", "mega-menu-block")
  }, {
    value: "center",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Justify menu center", "mega-menu-block")
  }, {
    value: "right",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__["default"],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Justify menu right", "mega-menu-block")
  }];
  const widthOptions = [{
    value: "none",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_11__["default"],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(
    // translators: %s: container size (i.e. 600px etc)
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Content width  fit content", "mega-menu-block"), layout.contentSize)
  }, {
    value: "content",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__["default"],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(
    // translators: %s: container size (i.e. 600px etc)
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Content width (%s wide)", "mega-menu-block"), layout.contentSize)
  }, {
    value: "wide",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_13__["default"],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)(
    // translators: %s: container size (i.e. 600px etc)
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Wide width (%s wide)", "mega-menu-block"), layout.wideSize)
  }, {
    value: "full",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_14__["default"],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Full width", "mega-menu-block")
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    group: "settings"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    className: "outermost-mega-menu__settings-panel",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Settings", "mega-menu-block"),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Label", "mega-menu-block"),
    type: "text",
    value: label,
    onChange: value => setAttributes({
      label: value
    }),
    autoComplete: "off"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ComboboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Menu Template", "mega-menu-block"),
    value: menuSlug,
    options: menuOptions,
    onChange: value => setAttributes({
      menuSlug: value
    }),
    help: hasMenus && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.createInterpolateElement)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Create and modify menu templates in the <a>Site Editor</a>.", "mega-menu-block"), {
      a: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        // eslint-disable-line
        href: menuTemplateUrl,
        target: "_blank",
        rel: "noreferrer"
      })
    })
  }), !hasMenus && noMenusNotice, hasMenus && !selectedMenuAndExists && menuDoesntExistNotice, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextareaControl, {
    className: "settings-panel__description",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Description", "mega-menu-block"),
    type: "text",
    value: description || "",
    onChange: descriptionValue => {
      setAttributes({
        description: descriptionValue
      });
    },
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("The description will be displayed in the menu if the current theme supports it.", "mega-menu-block"),
    autoComplete: "off"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Title", "mega-menu-block"),
    type: "text",
    value: title || "",
    onChange: titleValue => {
      setAttributes({
        title: titleValue
      });
    },
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Additional information to help clarify the purpose of the link.", "mega-menu-block"),
    autoComplete: "off"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Disable in navigation overlay", "mega-menu-block"),
    checked: disableWhenCollapsed,
    onChange: () => {
      setAttributes({
        disableWhenCollapsed: !disableWhenCollapsed
      });
    },
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("When the navigation options are displayed in an overlay, typically on mobile devices, disable the mega menu.", "mega-menu-block")
  }), disableWhenCollapsed && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Url", "mega-menu-block"),
    type: "text",
    value: collapsedUrl || "",
    onChange: collapsedUrlValue => {
      setAttributes({
        collapsedUrl: collapsedUrlValue
      });
    },
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("When the navigtion menu is collapsed, link to this URL instead.", "mega-menu-block"),
    autoComplete: "off"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    className: "outermost-mega-menu__layout-panel",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Layout", "mega-menu-block"),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalHStack, {
    alignment: "top",
    justify: "space-between"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalToggleGroupControl, {
    className: "block-editor-hooks__flex-layout-justification-controls",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Justification", "mega-menu-block"),
    value: justifyMenu,
    onChange: justificationValue => {
      setAttributes({
        justifyMenu: justificationValue
      });
    },
    isDeselectable: true
  }, justificationOptions.map(({
    value,
    icon,
    iconLabel
  }) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalToggleGroupControlOptionIcon, {
      key: value,
      value: value,
      icon: icon,
      label: iconLabel
    });
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalToggleGroupControl, {
    className: "block-editor-hooks__flex-layout-justification-controls",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Width", "mega-menu-block"),
    value: width || "content",
    onChange: widthValue => {
      setAttributes({
        width: widthValue
      });
    },
    __nextHasNoMarginBottom: true
  }, widthOptions.map(({
    value,
    icon,
    iconLabel
  }) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalToggleGroupControlOptionIcon, {
      key: value,
      value: value,
      icon: icon,
      label: iconLabel
    });
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "wp-block-navigation-item__content wp-block-outermost-mega-menu__toggle"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    identifier: "label",
    className: "wp-block-navigation-item__label",
    value: label,
    onChange: labelValue => setAttributes({
      label: labelValue
    }),
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Mega menu link text", "mega-menu-block"),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add label…", "mega-menu-block"),
    allowedFormats: ["core/bold", "core/italic", "core/image", "core/strikethrough"]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "wp-block-outermost-mega-menu__toggle-icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    "aria-hidden": "true",
    focusable: "false"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M1.50002 4L6.00002 8L10.5 4",
    strokeWidth: "1.5"
  }))), description && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "wp-block-navigation-item__description"
  }, description))));
}

/***/ }),

/***/ "./src/outermost-mega-menu/index.js":
/*!******************************************!*\
  !*** ./src/outermost-mega-menu/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/outermost-mega-menu/style.scss");
/* harmony import */ var _view_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view.scss */ "./src/outermost-mega-menu/view.scss");
/* harmony import */ var _common_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/icons */ "./common/icons.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit */ "./src/outermost-mega-menu/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./block.json */ "./src/outermost-mega-menu/block.json");
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */






/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_6__.name, {
  icon: _common_icons__WEBPACK_IMPORTED_MODULE_4__["default"].playmobile,
  edit: _edit__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/**
 * Make the Mega Menu Block available to Navigation blocks.
 *
 * @since 0.1.0
 *
 * @param {Object} blockSettings The original settings of the block.
 * @param {string} blockName     The name of the block being modified.
 * @return {Object} The modified settings for the Navigation block or the original settings for other blocks.
 */
const addToNavigation = (blockSettings, blockName) => {
  if (blockName === 'core/navigation') {
    var _blockSettings$allowe;
    return {
      ...blockSettings,
      allowedBlocks: [...((_blockSettings$allowe = blockSettings.allowedBlocks) !== null && _blockSettings$allowe !== void 0 ? _blockSettings$allowe : []), 'outermost/mega-menu']
    };
  }
  return blockSettings;
};
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('blocks.registerBlockType', 'outermost-mega-menu-add-to-navigation', addToNavigation);

/***/ }),

/***/ "./src/outermost-mega-menu/edit.scss":
/*!*******************************************!*\
  !*** ./src/outermost-mega-menu/edit.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/outermost-mega-menu/style.scss":
/*!********************************************!*\
  !*** ./src/outermost-mega-menu/style.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/outermost-mega-menu/view.scss":
/*!*******************************************!*\
  !*** ./src/outermost-mega-menu/view.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "./src/outermost-mega-menu/block.json":
/*!********************************************!*\
  !*** ./src/outermost-mega-menu/block.json ***!
  \********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"outermost/mega-menu","version":"0.1.0","title":"Mega Menu","category":"lfdb-blocks","description":"Add a mega menu to your navigation.","parent":["core/navigation"],"example":{},"attributes":{"label":{"type":"string"},"description":{"type":"string"},"title":{"type":"string"},"menuSlug":{"type":"string"},"disableWhenCollapsed":{"type":"boolean"},"collapsedUrl":{"type":"string"},"justifyMenu":{"type":"string"},"width":{"type":"string"}},"supports":{"html":false,"interactivity":true,"renaming":false,"reusable":false,"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}},"__experimentalSlashInserter":true},"textdomain":"mega-menu-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScriptModule":"file:./view.js","viewStyle":"file:./index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"outermost-mega-menu/index": 0,
/******/ 			"outermost-mega-menu/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunklfdb_blocks_collection"] = self["webpackChunklfdb_blocks_collection"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["outermost-mega-menu/style-index"], () => (__webpack_require__("./src/outermost-mega-menu/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map
>>>>>>> 82096cc9ecff279cf5c3883ef42a509cf4619c6a
