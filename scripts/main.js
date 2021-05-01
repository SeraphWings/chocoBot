import sendChat from './sendChat.js'

const chatSubmit = document.querySelector('.chatSubmit');
const chatText = document.querySelector('.chatText');
const responseText = document.querySelector('.responseText');


chatText.focus();
chatSubmit.addEventListener('click', sendChat);

//<script src="scripts/sendChat.js"> </script>
