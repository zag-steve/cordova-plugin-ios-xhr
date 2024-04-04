'use strict';

(function () {
  window.webViewFetch = window.fetch;
  window.fetch = undefined;
})();
