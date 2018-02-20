var wrapperDiv = document.getElementById('mainWrapper');
var contentDiv = document.getElementsByClassName('contentDiv');
const addButton = document.getElementById('add');
const removeButton = document.getElementById('remove');


// function createNewDiv(){
//   let newDiv = document.createElement('div');
//   newDiv.className = 'contentDiv';
// }


function newSquare (){
  var newDiv = document.createElement('div');
  newDiv.className = 'contentDiv';
  wrapperDiv.appendChild(newDiv);
  for (var i = 0; i < contentDiv.length; i += 1) {
    contentDiv[i].innerHTML = "<p>" + (i+1) + "</p>"
  };
}

for (var i = 0; i < contentDiv.length; i += 1) {
  contentDiv[i].innerHTML = "<p>" + (i+1) + "</p>"
};

addButton.addEventListener('click', newSquare);

removeButton.addEventListener('click', ()=> {
  lastDiv = wrapperDiv.lastChild;
  wrapperDiv.removeChild(lastDiv);
});
