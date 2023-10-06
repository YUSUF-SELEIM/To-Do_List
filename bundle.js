/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Handlee&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/*\n! tailwindcss v3.3.3 | MIT License | https://tailwindcss.com\n*/\n/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n::before,\n::after {\n  --tw-content: '';\n}\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured \\`sans\\` font-family by default.\n5. Use the user's configured \\`sans\\` font-feature-settings by default.\n6. Use the user's configured \\`sans\\` font-variation-settings by default.\n*/\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n}\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from \\`html\\` so users can set them as a class directly on the \\`html\\` element.\n*/\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\nabbr:where([title]) {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n/*\nRemove the default font size and weight for headings.\n*/\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n/*\nAdd the correct font weight in Edge and Safari.\n*/\nb,\nstrong {\n  font-weight: bolder;\n}\n/*\n1. Use the user's configured \\`mono\\` font family by default.\n2. Correct the odd \\`em\\` font sizing in all browsers.\n*/\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n/*\nAdd the correct font size in all browsers.\n*/\nsmall {\n  font-size: 80%;\n}\n/*\nPrevent \\`sub\\` and \\`sup\\` elements from affecting the line height in all browsers.\n*/\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\nbutton,\nselect {\n  text-transform: none;\n}\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n:-moz-focusring {\n  outline: auto;\n}\n/*\nRemove the additional \\`:invalid\\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\nprogress {\n  vertical-align: baseline;\n}\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to \\`inherit\\` in Safari.\n*/\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n/*\nAdd the correct display in Chrome and Safari.\n*/\nsummary {\n  display: list-item;\n}\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\nfieldset {\n  margin: 0;\n  padding: 0;\n}\nlegend {\n  padding: 0;\n}\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n/*\nPrevent resizing textareas horizontally by default.\n*/\ntextarea {\n  resize: vertical;\n}\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n/*\nSet the default cursor for buttons.\n*/\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n/*\n1. Make replaced elements \\`display: block\\` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add \\`vertical-align: middle\\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n*, ::before, ::after{\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n::backdrop{\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.visible{\n  visibility: visible;\n}\n.static{\n  position: static;\n}\n.fixed{\n  position: fixed;\n}\n.absolute{\n  position: absolute;\n}\n.\\\\!relative{\n  position: relative !important;\n}\n.relative{\n  position: relative;\n}\n.sticky{\n  position: sticky;\n}\n.col-span-4{\n  grid-column: span 4 / span 4;\n}\n.col-span-full{\n  grid-column: 1 / -1;\n}\n.m-0{\n  margin: 0px;\n}\n.block{\n  display: block;\n}\n.flex{\n  display: flex;\n}\n.table{\n  display: table;\n}\n.grid{\n  display: grid;\n}\n.hidden{\n  display: none;\n}\n.h-full{\n  height: 100%;\n}\n.min-h-screen{\n  min-height: 100vh;\n}\n.w-1\\\\/2{\n  width: 50%;\n}\n.w-full{\n  width: 100%;\n}\n.min-w-0{\n  min-width: 0px;\n}\n.transform{\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.grid-cols-4{\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n.flex-col{\n  flex-direction: column;\n}\n.items-center{\n  align-items: center;\n}\n.justify-center{\n  justify-content: center;\n}\n.justify-between{\n  justify-content: space-between;\n}\n.space-x-4 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse: 0;\n  margin-right: calc(1rem * 0);\n  margin-right: calc(1rem * var(--tw-space-x-reverse));\n  margin-left: calc(1rem * (1 - 0));\n  margin-left: calc(1rem * (1 - var(--tw-space-x-reverse)));\n  margin-left: calc(1rem * calc(1 - 0));\n  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-y-2 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.5rem * (1 - 0));\n  margin-top: calc(0.5rem * (1 - var(--tw-space-y-reverse)));\n  margin-top: calc(0.5rem * calc(1 - 0));\n  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.5rem * 0);\n  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));\n}\n.space-y-4 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1rem * (1 - 0));\n  margin-top: calc(1rem * (1 - var(--tw-space-y-reverse)));\n  margin-top: calc(1rem * calc(1 - 0));\n  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1rem * 0);\n  margin-bottom: calc(1rem * var(--tw-space-y-reverse));\n}\n.truncate{\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.rounded-full{\n  border-radius: 9999px;\n}\n.border-x-\\\\[5px\\\\]{\n  border-left-width: 5px;\n  border-right-width: 5px;\n}\n.border-\\\\[\\\\#27374D\\\\]{\n  --tw-border-opacity: 1;\n  border-color: rgba(39, 55, 77, 1);\n  border-color: rgba(39, 55, 77, var(--tw-border-opacity));\n}\n.border-\\\\[\\\\#D7E5CA\\\\]{\n  --tw-border-opacity: 1;\n  border-color: rgba(215, 229, 202, 1);\n  border-color: rgba(215, 229, 202, var(--tw-border-opacity));\n}\n.bg-\\\\[\\\\#27374D\\\\]{\n  --tw-bg-opacity: 1;\n  background-color: rgba(39, 55, 77, 1);\n  background-color: rgba(39, 55, 77, var(--tw-bg-opacity));\n}\n.bg-\\\\[\\\\#526D82\\\\]{\n  --tw-bg-opacity: 1;\n  background-color: rgba(82, 109, 130, 1);\n  background-color: rgba(82, 109, 130, var(--tw-bg-opacity));\n}\n.bg-\\\\[\\\\#D7E5CA\\\\]{\n  --tw-bg-opacity: 1;\n  background-color: rgba(215, 229, 202, 1);\n  background-color: rgba(215, 229, 202, var(--tw-bg-opacity));\n}\n.bg-\\\\[\\\\#F6F1E9\\\\]{\n  --tw-bg-opacity: 1;\n  background-color: rgba(246, 241, 233, 1);\n  background-color: rgba(246, 241, 233, var(--tw-bg-opacity));\n}\n.p-1{\n  padding: 0.25rem;\n}\n.p-2{\n  padding: 0.5rem;\n}\n.p-4{\n  padding: 1rem;\n}\n.p-6{\n  padding: 1.5rem;\n}\n.p-8{\n  padding: 2rem;\n}\n.px-5{\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n.py-2{\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.py-4{\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.py-6{\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n.text-center{\n  text-align: center;\n}\n.text-2xl{\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.text-3xl{\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-4xl{\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.text-\\\\[20px\\\\]{\n  font-size: 20px;\n}\n.text-sm{\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-xl{\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.font-medium{\n  font-weight: 500;\n}\n.uppercase{\n  text-transform: uppercase;\n}\n.lowercase{\n  text-transform: lowercase;\n}\n.italic{\n  font-style: italic;\n}\n.text-\\\\[\\\\#000\\\\]{\n  --tw-text-opacity: 1;\n  color: rgba(0, 0, 0, 1);\n  color: rgba(0, 0, 0, var(--tw-text-opacity));\n}\n.text-black{\n  --tw-text-opacity: 1;\n  color: rgba(0, 0, 0, 1);\n  color: rgba(0, 0, 0, var(--tw-text-opacity));\n}\n.text-gray-900{\n  --tw-text-opacity: 1;\n  color: rgba(17, 24, 39, 1);\n  color: rgba(17, 24, 39, var(--tw-text-opacity));\n}\n.text-white{\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, 1);\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.underline{\n  text-decoration-line: underline;\n}\n.shadow-2xl{\n  --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\n.shadow-lg{\n  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\n.shadow-xl{\n  --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);\n  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\n.filter{\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n\nbody {\n    font-family: 'Handlee', serif;\n    color: #DDE6ED;\n}\n\n.grid-rows-layout {\n    grid-template-rows: auto 1fr auto;\n}\n\n.task-done {\n    -webkit-text-decoration: line-through;\n    text-decoration: line-through;\n    border-left: 5px solid #27374D;\n}\n\n.hover\\\\:rotate-6:hover{\n  --tw-rotate: 6deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(6deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.hover\\\\:scale-y-105:hover{\n  --tw-scale-y: 1.05;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(1.05);\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.hover\\\\:border-2:hover{\n  border-width: 2px;\n}\n\n.hover\\\\:border-x-\\\\[5px\\\\]:hover{\n  border-left-width: 5px;\n  border-right-width: 5px;\n}\n\n.hover\\\\:border-l-\\\\[5px\\\\]:hover{\n  border-left-width: 5px;\n}\n\n.focus\\\\:outline-none:focus{\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n.focus\\\\:ring-2:focus{\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color), 0 0 rgba(0,0,0,0);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0,0,0,0));\n}\n\n.focus\\\\:ring-\\\\[\\\\#27374D\\\\]:focus{\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgba(39, 55, 77, var(--tw-ring-opacity));\n}\n\n@media (min-width: 768px){\n  .md\\\\:col-span-full{\n    grid-column: 1 / -1;\n  }\n  .md\\\\:col-start-2{\n    grid-column-start: 2;\n  }\n  .md\\\\:row-span-full{\n    grid-row: 1 / -1;\n  }\n  .md\\\\:row-start-2{\n    grid-row-start: 2;\n  }\n  .md\\\\:block{\n    display: block;\n  }\n  .md\\\\:hidden{\n    display: none;\n  }\n  .md\\\\:w-1\\\\/4{\n    width: 25%;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n\tconstructor(name) {\n\t\tthis.name = name;\n\t\tthis.tasks = [];\n\t}\n}\n\n\n//# sourceURL=webpack://todo-list/./src/Project.js?");

/***/ }),

