var showPopUp = function() {
  notesBtn.addEventListener("click", function() {
    notesPopUp.classList.add('notes__popup__show');
  });
};
showPopUp();

var closePopUp = function() {
  notesPopUpClose.addEventListener("click", function() {
    notesPopUp.classList.remove('notes__popup__show');
    var textAreaVal = notesTxt.value;
    localStorage.setItem("note", textAreaVal);
    var fromStorage = localStorage.getItem("note");
    notesWindow.innerHTML = fromStorage;
    notesTxt.value = "";
  });
};
closePopUp();

var renewWindow = function() {
  window.addEventListener("load", function() {
    var fromStorage = localStorage.getItem("note");
    notesWindow.innerHTML = fromStorage;
  });
};
renewWindow();
