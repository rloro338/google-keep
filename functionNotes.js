
var newNoteButton = document.getElementById("newNoteButton");
var content = document.getElementsByClassName("content")[0];
var input = document.getElementsByClassName("inputText")[0];
var radioColor = document.getElementsByClassName("radio-color");


newNoteButton.addEventListener("click",makeNewNote);
input.addEventListener("input", checkInput);

function checkInput(){
  if(input.value==""){
    newNoteButton.disabled=true;
    }
  else{
    newNoteButton.disabled=false;
    }
}

function getColor(){
  var color;
  for(i=0;i<radioColor.length;i++){
    if(radioColor[i].checked){
      color = radioColor[i].value;
    }
  }
  return color;
}


function makeNewNote(){
    var color = getColor();
    var div = document.createElement("div");
    var p = document.createElement("p");
    var noteContent = document.createTextNode(input.value);
    p.appendChild(noteContent);
    div.appendChild(p);
    div.style.backgroundColor = color;
    div.classList.add("content-notes");
    content.appendChild(div);
    input.value="";
    newNoteButton.disabled=true;

   
 
    
   

}


