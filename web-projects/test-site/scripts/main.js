const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};


let myButton = document.querySelector("button"); // get the button from html file
let myHeading = document.querySelector("h1");


function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) { // if invalid name, recall the function
      setUserName();
    } else { // if valid name, save it
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}
  

/* initialization step, if key: name does not exist, call setUserName() to create it */
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
  
  // Attach an event listener to the button
  // When the button is clicked, prompt the user to enter their name
  // Update the heading with the new name
  /**
   * Sets a new user name and updates the heading
   */
myButton.onclick = () => {
    setUserName();
};
  