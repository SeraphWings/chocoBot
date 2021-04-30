export function sendChat() {
    responseText.textContent = responseText.textContent +  '\n' + chatText.value;
    chatText.value = '';


    chatText.focus();
}
