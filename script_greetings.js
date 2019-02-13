var greetingsArray = [
  "привет чепушила",
  "ну че чмо",
  "ядрена вошь кого я вижу",
  "хай пидр",
  "дратути",
  "кхэммм"
];
var greetingsGreet = function() {
  var greet = Math.floor(Math.random() * greetingsArray.length);
  greetingsWindow.innerHTML = greetingsArray[greet];
};
greetingsGreet();
