
var newNoteButton = document.getElementsByClassName("new-note-button")[0];
var content = document.getElementsByClassName("content")[0];
var input = document.getElementsByClassName("inputText")[0];
var radioColor = document.getElementsByClassName("radio-color");
var selectColor = document.getElementsByClassName("select-color-hidden")[0];
var searcher = document.getElementsByClassName("searcher-item")[0];

newNoteButton.addEventListener("click",makeNewNote,hideColors);
content.addEventListener("click",hideColors);
input.addEventListener("click",showColors);
input.addEventListener("input", checkInput);


function checkInput(){
  var trigger = false;
  if(input.value==""){
    newNoteButton.disabled=true; 
  }
  else{
    newNoteButton.disabled=false;
  }
}

function showColors(e){
  selectColor.classList.remove("select-color-hidden");
  selectColor.classList.add("select-color");
  e.stopPropagation();
}

function hideColors(e){
  var targetClick = e.target.classList.value;
  if((targetClick == "content")||targetClick==("new-note-button")){
    selectColor.classList.remove("select-color");
    selectColor.classList.add("select-color-hidden");
  }
  console.log(e.target.classList.value);
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


