//Get an object reference to the first image on the page,
//then check to see if that image is the one I want to switch.
//If it is, switch it, using the getAttribute/setAttribute combination.
var myImage = document.querySelector('img');
myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/zombie-hand.jpg')
    {
        myImage.setAttribute('src', 'images/zombie-love.jpg');
    }
    else if (mySrc === 'images/zombie-love.jpg')
    {
        myImage.setAttribute('src', 'images/zombie-hand.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Zombies ate ' + myName + "!!";
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Zombies ate ' + storedName + "!!";
}

myButton.onclick = function () {
    setUserName();
}