/***/ "./src/create_project.js":
/*!*******************************!*\
  !*** ./src/create_project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n\n\n\nfunction createProject() {\n\tconst projects = JSON.parse(localStorage.getItem(\"projects\")) || [];\n\tconst projectInput = document.getElementById(\"projectInput\");\n\tconst projectName = projectInput.value.trim();\n\tif (projectName === \"\") {\n\t\talert(\"Project Name Cannot be empty\");\n\t\treturn;\n\t}\n\tconst newProject = new _Project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](projectName);\n\tprojects.push(newProject);\n\tlocalStorage.setItem(\"projects\", JSON.stringify(projects));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);\n\n\n//# sourceURL=webpack://todo-list/./src/create_project.js?");

/***/ }),

/***/ "./src/create_task.js":
/*!****************************!*\
  !*** ./src/create_task.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\n\nfunction createTask(projectIndex) {\n\tconst projects = JSON.parse(localStorage.getItem(\"projects\")) || [];\n\tconst taskInput = document.getElementById(\"taskInput\");\n\tconst taskName = taskInput.value.trim();\n\tif (taskName === \"\") {\n\t\talert(\"Task Name Cannot be empty\");\n\t\treturn;\n\t}\n\tconst newTask = new _task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](taskName);\n\tprojects[projectIndex].tasks.push(newTask);\n\tlocalStorage.setItem(\"projects\", JSON.stringify(projects));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTask);\n\n\n//# sourceURL=webpack://todo-list/./src/create_task.js?");

/***/ }),

