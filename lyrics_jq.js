$(document).ready(function(){  
  console.log("JQuery loaded");
  $("#sidebar").append('<input type="button" id="getLyrics" value="Get"/>');
  $("#sidebar").append('<div id = "lyrics">Lyrics</div>');
  
  $("#getLyrics").click(function() {
  console.log("Handler for .click() called.");
  var t = $("#now_playing").find(".t").html();
  var a = $("#now_playing").find(".a").html();
  
  t = t.replace(/ /gi,'_');
  a = a.replace(/ /gi,'_');
  
  console.log(t + " - " + a);
  
  $("#lyrics").load("http://lyrics.wikia.com/api.php?artist=" +a+ "&song=" +t+ "&fmt=json&X-Wikia-API-Key=d728c02d80061d1dd54006a9924c1e7a5243f539",function(){
    var text = $('#lyrics').html();
    var url = text.substring(text.search('http'),text.search('}')-2);
    $('#lyrics').load(url+" .lyricbox");
  });
  
  });
  
}); 
