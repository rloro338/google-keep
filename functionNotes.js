var newNoteButton = document.getElementsByClassName("new-note-button")[0];
var content = document.getElementsByClassName("content")[0];
var containerNotes = document.getElementsByClassName("content-notes-container")[0];
var input = document.getElementsByClassName("inputText")[0];
var radioColor = document.getElementsByClassName("radio-color");
var selectColor = document.getElementsByClassName("select-color-hidden")[0];
var searcher = document.getElementsByClassName("searcher-item")[0];

newNoteButton.addEventListener("click", makeNewNote, hideColors, discheckRadioButtons);
content.addEventListener("click", hideColors, discheckRadioButtons);
containerNotes.addEventListener("click", discheckRadioButtons);
input.addEventListener("click", showColors);
input.addEventListener("input", checkInput);

console.log(newNoteButton);

function checkInput() {
  var noSpacesRegExp = new RegExp('^[\\s]{0,}$');
  if (noSpacesRegExp.test(input.value)) {
    newNoteButton.disabled = true;
  }
  else {
    newNoteButton.disabled = false;
  }
}

function checkInput2(){
  if (!!input.value.trim()) {
    newNoteButton.disabled = false;
  }
  else {
    newNoteButton.disabled = true;
    
  }
  
}

function showColors() {
  selectColor.classList.remove("select-color-hidden");
  selectColor.classList.add("select-color");
}

function hideColors(e) {
  var targetClick = e.target.classList.value;
  if ((targetClick == "content-notes-container") || targetClick == ("new-note-button") || targetClick == ("content")) {
    selectColor.classList.remove("select-color");
    selectColor.classList.add("select-color-hidden");
    input.value = "";
  }
}

function discheckRadioButtons() {
  for (i = 0; i < radioColor.length; i++) {
    radioColor[i].checked = false;
  }
}

function getRadioButtonColor() {

  /*Random color if not check any radio button */
  var color;
  var r = Math.floor(Math.random() * 257);
  var g = Math.floor(Math.random() * 257);
  var b = Math.floor(Math.random() * 257);
  var color = "rgb(" + r + "," + g + "," + b + ")";

  /*Color from checking radio button */

  for (i = 0; i < radioColor.length; i++) {
    if (radioColor[i].checked) {
      color = radioColor[i].value;
      radioColor[i].checked = false;
      break;
    }
  }

  console.log(color);
  return color;
}

function makeNewNote() {
  var color = getRadioButtonColor();
  var div = document.createElement("div");
  var p = document.createElement("p");
  var noteContent = document.createTextNode(input.value);
  p.appendChild(noteContent);
  div.appendChild(p);
  div.style.backgroundColor = color;
  div.classList.add("content-notes");
  containerNotes.appendChild(div);
  input.value = "";
  newNoteButton.disabled = true;
}