/***/ "./src/delete_project.js":
/*!*******************************!*\
  !*** ./src/delete_project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _main_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main_content */ \"./src/main_content.js\");\n\n\n\nfunction deleteProject(projectIndex) {\n\tconst projects = JSON.parse(localStorage.getItem(\"projects\")) || [];\n\tprojects.splice(projectIndex, 1);\n\t_main_content__WEBPACK_IMPORTED_MODULE_1__.tasksContainer.textContent = \"\";\n\tlocalStorage.setItem(\"projects\", JSON.stringify(projects));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteProject);\n\n\n//# sourceURL=webpack://todo-list/./src/delete_project.js?");

/***/ }),

/***/ "./src/delete_task.js":
/*!****************************!*\
  !*** ./src/delete_task.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\nfunction deleteTask(taskName, projectIndex) {\n\t// we get the project Index to know which project to delete the task from\n\tconst projects = JSON.parse(localStorage.getItem(\"projects\")) || [];\n\t// Find the index of the task with the given name in the tasks array\n\tconst taskIndex = projects[projectIndex].tasks.findIndex(\n\t\t(task) => task.name === taskName\n\t);\n\tif (taskIndex !== -1) {\n\t\t// Remove the task from the tasks array\n\t\tprojects[projectIndex].tasks.splice(taskIndex, 1);\n\t\t// Update the local storage with the updated tasks array\n\t\tlocalStorage.setItem(\"projects\", JSON.stringify(projects));\n\t}\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteTask);\n\n\n//# sourceURL=webpack://todo-list/./src/delete_task.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\nfunction createFooter() {\n\tconst footer = document.getElementById(\"footer\");\n\tfooter.classList.add(\n\t\t\"bg-[#27374D]\",\n\t\t\"w-full\",\n\t\t\"col-span-full\",\n\t\t\"p-4\",\n\t\t\"flex\",\n\t\t\"justify-center\",\n\t\t\"shadow-xl\"\n\t);\n\n\tconst title = document.createElement(\"div\");\n\ttitle.innerHTML =\n\t\t'<a href=\"https://github.com/YUSUF-SELEIM\"><i class=\"fa fa-github\"></i>@YUSUF-SELEIM</a>';\n\tfooter.append(title);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFooter);\n\n\n//# sourceURL=webpack://todo-list/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_hamMenuButton_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/hamMenuButton.svg */ \"./src/assets/hamMenuButton.svg\");\n\n\n\nfunction createHeader() {\n\tconst header = document.getElementById(\"header\");\n\theader.classList.add(\n\t\t\"bg-[#27374D]\",\n\t\t\"w-full\",\n\t\t\"col-span-full\",\n\t\t\"p-8\",\n\t\t\"flex\",\n\t\t\"justify-between\",\n\t\t\"shadow-xl\"\n\t);\n\n\tconst title = document.createElement(\"div\");\n\ttitle.textContent = \"To-Do List ✔️\";\n\ttitle.classList.add(\"text-4xl\");\n\n\tconst hamMenu = new Image();\n\thamMenu.src = _assets_hamMenuButton_svg__WEBPACK_IMPORTED_MODULE_1__;\n\thamMenu.classList.add(\"md:hidden\");\n\n\tconst sideBar = document.getElementById(\"side-bar\");\n\n\thamMenu.onclick = function () {\n\t\tsideBar.classList.toggle(\"hidden\");\n\t};\n\n\theader.append(title, hamMenu);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);\n\n\n//# sourceURL=webpack://todo-list/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _initiate_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initiate_ui */ \"./src/initiate_ui.js\");\n\n\n\n(0,_initiate_ui__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/initiate_ui.js":
