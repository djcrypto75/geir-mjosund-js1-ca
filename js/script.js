jQuery(document).ready(function($) {
  var API_URL = "https://rickandmortyapi.com/api/character/";

  function getResultsList() {
    fetch(API_URL)
      .then(resp => resp.json())
      .then(function(data) {
        $('.loader').css("display", "none");
        appendList(data.results);
      });
  }

  function appendList(data) {
    for (var item of data) {
      $(".results").append(
        '<div class="col-sm-6 col-md-4 col-lg-3"><div class="card h-95"id="character' +
          item.id +
          '"><img class="image" src="' +
          item.image +
          '" alt="Character Name" />' +
          '<div class="details">' +
          '<h4 class="name">' +
          item.name +
          "</h4>" +
          "<p>Type: " +
          item.type +
          "</p>" +
          "<p>Episode count: " +
          item.episode.length +
          "</p>" +
          '<a class="btn btn-primary" href="details.html?id=' +
          item.id +
          '">Details</a>' +
          "</div></div></div>"
      );
    }
  }
  getResultsList();
});
