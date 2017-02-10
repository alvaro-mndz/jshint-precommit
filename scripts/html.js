module.exports = function() {
  // Properly follow mobile redirect meta tags
  fns.checkRedirect();

  // Configure/sanitize project
  fns.addCanonicalTag();
  fns.rewriteLinks();
  fns.absolutizeSrcs();
  fns.cleanMobileMetaTags();
  fns.removeAllStyles();
  fns.removeHtmlComments();

  // Import section and mapping files
  require("/sections/header.js")();
  require("/sections/footer.js")();
  fns.importTransformations();

  // Enable and configure moov_perf optimization library
  require("/perf.js")();

  // Place/replace assets in correct locations
  fns.relocateScripts();
  fns.addAssets();
};
