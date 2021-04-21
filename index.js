let dropdownButton = document.querySelectorAll('.dropdown-button');
let dropdownHandler = document.querySelectorAll('.dropdown-handler');
let dropdownContent = document.querySelectorAll('.dropdown-content');
let arrowIcon = document.querySelectorAll('.arrow-icon');

for (let i = 0; i < dropdownButton.length; i++) {

  dropdownButton[i].addEventListener('click', function () {
    dropdownContent[i].classList.toggle('show');
    dropdownHandler[i].classList.toggle('toggledDropdown-handler');
    arrowIcon[i].classList.toggle('arrow-icon-toggled');


    openCloseAnimation(i);


    closingResentlyOpened(i);


  });
}


function openCloseAnimation(i){
 if (dropdownContent[i].style.maxHeight) {
    dropdownContent[i].style.maxHeight = null;
  } else {
    dropdownContent[i].style.maxHeight = dropdownContent[i].scrollHeight + 'px';
  };
  console.log(dropdownContent[i].style.maxHeight)
}

function closingResentlyOpened(i) {
  for (let j = 0; j < dropdownButton.length; j++) {
    if (j !== i){
      dropdownContent[j].classList.remove('show');
      dropdownContent[j].style.maxHeight = null;
      dropdownHandler[j].classList.remove('toggledDropdown-handler');
      arrowIcon[j].classList.remove('arrow-icon-toggled');
    }
  }
}
