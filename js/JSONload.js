$("document").ready(function(){
  name = location.hash.substring(1);
  loadDOMElements();
  getJSON();
});

function loadDOMElements(){
  titleTag = $("#programname");
  whyTag = $("#why");
  libUsedTag = $("#libsused");
  descTag = $("#description");
  downloadLinkTag = $("#download");
  imageTag = $("#image");
}

function getJSON(){
  $.getJSON("programming.json", function(json) {
    currentJson = json[name];
    
    title = currentJson["name"];
    why = currentJson["why"];
    libs = currentJson["libs"];
    desc = currentJson["description"];
    downloadLink = currentJson["download"];
    image = currentJson["image"];
    
    //needed in the json call as it is async, having outside results in null values
    editDOM();
  });
}

function editDOM(){
  titleTag.text(title);
  whyTag.text(why);
  libUsedTag.text(libs);
  descTag.text(desc);
  downloadLinkTag.attr("href",downloadLink);
  imageTag.attr("src", image);
}