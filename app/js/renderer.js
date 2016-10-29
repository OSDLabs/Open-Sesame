// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var request = require('request');
// Module for cross-platform notifications
const notifier = require('node-notifier');


request.post({
  url: 'https://10.1.0.10:8090/login.xml',
  strictSSL: false,
  form: {
    username: 'f2015xxx',
    password: '****',
    mode: '191'
  }
}, function (err, response, body) {
  // Some network requests might take time. So, keep the user busy occupied with a notification until this callback is called.
  console.log(err);
  console.log(response);
  console.log(body);
  if (!err && response.statusCode == 200) {
    notifier.notify('You have succesfully logged in.');
  }
  //TODO: All edge cases to be covered here.
});
