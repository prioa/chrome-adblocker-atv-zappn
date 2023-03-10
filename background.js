const defaultFilters = [
  "*://*.zomap.de/*",
  "*://swankyrule.zomap.de/*",
  "*://*.adition.com/*",
  "*://player-feedback.p7s1video.net/*",
  "*://broker.datazoom.io/*",
];

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return { cancel: true };
  },
  { urls: defaultFilters },
  ["blocking"]
);
