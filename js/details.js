jQuery(document).ready(function($) {
  var API_URL = "https://rickandmortyapi.com/api/character/";
  var searchId = window.location.search.split("=")[1];

  function getResultsList() {
    fetch(API_URL + searchId)
      .then(resp => resp.json())
      .then(function(data) {
        $(document).prop('title', data.name);
        renderDetails(data);
      })
      .catch(function() {
        window.location.href = 'error.html'
      });
  }
  getResultsList();

  function renderDetails(data) {
    $("#details").append(
      '<img class="details-image" src="' +
        data.image +
        '" alt=" ' +
        data.name +
        ' " />' +
        '<div class="detail-details">' +
        "<h1>" +
        data.name +
        "</h1>" +
        '<p>Status: <span class="value" id="status">' +
        data.status +
        "</span></p>" +
        '<p>Species: <span class="value" id="species">' +
        data.species +
        "</span></p>" +
        '<p>Origin: <span class="value" id="origin">' +
        data.origin.name +
        "</span></p>" +
        '<p>Location: <span class="value" id="location"> ' +
        data.location.name +
        " </span></p>" +
        "</div>"
    );
  }
});
