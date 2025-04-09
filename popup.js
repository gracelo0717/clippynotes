// add onClick eventListeners to both tabs
let tablinks = document.getElementsByClassName('tablinks');
for (i = 0; i < tablinks.length; i++) {
  tablinks[i].addEventListener('click', openTab);
}

// Hide both tabs
const tabcontent = document.getElementsByClassName('tabcontent');
for (i = 0; i < tabcontent.length; i++) {
  tabcontent[i].style.display = 'none';
}

// Clicking on the form tab so that it displays from the beginning
document.getElementById('take_a_note').click();

function openTab(e) {
  // Hide both tabs
  const tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  // Making sure tabs don't have active class
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }

  // Making sure clicked on tab is displaying and has a class of active
  document.querySelector(`#${e.currentTarget.name}`).style.display = 'block';
  e.currentTarget.className += ' active';
}

// Catch data from submit and display it in the Saved Notes tab.
document.querySelector('.btn').addEventListener('click', postNote);

class Note {
  constructor(tabUrl) {
    this.node = document.createElement('div');
    this.date = new Date().toLocaleDateString();
    this.url = tabUrl;
    this.note = document.querySelector('textarea').value;

    const noteDate = document.createElement('p');
    const noteUrl = document.createElement('p');
    const note = document.createElement('p');
    const separator = document.createElement('hr');

    noteDate.innerText = `${this.date}`;
    noteUrl.innerText = `URL: ${this.url}`;
    note.innerText = `${this.note}`;

    this.node.appendChild(noteDate);
    this.node.appendChild(noteUrl);
    this.node.appendChild(note);
    this.node.appendChild(separator);
  }
}

function postNote(content) {
  content.preventDefault();
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTab = tabs[0];
    const note = new Note(currentTab.url);
    document.getElementById('savedNotes').appendChild(note.node);
    document.querySelector('textarea').value = null;
  });
}

document.querySelector('.form').addEventListener('submit', postNote);
