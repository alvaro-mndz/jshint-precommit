module.exports = function() {
  let $mwHeader = $(tag("header", {class: "mw-header"}));
  $body.prepend($mwHeader);
};