/*!****************************!*\
  !*** ./src/initiate_ui.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _side_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./side_bar */ \"./src/side_bar.js\");\n/* harmony import */ var _main_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main_content */ \"./src/main_content.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n\n\n\n\n\n\nfunction createUI() {\n\tconst body = document.getElementById(\"body\");\n\tbody.classList.add(\n\t\t\"min-h-screen\",\n\t\t\"bg-[#D7E5CA]\",\n\t\t\"grid\",\n\t\t\"grid-rows-layout\",\n\t\t\"grid-cols-4\"\n\t);\n\n\t(0,_side_bar__WEBPACK_IMPORTED_MODULE_2__.createSideBar)();\n\t(0,_main_content__WEBPACK_IMPORTED_MODULE_3__.createMainContent)();\n\t(0,_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\t(0,_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createUI);\n\n\n//# sourceURL=webpack://todo-list/./src/initiate_ui.js?");

/***/ }),

/***/ "./src/main_content.js":
/*!*****************************!*\
  !*** ./src/main_content.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMainContent: () => (/* binding */ createMainContent),\n/* harmony export */   tasksContainer: () => (/* binding */ tasksContainer),\n/* harmony export */   updateTasksUI: () => (/* binding */ updateTasksUI)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_trash_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/trash.svg */ \"./src/assets/trash.svg\");\n/* harmony import */ var _create_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create_task */ \"./src/create_task.js\");\n/* harmony import */ var _delete_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delete_task */ \"./src/delete_task.js\");\n/* harmony import */ var _task_done__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task-done */ \"./src/task-done.js\");\n/* harmony import */ var _side_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./side_bar */ \"./src/side_bar.js\");\n/* eslint-disable no-undef */\n\n\n\n\n\n\n\nconst tasksContainer = document.getElementById(\"tasks-container\");\nconst welcome = document.getElementById(\"Welcome\");\nfunction createMainContent() {\n\tconst mainContent = document.getElementById(\"main-content\");\n\tmainContent.classList.add(\n\t\t\"p-6\",\n\t\t\"text-black\",\n\t\t\"h-full\",\n\t\t\"flex\",\n\t\t\"flex-col\",\n\t\t\"col-span-full\",\n\t\t\"md:col-start-2\",\n\t\t\"md:row-start-2\"\n\t);\n\n\ttasksContainer.classList.add(\"flex\", \"flex-col\", \"space-y-2\");\n\n\tconst addTaskButton = document.getElementById(\"addTaskButton\");\n\taddTaskButton.onclick = function () {\n\t\t// the problem is how to make the globalIndex default to zero instead of clicking\n\t\t// it is solved by creating that Welcome Screen\n\t\t(0,_create_task__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_side_bar__WEBPACK_IMPORTED_MODULE_5__.globalProjectIndex);\n\t\tupdateTasksUI(_side_bar__WEBPACK_IMPORTED_MODULE_5__.globalProjectIndex);\n\t};\n\twelcome.classList.remove(\"hidden\");\n\twelcome.classList.add(\n\t\t\"flex\",\n\t\t\"justify-center\",\n\t\t\"items-center\",\n\t\t\"text-3xl\",\n\t\t\"p-6\",\n\t\t\"text-[#000]\",\n\t\t\"text-center\",\n\t\t\"col-span-full\",\n\t\t\"md:col-start-2\",\n\t\t\"md:row-start-2\"\n\t);\n\tmainContent.classList.add(\"hidden\");\n}\n\nfunction updateTasksUI(inWhichProjectIndex) {\n\ttasksContainer.textContent = \"\";\n\tconst tasksToBeRendered = createTaskUI(inWhichProjectIndex);\n\tconsole.log(tasksToBeRendered);\n\n\ttasksToBeRendered.forEach((task) => {\n\t\ttasksContainer.append(task);\n\t});\n}\n\nfunction createTaskUI(inWhichProjectIndex) {\n\tconst projects = JSON.parse(localStorage.getItem(\"projects\")) || [];\n\tconst tasksArrayToBeRendered = [];\n\n\tprojects[inWhichProjectIndex].tasks.forEach(function (task) {\n\t\tconst taskDiv = document.createElement(\"div\");\n\t\ttaskDiv.classList.add(\n\t\t\t\"flex\",\n\t\t\t\"justify-between\",\n\t\t\t\"items-center\",\n\t\t\t\"p-2\",\n\t\t\t\"bg-[#526D82]\",\n\t\t\t\"border-[#27374D]\",\n\t\t\t\"rounded-full\",\n\t\t\t\"shadow-lg\",\n\t\t\t\"hover:scale-y-105\",\n\t\t\t\"hover:border-l-[5px]\"\n\t\t);\n\t\tif (task.doneOrNot) {\n\t\t\ttaskDiv.classList.add(\"task-done\");\n\t\t} else {\n\t\t\ttaskDiv.classList.remove(\"task-done\");\n\t\t}\n\t\tconst taskNameDiv = document.createElement(\"div\");\n\t\ttaskNameDiv.classList.add(\"text-2xl\");\n\t\ttaskNameDiv.innerText = task.name;\n\n\t\ttaskNameDiv.addEventListener(\"click\", function () {\n\t\t\tconsole.log(\"you clicked \" + task.name);\n\t\t\tconsole.log(\"from main it is \" + _side_bar__WEBPACK_IMPORTED_MODULE_5__.globalProjectIndex);\n\t\t\t(0,_task_done__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(task.name, _side_bar__WEBPACK_IMPORTED_MODULE_5__.globalProjectIndex);\n\t\t\ttaskDiv.classList.toggle(\"task-done\");\n\t\t});\n\t\ttaskDiv.style.cursor = \"pointer\";\n\t\tconst deleteButton = document.createElement(\"a\");\n\t\tdeleteButton.style.cursor = \"pointer\";\n\t\tconst trashBin = new Image();\n\t\ttrashBin.classList.add(\"hover:rotate-6\");\n\t\ttrashBin.src = _assets_trash_svg__WEBPACK_IMPORTED_MODULE_1__;\n\t\tdeleteButton.append(trashBin);\n\t\tdeleteButton.addEventListener(\"click\", function () {\n\t\t\tconsole.log(\"delete\");\n\t\t\tconsole.log(task.name);\n\t\t\t(0,_delete_task__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(task.name, _side_bar__WEBPACK_IMPORTED_MODULE_5__.globalProjectIndex);\n\t\t\tupdateTasksUI(_side_bar__WEBPACK_IMPORTED_MODULE_5__.globalProjectIndex);\n\t\t});\n\n\t\ttaskDiv.appendChild(taskNameDiv);\n\t\ttaskDiv.appendChild(deleteButton);\n\t\ttasksArrayToBeRendered.push(taskDiv);\n\t});\n\ttaskInput.value = \"\";\n\treturn tasksArrayToBeRendered;\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/main_content.js?");

