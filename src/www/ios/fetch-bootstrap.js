'use strict';

(function () {
  window._webViewFetch = window.fetch;
  window.fetch = undefined;
})();
