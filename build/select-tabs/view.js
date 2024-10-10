/******/ (() => { // webpackBootstrap
/*!*********************************!*\
  !*** ./src/select-tabs/view.js ***!
  \*********************************/
jQuery(document).ready(function ($) {
  // alert("yeah1");
  const trous = $(".bloc-trou-golf");
  const selectTrous = $("#select-liste-des-trous");
  let currentTrou;
  trous.each(function (index) {
    $(selectTrous).append($('<option>', {
      value: index,
      text: $(this).find("h2")[0].outerText
    }));
  });
  const hideTrous = () => {
    trous.each(function (index) {
      $(trous[index]).removeClass("is-active");
    });
    stopVideos();
  };
  var stopVideos = function () {
    var videos = document.querySelectorAll('iframe, video');
    Array.prototype.forEach.call(videos, function (video) {
      if (video.tagName.toLowerCase() === 'video') {
        video.pause();
      } else {
        var src = video.src;
        video.src = src;
      }
    });
  };
  $(selectTrous).on('change', function () {
    if ($(trous[$(this).val()]) == currentTrou) return;
    hideTrous();
    currentTrou = $(trous[$(this).val()]);
    $(currentTrou).addClass("is-active");
  });
  $(trous[0]).addClass("is-active");
});
/******/ })()
;
//# sourceMappingURL=view.js.map