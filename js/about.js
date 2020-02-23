jQuery(document).ready(function($) {
  function parseData(node) {
    var elements = node.children();
    for (var element of elements) {
      if ($(element).children().length === 0) {
        bindData(element);
      } else {
        parseData($(element));
      }
    }
  }

  function bindData(element) {
    var replaceString = element.innerText
      .replace(/the/g, "replaced")
      .replace(/The/g, "Replaced");
    $(element).html(replaceString);
  }

  setTimeout(function() {
    parseData($("main"));
  }, 4000);
});
