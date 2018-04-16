
function behaviourFunction(){

  var navigation = document.getElementsByClassName("navigation")[0];
  var div = document.getElementById("div-shadow");
  var menuButton = document.getElementsByClassName("menuButton")[0];

  div.addEventListener("click",putShadow);
  menuButton.addEventListener("click", showMenu);

  function showMenu(){
    if(window.innerWidth<768){
      div.classList.toggle("div-shadow-open");
      navigation.classList.toggle("navigation-show");  
    }
  }

  function putShadow(){
    if(window.innerWidth<768){
        
      navigation.classList.toggle("navigation-show");
      div.classList.toggle("div-shadow-open");     

      }
    }

}



