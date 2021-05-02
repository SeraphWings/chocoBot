const chatText = document.querySelector('.chatText');
const responseText = document.querySelector('.responseText');
const http = require('http');

const options = {
  hostname: 'localhost',
  port: 8080,
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
});

const postData = querystring.stringify({
  'msg': 'Hello World!'
});

export function sendToServer(){

    if (chatText.value != ''){
        if(responseText.textContent === ''){
            responseText.textContent = chatText.value;

        }
        else{
            responseText.textContent = responseText.textContent +  '\n' + chatText.value;
        }
        console.log(chatText.value);
        chatText.value = '';
        chatText.focus();

        req.write(postData);
        req.end();
    }
}

export function sendChat() {
    if (chatText.value != ''){
        if(responseText.textContent === ''){
            responseText.textContent = chatText.value;

        }
        else{
            responseText.textContent = responseText.textContent +  '\n' + chatText.value;
        }
        console.log(chatText.value);
        chatText.value = '';
        chatText.focus();
    }

}
