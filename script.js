const popupBackground = document.querySelector('.pop-up-background');
const popupContainer = document.querySelector('.popup-container');
const popupContainer2 = document.querySelector('.popup-container2');
const dropdownContent = document.querySelector('.dropdown-content');
const dropdownContent2 = document.querySelector('.dropdown-content2');
const dropdownContent3 = document.querySelector('.dropdown-content3');
const dropdownContent4 = document.querySelector('.dropdown-content4');
const browseButton = document.querySelector('#browse-button');
const writerButton = document.querySelector('#writer-button');
const communityButton = document.querySelector('#community-button');
const languageButton = document.querySelector('.language-button');
const loginButton = document.querySelector('.login-button');
const exitButton = document.querySelector('.exit-button');
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const buttons = document.querySelectorAll('.button1, .button2');
const exitButton2 = document.querySelector('#exitButton2');

browseButton.addEventListener('click', ()=> {
  if(dropdownContent.style.display === 'none') {
    dropdownContent.style.display = 'block';
  } else if (dropdownContent.style.display === 'block') {
    dropdownContent.style.display = 'none';
  }
});
writerButton.addEventListener('click', ()=> {
  if(dropdownContent2.style.display === 'none') {
    dropdownContent2.style.display = 'block';
  } else if (dropdownContent2.style.display === 'block') {
    dropdownContent2.style.display = 'none';
  }
});
communityButton.addEventListener('click', ()=> {
  if(dropdownContent3.style.display === 'none') {
    dropdownContent3.style.display = 'block';
  } else if (dropdownContent3.style.display === 'block') {
    dropdownContent3.style.display = 'none';
  }
});
languageButton.addEventListener('click', () => {
  if(dropdownContent4.style.display === 'none') {
    dropdownContent4.style.display = 'block';
  } else if (dropdownContent4.style.display === 'block') {
    dropdownContent4.style.display = 'none';
  }
});

//May Learnings dito, wag burahin.
//--Navigation
document.addEventListener('click', (event) => {
  //--another way --
  if (!(event.target === browseButton || dropdownContent.contains(event.target)) && !(event.target === writerButton || dropdownContent2.contains(event.target)) && !(event.target === communityButton || dropdownContent3.contains(event.target)) && !(event.target === languageButton || dropdownContent4.contains(event.target))) {
    dropdownContent.style.display = 'none';
    dropdownContent2.style.display = 'none';
    dropdownContent3.style.display = 'none';   
    dropdownContent4.style.display = 'none';   
  }
  // if (event.target !== browseButton && !dropdownContent.contains(event.target)) {
  //   dropdownContent.style.display = 'none';
  // } //explanation: pag nag click(event.target) ka sa labas ng browse button (!==)   at sa labas ng dropdownContent (!) mag didisplay none ang dropdownContent
});

document.addEventListener('click', (event) => {
  if(event.target === browseButton) {
    dropdownContent2.style.display = 'none';
    dropdownContent3.style.display = 'none';
    dropdownContent4.style.display = 'none';

  }
  if(event.target === writerButton){
    dropdownContent.style.display = 'none';
    dropdownContent3.style.display = 'none';
    dropdownContent4.style.display = 'none';

  }
  if(event.target === communityButton){
    dropdownContent.style.display = 'none';
    dropdownContent2.style.display = 'none';
    dropdownContent4.style.display = 'none';

  }
  if(event.target === languageButton) {
    dropdownContent.style.display = 'none';
    dropdownContent2.style.display = 'none';
    dropdownContent3.style.display = 'none';
  }
});

//--------Start & Writing Buttons------------
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    popupBackground.style.display = 'block';
    popupContainer.style.display = 'block';
  });
});

exitButton.addEventListener('click', () => {
    popupBackground.style.display = 'none';
    popupContainer.style.display = 'none';
});

// Hide the popup when clicked outside of the popup content
document.addEventListener('click', (event) => {
  if (event.target === popupBackground) {
    popupContainer.style.display = 'none';
    popupBackground.style.display = 'none';
    popupContainer2.style.display = 'none';
  } 
  
});

loginButton.addEventListener('click', () => {
  popupContainer2.style.display = 'block';
  popupBackground.style.display = 'block';
});
document.addEventListener('click', (event) => {
  if(event.target === exitButton2) {
    popupContainer2.style.display = 'none';
    popupBackground.style.display = 'none';
  }
});

//Get Discovered Buttons
const writingContest = document.querySelector('#writing-contest');
const theWattys = document.querySelector('#the-wattys');
const wattpadPicks = document.querySelector('#wattpad-picks');

writingContest.addEventListener('click', () => {
  window.open('https://www.wattpad.com/go/writing-contests/', '_blank');
});
theWattys.addEventListener('click', () => {
  window.open('https://www.wattpad.com/wattys/', '_blank');
});
wattpadPicks.addEventListener('click', () => {
  window.open('https://www.wattpad.com/featured/551324301', '_blank');
});


































































































































