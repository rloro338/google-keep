
function behaviourSearchAndNewNote() {
  var newNoteButton = document.getElementsByClassName("new-note-button")[0];
  var content = document.getElementsByClassName("content")[0];
  var containerNotes = document.getElementsByClassName("content-notes-container")[0];
  var input = document.getElementsByClassName("inputText")[0];
  var radioColor = document.getElementsByClassName("radio-color");
  var selectColor = document.getElementsByClassName("select-color-hidden")[0];
  var searcher = document.getElementsByClassName("searcher-header")[0];
  var searchButton = document.getElementsByClassName("search-button")[0];
  var title = document.getElementsByClassName("title")[0];
  var removeMarkNotesButton = document.getElementsByClassName('remove-marked-notes-button')[0];

  newNoteButton.addEventListener("click", (e) => {
    makeNewNote(input.value)
    hideColors(e)
    discheckRadioButtons()
  });
  content.addEventListener("click", hideColors, discheckRadioButtons);
  containerNotes.addEventListener("click", discheckRadioButtons);
  input.addEventListener("click", showColors);
  input.addEventListener("input", checkInput);
  input.addEventListener('keypress', makeNewNoteWithIntro);
  searcher.addEventListener("input", () => {
    searchNotes(searcher.value);
  });
  searchButton.addEventListener("click", openSearcher);
  window.addEventListener("resize", closeSearcher);
  removeMarkNotesButton.addEventListener("click", removeMarkedNotes);

  function checkInput() {
    var noSpacesRegExp = new RegExp('^[\\s]{0,}$');
    var testResult = noSpacesRegExp.test(input.value);
    newNoteButton.disabled = testResult;
    return !testResult;
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

    /*Color selection clicking radio button */

    for (i = 0; i < radioColor.length; i++) {
      if (radioColor[i].checked) {
        color = radioColor[i].value;
        radioColor[i].checked = false;
        break;
      }
    }
    return color;
  }



  function makeNewNote(noteText) {
    var color = getRadioButtonColor();
    var note = document.createElement("div");
    var p = document.createElement("p");
    var noteContent = document.createTextNode(noteText);
    note.innerHTML = "<div class='note-header'>" +
      "<a href ='#' class='delete-button delete-button-hidden'>" +
      "<i class='material-icons'>delete_forever</i>" +
      "</a>" +
      "<input type='checkbox' name='checkDelete'></input>" +
      "</div>";
    p.appendChild(noteContent);
    p.classList.add('p-inside-note')
    note.appendChild(p);
    note.style.backgroundColor = color;
    note.classList.add("content-notes");
    note.addEventListener("mouseover", showDeleteButtonInNote);
    note.addEventListener("mouseout", hideDeleteButtonInNote);
    var deleteButton = note.getElementsByClassName('delete-button')[0];
    deleteButton.addEventListener("click", deleteNote);
    containerNotes.appendChild(note);
    newNoteButton.disabled = true;
    input.value = "";
  }

  function showDeleteButtonInNote(e) {
    this.firstChild.firstChild.classList.toggle("delete-button-shown");
   }
  function hideDeleteButtonInNote(e) {
    this.firstChild.firstChild.classList.toggle("delete-button-shown");
   }

  function deleteNote(e,note) {
    this.note = e.target.parentNode.parentNode.parentNode;
    this.note.remove();
  }

  function removeMarkedNotes() {
    var notes = document.getElementsByClassName('content-notes');
    var arrayOfNotes = Array.from(notes);
    var markedNotes = arrayOfNotes.map((note) => {

      if(note.firstElementChild.lastElementChild.checked){
        note.remove();
      }
     
    });
    

  }

  function makeNewNoteWithIntro(e) {
    var key = e.keyCode;
    if (key == 13 && checkInput()) {
      makeNewNote(input.value);
    }
  }

  function searchNotes(textToSearch) {
    var notes = document.getElementsByClassName("content-notes");
    var arrayOfNotes = Array.from(notes);
    var regexp = new RegExp(textToSearch);
    arrayOfNotes.forEach((note) => {
      var textContent = note.firstChild.textContent;
      note.style.display = regexp.test(textContent) ? 'flex' : 'none';
    });
  }

  function openSearcher() {
    if (window.innerWidth < 650) {
      title.classList.toggle("title-hidden");
      searcher.classList.toggle('searcher-header-mobile');
      searcher.placeholder = "Buscar";
    }
  }

  function closeSearcher() {
    if (window.innerWidth > 650) {
      title.classList.remove("title-hidden");
      searcher.classList.remove('searcher-header-mobile');
      searcher.placeholder = "Busca lo que quieras";
    }
  }

}





