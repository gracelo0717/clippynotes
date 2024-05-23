

// add onClick eventListeners to both tabs
let tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
  tablinks[i].addEventListener("click", openTab);
}

// Hide both tabs
const tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
  tabcontent[i].style.display = "none";
}

// Clicking on the from tab so that it displays from the beginning
document.getElementById("form").click();

function openTab(e) {
  // Hide both tabs
  const tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
  
  // Making sure tabs don't have active class
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
	
  // Making sure clicked on tab is displaying with a class of active
  document.querySelector(`#${e.currentTarget.name}`).style.display = "block";
  e.currentTarget.className += " active";
}

// Catch data from submit and display it in the Saved Notes tab.
document.querySelector('.btn').addEventListener('submit', postNote);

function postNote(content) {

}