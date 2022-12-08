var ul = document.getElementById("list");
var addInput = document.getElementById("add-input");
var addNote = document.getElementById("add-btn");
var deleteNote = document.getElementsByClassName("close");
var hide = document.querySelector("#hide-list label");
var editNote = document.getElementsByClassName("edit-notes");

// var data = document.getElementById("data").innerHTML;
var typed = new Typed(".auto-type", {
  //write anything Here
  strings: ["Welcome To Note Manager.."],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

addNote.addEventListener("click", function (e) {
  e.preventDefault();

  var li = document.createElement("li");
  ul.appendChild(li);

  var pText = document.createElement("p");
  li.appendChild(pText);
  pText.textContent = addInput.value;

  //===[ Cloning HTML li through JavaScript ]===

  var pButtons = document.createElement("p");
  li.appendChild(pButtons);

  var editNote = document.createElement("span");
  pButtons.appendChild(editNote);
  var editImg = document.createElement("img");
  editImg.setAttribute("src", "images/editNote.png");
  editNote.appendChild(editImg);

  var deleteNote = document.createElement("span");
  pButtons.appendChild(deleteNote);
  var delImg = document.createElement("img");
  delImg.className = "closeImg";
  delImg.setAttribute("src", "images/closeNote.png");
  deleteNote.appendChild(delImg);

  var inputField = document.createElement("input");
  li.appendChild(inputField);

  var pin = document.createElement("img");
  pin.setAttribute("src", "images/pin.png");
  pin.className = "pin";
  li.appendChild(pin);

  // ===[ Delelte ]===
  deleteNote.addEventListener("click", function () {
    this.parentNode.parentNode.parentNode.removeChild(
      this.parentNode.parentNode
    );
  });

  // ===[ Edit ]===
  editNote.onclick = function () {
    this.parentNode.style.display = "none";
    this.parentNode.parentNode.children[2].style.display = "block";
    this.parentNode.parentNode.children[2].value =
      this.parentElement.parentElement.children[0].innerHTML;
    this.parentNode.parentNode.children[2].focus();

    // ===[ Edit Update ]===
    this.parentNode.parentNode.children[2].addEventListener(
      "keypress",
      function (e) {
        if (e.key === "Enter") {
          this.parentNode.children[0].innerHTML =
            this.parentNode.children[2].value;
          this.parentNode.children[1].style.display = "block";
          this.parentNode.children[2].style.display = "none";
        }
      }
    );
  };
  addInput.value = "";
});

// ===[ Delelte ]===
for (var i = 0; i < deleteNote.length; i++) {
  deleteNote[i].addEventListener("click", function () {
    this.parentNode.parentNode.parentNode.removeChild(
      this.parentNode.parentNode
    );
  });
}

// ===[ Edit ]===
for (var i = 0; i < editNote.length; i++) {
  editNote[i].onclick = function () {
    this.parentNode.style.display = "none";
    this.parentNode.parentNode.children[2].style.display = "block";
    this.parentNode.parentNode.children[2].value =
      this.parentElement.parentElement.children[0].innerHTML;
    this.parentNode.parentNode.children[2].focus();

    // ===[ Edit Update ]===
    this.parentNode.parentNode.children[2].addEventListener(
      "keypress",
      function (e) {
        if (e.key === "Enter") {
          this.parentNode.children[0].innerHTML =
            this.parentNode.children[2].value;
          this.parentNode.children[1].style.display = "block";
          this.parentNode.children[2].style.display = "none";
        }
      }
    );
  };
}

// ===[ Hide ]===
hide.addEventListener("click", function () {
  if (this.parentNode.children[1].checked == false) {
    this.parentNode.parentNode.children[1].children[1].style.display = "none";
    this.parentNode.children[0].children[0].setAttribute(
      "src",
      "images/down.png"
    );
  } else {
    this.parentNode.parentNode.children[1].children[1].style.display = "block";
    this.parentNode.children[0].children[0].setAttribute(
      "src",
      "images/up.png"
    );
  }
});

var themePanel = document.getElementById("panel");

themePanel.addEventListener("click", function (e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    for (
      var i = 0;
      i < document.getElementsByClassName("closeImg").length;
      i++
    ) {
      document
        .getElementsByClassName("closeImg")
        [i].setAttribute("src", "images/purplewomen.png");
    }
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    for (
      var i = 0;
      i < document.getElementsByClassName("closeImg").length;
      i++
    ) {
      document
        .getElementsByClassName("closeImg")
        [i].setAttribute("src", "images/closeNote.png");
    }
  }
});
