var addNewToDo = function() {
    list2Submit.addEventListener("click", function() {
      var toDoVal = list2Input.value;
      list2WindowList.createElement('li');
      list2WindowList.getElementsByTagName('li')[0].id = "list2WindowLi";
      list2WindowLi.innerHTML = toDoVal;
  });
};
addNewToDo();