/***/ }),

/***/ "./src/side_bar.js":
/*!*************************!*\
  !*** ./src/side_bar.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createSideBar: () => (/* binding */ createSideBar),\n/* harmony export */   globalProjectIndex: () => (/* binding */ globalProjectIndex)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _create_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create_project */ \"./src/create_project.js\");\n/* harmony import */ var _assets_trash_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/trash.svg */ \"./src/assets/trash.svg\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _delete_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delete_project */ \"./src/delete_project.js\");\n/* harmony import */ var _main_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main_content */ \"./src/main_content.js\");\n/* eslint-disable camelcase */\n/* eslint-disable no-undef */\n\n\n\n\n\n\n\nconst projectsContainer = document.getElementById(\"projects-container\");\nconst welcome = document.getElementById(\"Welcome\");\n\nlet globalProjectIndex = 0;\nfunction createSideBar() {\n\tconst projects = JSON.parse(localStorage.getItem(\"projects\")) || [];\n\t// there is a default project in here that is created once which is triggered when we press\n\tif (projects.length === 0) {\n\t\tconst defaultProject = new _Project__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"Home\");\n\t\tprojects.unshift(defaultProject);\n\t}\n\tlocalStorage.setItem(\"projects\", JSON.stringify(projects));\n\n\tconst sideBar = document.getElementById(\"side-bar\");\n\tsideBar.classList.add(\n\t\t\"bg-[#526D82]\",\n\t\t\"w-full\",\n\t\t\"flex\",\n\t\t\"flex-col\",\n\t\t\"items-center\",\n\t\t\"space-y-4\",\n\t\t\"p-6\",\n\t\t\"md:w-1/4\",\n\t\t\"md:row-span-full\",\n\t\t\"col-span-4\",\n\t\t\"md:row-start-2\",\n\t\t\"md:col-span-full\",\n\t\t\"md:block\",\n\t\t\"shadow-2xl\"\n\t);\n\n\tprojectsContainer.classList.add(\"flex\", \"flex-col\", \"space-y-2\", \"w-full\");\n\n\tconst addProjectButton = document.getElementById(\"addProjectButton\");\n\taddProjectButton.onclick = function () {\n\t\t(0,_create_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\t\tupdateProjectsUI();\n\t};\n\tupdateProjectsUI();\n}\n\nfunction updateProjectsUI() {\n\tprojectsContainer.textContent = \"\";\n\tconst projectsToBeRendered = createProjectUI();\n\tconsole.log(projectsToBeRendered);\n\n\tprojectsToBeRendered.forEach((project) => {\n\t\tprojectsContainer.append(project);\n\t});\n}\nfunction createProjectUI() {\n\tconst projects = JSON.parse(localStorage.getItem(\"projects\")) || [];\n\tconst projectsArrayToBeRendered = [];\n\n\tprojects.forEach(function (project) {\n\t\tconst projectDiv = document.createElement(\"div\");\n\t\tprojectDiv.classList.add(\n\t\t\t\"flex\",\n\t\t\t\"justify-between\",\n\t\t\t\"items-center\",\n\t\t\t\"p-2\",\n\t\t\t\"bg-[#27374D]\",\n\t\t\t\"rounded-full\",\n\t\t\t\"border-[#D7E5CA]\",\n\t\t\t\"shadow-lg\",\n\t\t\t\"hover:scale-y-105\",\n\t\t\t\"hover:border-x-[5px]\"\n\t\t);\n\t\tprojectDiv.style.cursor = \"pointer\";\n\n\t\tconst projectNameDiv = document.createElement(\"div\");\n\t\tprojectNameDiv.id = \"pNameDiv\";\n\t\tprojectNameDiv.classList.add(\"text-2xl\");\n\t\tprojectNameDiv.innerText = project.name;\n\n\t\tprojectNameDiv.addEventListener(\"click\", function () {\n\t\t\tdocument.getElementById(\"tasks\").textContent = \"Tasks of \" + project.name;\n\n\t\t\tconst projectIndex = projects.findIndex(function (p) {\n\t\t\t\treturn p.name === project.name;\n\t\t\t});\n\n\t\t\tglobalProjectIndex = projectIndex;\n\t\t\tconst main_content = document.getElementById(\"main-content\");\n\t\t\tmain_content.classList.remove(\"hidden\");\n\t\t\twelcome.classList.add(\"hidden\");\n\t\t\t// the problem was here\n\t\t\t(0,_main_content__WEBPACK_IMPORTED_MODULE_5__.updateTasksUI)(projectIndex);\n\n\t\t\t// Remove the style from all projectDiv elements\n\t\t\tprojectsArrayToBeRendered.forEach((project) => {\n\t\t\t\tproject.classList.remove(\"border-x-[5px]\");\n\t\t\t});\n\n\t\t\t// // Apply the style to the clicked projectDiv\n\t\t\tprojectDiv.classList.add(\"border-x-[5px]\");\n\n\t\t\t// console.log(\"Project Index:\", projectIndex);\n\t\t\t// console.log(projects[projectIndex]);\n\t\t\t// console.log(\"from sidebar \" + projectIndex)\n\t\t});\n\t\tconst deleteButton = document.createElement(\"a\");\n\t\tdeleteButton.style.cursor = \"pointer\";\n\t\tconst trashBin = new Image();\n\t\ttrashBin.classList.add(\"hover:rotate-6\");\n\t\ttrashBin.src = _assets_trash_svg__WEBPACK_IMPORTED_MODULE_2__;\n\t\tif (projectNameDiv.innerText !== \"Home\") {\n\t\t\tdeleteButton.append(trashBin);\n\t\t}\n\t\tdeleteButton.addEventListener(\"click\", function () {\n\t\t\tconst projectIndex = projects.findIndex(function (p) {\n\t\t\t\treturn p.name === project.name;\n\t\t\t});\n\t\t\tconsole.log(\"delete\");\n\t\t\tconsole.log(project.name);\n\t\t\t(0,_delete_project__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(projectIndex);\n\t\t\t// here i need to call something that sends zero or force the user to click on home\n\t\t\tconst main_content = document.getElementById(\"main-content\");\n\t\t\tmain_content.classList.add(\"hidden\");\n\t\t\twelcome.classList.remove(\"hidden\");\n\t\t\tupdateProjectsUI();\n\t\t});\n\n\t\tprojectDiv.appendChild(projectNameDiv);\n\t\tprojectDiv.appendChild(deleteButton);\n\t\tprojectsArrayToBeRendered.push(projectDiv);\n\t});\n\tprojectInput.value = \"\";\n\n\treturn projectsArrayToBeRendered;\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/side_bar.js?");

