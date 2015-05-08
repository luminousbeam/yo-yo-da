$(document).ready(function({
  var yodaUrl: "https://yoda.p.mashape.com/yoda?sentence=" + userInputHere,

  $.ajax({
    url: yodaUrl
    headers: {"X-Mashape-Key": "OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"},
    timeout: 6000}
    type: 'GET',
    /*data: {sentence: $("#boxArea").val()}*/
    dataType: 'json',
  }).done(function(){
    console.log("this worked!")
    /*I found this example online but did not have time to implement it. I wanted to create and trigger an update to what Yoda was saying by the input entered onto the url bar and use that as the "done" result output
    var oldLocation = location.href;
 setInterval(function() {
      if(location.href != oldLocation) {
           do your action
           oldLocation = location.href
      }
  }, 1000);*/
  
  })

});

/* I was comparing and reviewing the weather app and using it as an example
$(document).ready(function(){
  var weatherUndergroundUrl = "http://api.wunderground.com/api/b0900ea853660a3f/conditions/q/CA/San_Francisco.json"
  $.ajax({
    url: weatherUndergroundUrl,
    type: "GET",
    dataType: "json"
  }).done(function(response){
    console.log(response.current_observation.temp_f)
  }).fail(function(){
    console.log("ajax request not successful")
  }).always(function(){
    console.log("this always happens!")
  })
})*/
