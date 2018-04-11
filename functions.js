function showmenu(){

  var body = document.getElementsByTagName("body")[0];
  body.classList.toggle("body-modificado");
  
  var navigation = document.getElementsByClassName("navigation")[0];
  navigation.classList.toggle("navigation-show");
  navigation.style.zIndex=1;

  var div = document.getElementsByClassName("div-empty")[0];
  div.style.backgroundColor="#454444b7";
  div.style.zIndex = 2;

  console.log(div);
  
}

function divhidden(){

  var body = document.getElementsByTagName("body")[0];
  body.classList.remove("body-modificado");

  var navigation = document.getElementsByClassName("navigation")[0];
  navigation.classList.remove("navigation-show");

  var div = document.getElementsByClassName("div-empty")[0];
  div.style.backgroundColor="#454444b7";
  div.style.zIndex = -999;
  

}