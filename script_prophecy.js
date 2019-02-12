var prophecyArray = [
  "xерово",
  "грустненько",
  "не очень",
  "тяжко",
  "так себе",
  "пизда"
];
var myProp = function() {
  prophecySelect.addEventListener("change", function() {
    var n = prophecySelect.options.selectedIndex;
    var zodiac = prophecySelect.options[n].dataset.val;
    var prophecyArrayItem = Math.floor(Math.random() * prophecyArray.length);
    prophecyWindow.innerHTML = zodiac + " " + prophecyArray[prophecyArrayItem];
  });
};
myProp();
