clicknumber = true;

var body = document.getElementsByTagName("body")[0];
var navigation = document.getElementsByClassName("navigation")[0];
var div = document.getElementById("div-shadow");
var menubutton = document.getElementById("menu-button");
var content = document.getElementsByClassName("content")[0];

function showmenu(){
  if(window.innerWidth<768){
    div.classList.toggle("div-shadow-open");
    navigation.classList.toggle("navigation-show");  
  }
}
  function shadowfunct(){
    console.log("shadow");
    if(window.innerWidth<768){
      
      navigation.classList.toggle("navigation-show");
      div.classList.toggle("div-shadow-open");
      

    }
  }