/***/ }),

/***/ "./src/task-done.js":
/*!**************************!*\
  !*** ./src/task-done.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\nfunction taskDOne(taskName, projectIndex) {\n\tconst projects = JSON.parse(localStorage.getItem(\"projects\")) || [];\n\tprojects[projectIndex].tasks.forEach((task) => {\n\t\tif (task.name === taskName) {\n\t\t\tif (task.doneOrNot) {\n\t\t\t\ttask.doneOrNot = false;\n\t\t\t} else {\n\t\t\t\ttask.doneOrNot = true;\n\t\t\t}\n\t\t}\n\t});\n\tlocalStorage.setItem(\"projects\", JSON.stringify(projects));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskDOne);\n\n\n//# sourceURL=webpack://todo-list/./src/task-done.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n\tconstructor(name, doneOrNot = false) {\n\t\tthis.name = name;\n\t\tthis.doneOrNot = doneOrNot;\n\t}\n}\n\n\n//# sourceURL=webpack://todo-list/./src/task.js?");

/***/ }),

/***/ "./src/assets/hamMenuButton.svg":
/*!**************************************!*\
  !*** ./src/assets/hamMenuButton.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"hamMenuButton.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/hamMenuButton.svg?");

/***/ }),

/***/ "./src/assets/trash.svg":
/*!******************************!*\
  !*** ./src/assets/trash.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"trash.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/trash.svg?");

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
/******/ 			id: moduleId,
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
/************************************************************************/
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;