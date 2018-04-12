
var newNoteButton = document.getElementById("newNoteButton");
var content = document.getElementsByClassName("content")[0];
var input = document.getElementsByClassName("inputText")[0];


newNoteButton.addEventListener("click",makeNewNote);
input.addEventListener("input", ()=>{
                                      if(input.value==""){
                                        newNoteButton.disabled=true;
                                      }
                                      else{
                                        newNoteButton.disabled=false;
                                      };
                                      });

function makeNewNote(){
   
    var div = document.createElement("div");
    var p = document.createElement("p");
    var noteContent = document.createTextNode(input.value);
    p.appendChild(noteContent);
    div.appendChild(p);
    div.classList.add("content-notes");
    content.appendChild(div);
  }



