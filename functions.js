clicknumber = true;

var body = document.getElementsByTagName("body")[0];
var navigation = document.getElementsByClassName("navigation")[0];
var div = document.getElementsByClassName("div-empty")[0];
var menubutton = document.getElementById("menu-button");


function showmenu(){
  if(window.innerWidth<768){
    body.classList.toggle("body-modificado");
    navigation.classList.toggle("navigation-show");
    navigation.style.zIndex=1;    
    div.style.backgroundColor="#454444b7";

    if(clicknumber){
      div.style.zIndex = 2;
      clicknumber=false;
    }

    else{
      div.style.zIndex=-9999;
      clicknumber=true;
    }
  }

    
}


  function divhidden(){

    if(window.innerWidth<768){
      body.classList.remove("body-modificado");
      navigation.classList.remove("navigation-show");
      div.style.zIndex = -999;
      clicknumber = true;
    }
    

  }




