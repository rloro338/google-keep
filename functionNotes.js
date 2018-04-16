
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

  newNoteButton.addEventListener("click", function (e) {
    makeNewNote(input.value)
    hideColors(e)
    discheckRadioButtons()
  });
  content.addEventListener("click", hideColors, discheckRadioButtons);
  containerNotes.addEventListener("click", discheckRadioButtons);
  input.addEventListener("click", showColors);
  input.addEventListener("input", checkInput);
  input.addEventListener('keypress', makeNewNoteWithIntro);
  searcher.addEventListener("input", function () {
    searchNotes(searcher.value)
  });

  searchButton.addEventListener("click", openSearcher);
  window.addEventListener("resize", closeSearcher);

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
    var div = document.createElement("div");
    var p = document.createElement("p");
    var noteContent = document.createTextNode(noteText);
    p.appendChild(noteContent);
    div.appendChild(p);
    div.style.backgroundColor = color;
    div.classList.add("content-notes");
    containerNotes.appendChild(div);
    newNoteButton.disabled = true;
    input.value = "";
  }

  function makeNewNoteWithIntro(e) {
    var key = e.keyCode;
    if (key == 13 && checkInput()) {
      makeNewNote(input.value);
    }
  }

  function searchNotes(textToSearch) {
    var i = 0;
    do {
      var notes = document.getElementsByClassName("content-notes");
      var lengthNotes = notes.length;
      var content = notes[i].firstChild.textContent;
      var frase = content.slice(content.indexOf(textToSearch[0], textToSearch.length));
      
      if (content.search(textToSearch) == -1) {
        notes[i].style.display = "none";
      }
      else {
        notes[i].style.display = "flex";
      }
      i++;
    } while (i < lengthNotes);

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








