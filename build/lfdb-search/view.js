/******/ (() => { // webpackBootstrap
/*!*********************************!*\
  !*** ./src/lfdb-search/view.js ***!
  \*********************************/
/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
// console.log( 'Hello World! (from create-block-popo block)' );
/* eslint-enable no-console */

const lfdbSearchForm = document.getElementById("slide-search");
const searchButton = document.getElementById("slide-search-send");
const searchText = document.getElementById("s");
const slideMaxWidth = "200"; // custom fixed size

const wrapper = document.getElementById('lfdb-search-block');
const wrapperComputedStyle = window.getComputedStyle(wrapper, null);
let slideMaxWidthParent = slideMaxWidth;
slideMaxWidthParent += "px";
var searchTextMaxWidth, searchTextInterval;
searchTextMaxWidth = window.getComputedStyle(searchText).maxWidth;
function setSearchMaxWidth(maxWidth) {
  searchText.style.maxWidth = maxWidth;
  searchTextMaxWidth = maxWidth;
}
searchButton.addEventListener("click", event => {
  clearTimeout(searchTextInterval);

  // console.log("searchTextMaxWidth",searchTextMaxWidth);
  if (searchTextMaxWidth == "0px") {
    event.preventDefault();
    setSearchMaxWidth(slideMaxWidthParent);
    searchTextInterval = setTimeout(setSearchMaxWidth, 4000, "0px");
    return;
  }
  if (searchText.value == "") {
    event.preventDefault();
    setSearchMaxWidth("0px");
    return;
  }
  console.log(searchTextMaxWidth);
  console.log(searchText.value);
  lfdbSearchForm.submit();
}, false);
searchText.addEventListener("input", event => {
  // console.log("searchTextInterval",searchTextInterval);
  // console.log("yop");
  clearTimeout(searchTextInterval);
  searchTextInterval = null;
  //  console.log(event.target.value)
  if (event.target.value == "") {
    searchTextInterval = setTimeout(setSearchMaxWidth, 4000, "0px");
  }
});
/******/ })()
;
//# sourceMappingURL=view.js.map