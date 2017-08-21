//Business Logic(Back-End)
function placesVisted(location, landmarks, season, food, transportation){
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
  this.food = food;
  this.transportation = transportation;
}

placesVisted.prototype.places = function() {
  return this.location + " " + this.landmarks + " " + this.season + " " + this.food + this.transportation;
}

//User Interface (UI or Front-End)

$(document).ready(function(){
  $("#places").submit(function(event){
    event.preventDefault();
debugger
    var location = $("#location").val();
    var landmarks = $("#landmarks").val();
    var season = $("#season").val();
    var food = $("#food").val();
    var transportation = $("#transportation").val();

    var newPlace = new placesVisted(location, landmarks, season, food, transportation);

    $("ul#addingPlaces").append("<li><span class='place'>" + newPlace.location + "</span></li>");



    $(".place").last().click(function() {
      $("#showPlace").show();
      $("#showPlace h2").text(newPlace.location);
      $(".location").text(newPlace.location);
      $(".landmarks").text(newPlace.landmarks);
      $(".seaon").text(newPlace.season);
      $(".food").text(newPlace.food);
      $(".transportation").text(newPlace.transportation);
     $("ul#addingPlaces").append("<li><span class='place'>" + newPlace.place + "</span></li>");
    });

    $("input#location").val("");
    $("input#landmarks").val("");
    $("input#season").val("");
    $("input#food").val("");
    $("input#transportation").val("");
  });
});
