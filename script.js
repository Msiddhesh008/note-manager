var noteList = [];

var ul = document.getElementById("list");

var addInput = document.getElementById("add-input");

var addNote = document.getElementById("add-btn");

var date = new Date();

addNote.addEventListener("click", function (e) {
  e.preventDefault(); // Preventing page from refreshing by clicking on Submit

  noteList.push(addInput.value); // Appends or Add new elements to the end of an array.

  var li = document.createElement("li"); //  Created an instance of the element for the specified tag.
  ul.appendChild(li); // Inherites li tag as child element of ul.

  var pText = document.createElement("p"); //  Created an instance of the element for the specified tag.
  li.appendChild(pText); // Inherites li tag as child element of ul.

  for (let i = 0; i < noteList.length; i++) {
    // Refreshing the noteList Basically.
    pText.textContent = noteList[i];
  }
  //==================[ Cloning HTML li through JavaScript ]=====================

  var pButtons = document.createElement("p");
  li.appendChild(pButtons);

  var editNote = document.createElement("span");
  editNote.textContent = "edit_note";
  pButtons.appendChild(editNote);
  editNote.className = "material-symbols-rounded edit-notes";

  var deleteNote = document.createElement("span");
  deleteNote.textContent = "close";
  pButtons.appendChild(deleteNote);
  deleteNote.className = "material-symbols-rounded close";

  var inputField = document.createElement("input");
  li.appendChild(inputField);

  deleteNote.addEventListener("click", function (e) {
    e.preventDefault();
    noteList.pop();
    console.log("clicked");
    var del_li = this.parentNode.parentNode;
    ul.removeChild(del_li);
  });
  addInput.value = "";

  //==================[ Cloning HTML li through JavaScript End ]=====================

  editNote.onclick = function () {
    inputField.style.display = "block";
    inputField.focus();
  };

  inputField.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      console.log(li.firstElementChild);
      li.firstElementChild.textContent = inputField.value;
      inputField.value = "";
      inputField.style.display = "none";
    }
  });
});

function hideNote() {
  var checked = document.getElementById("hide");
  var hideLabel = document.querySelector("#hide-list label");

  if (checked.checked == false) {
    ul.style.display = "none";
    hideLabel.innerHTML = "Show note";
  } else {
    ul.style.display = "block";
    hideLabel.innerHTML = "Hide note";
  }
}

// ===[ Theme Panel ]===

var themePanel = document.querySelector("body .logo");

themePanel.onclick = function () {
  console.log(document.body.style.setProperty("--primary", "#E32636"));
  document.body.style.setProperty("--font-color", "#65000B");
  document.body.style.setProperty("--font-family", '"Pacifico"');
};
