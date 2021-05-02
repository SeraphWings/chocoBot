const chatText = document.querySelector('.chatText');
const responseText = document.querySelector('.responseText');

export default function sendChat() {
    if (chatText.value != ''){
        if(responseText.textContent === ''){
            responseText.textContent = chatText.value;
        }
        else{
            responseText.textContent = responseText.textContent +  '\n' + chatText.value;
        }

        chatText.value = '';
        chatText.focus();
    }

}
