import {sendChat , sendToServer} from './sendChat.js';
const chatSubmit = document.querySelector('.chatSubmit');
const chatClientSubmit = document.querySelector('.chatClientSubmit');
const chatText = document.querySelector('.chatText');
const responseText = document.querySelector('.responseText');

chatText.focus();
chatSubmit.addEventListener('click', sendChat);
chatClientSubmit.addEventListener('click', sendToServer);
