console.log("Loaded content script for 8tracks lyrics");
var sidebar = document.getElementById("sidebar");
var lyrics = document.createElement("div");

var butt = document.createElement("input");
butt.type = "button";
butt.value = "Get Lyrics";
butt.id="lyricsButton"

lyrics.id = "lyrics";
lyrics.innerText = document.title;

sidebar.appendChild(butt);
sidebar.appendChild(lyrics);

function replaceBlank(s){
  return s.replace(/ /gi,'_');
}

butt.onclick = function(){
  console.log("Get clicked");
  var now_play = document.getElementById('now_playing');
  var t = now_play.getElementsByClassName('t')[0].innerHTML;
  var a = now_play.getElementsByClassName('a')[0].innerHTML;
  document.getElementById('lyrics').innerText = t + " - " + a;

  a = replaceBlank(a);
  t = replaceBlank(t);

  console.log(t + " " + a);

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://lyrics.wikia.com/api.php?artist=" +a+ "&song=" +t+ "&fmt=json", true);
  xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    lyrics.innerHTML = xhr.responseText;
    var json = xhr.responseText.substring(7);
    console.log(json);
    var obj = JSON.parse(json);
    console.log(obj['lyrics']);
  }
}
xhr.send();
}
