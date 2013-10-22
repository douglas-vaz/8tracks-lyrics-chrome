/**
-#Copyright (c) 2013 Douglas Vaz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

$(document).ready(function(){  

  $("#sidebar").append('<input type="button" id="getLyrics" value="Get"/>');
  $("#sidebar").append('<div id = "lyrics" style="overflow-y: auto; width: 301px; height: 400px;">Lyrics</div>');
  
  $("#getLyrics").click(function() {
  console.log("Handler for .click() called.");
  var track = $("#now_playing").find(".t").html();
  var artist = $("#now_playing").find(".a").html();
  
  //Replace whitespace with underscore
  track = track.replace(/ /gi,'_');
  artist = artist.replace(/ /gi,'_');
  
  console.log(track + " - " + artist);
  
  $("#lyrics").load("http://lyrics.wikia.com/api.php?artist=" + artist + "&song=" + track + "&fmt=json&X-Wikia-API-Key=d728c02d80061d1dd54006a9924c1e7a5243f539",function(){
    var text = $('#lyrics').html();
    var url = text.substring(text.search('http'),text.search('}')-2);
    $('#lyrics').load(url+" .lyricbox");
  });
  });
}); 
