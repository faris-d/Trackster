const API_KEY = "b74bc84df5f10003bfb924544b6d625c";

var Trackster = {};
$(document).ready(function(){
  $("#search-button").click(function(){
    let input = $("#search-input").val();
    Trackster.searchTracksByTitle(input);
  });
});


/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {

};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  $.ajax({
    type: 'GET',
    url: "http://ws.audioscrobbler.com/2.0/?method=track.search&track=" + title + "&api_key=" + API_KEY + "&format=json",
    success: function(result){
      console.log('success', result);
    }
  });
};
