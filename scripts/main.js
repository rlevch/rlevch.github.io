var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/logo-nav@2x.png') {
      myImage.setAttribute ('src','images/logo-SAP.png');
    } else {
      myImage.setAttribute ('src','images/logo-nav@2x.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Angular is cool, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Angular is cool, ' + storedName;
  }
  
  myButton.onclick = function() {
    setUserName();
  }