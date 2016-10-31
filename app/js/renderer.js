"use strict";
// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var request = require('request');
// Module for cross-platform notifications
const notifier = require('node-notifier');
//Easily query SSID
const wifiName = require('wifi-name');
//Cool network tool
var network = require('network');

function el(element) {
  return document.getElementById(element);
}

function login() {
  var userId = el('userId').value;
  var password = el('password').value;
  request.post({
    url: 'https://10.1.0.10:8090/login.xml',
    strictSSL: false,
    form: {
      username: userId,
      password: password,
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

}

el('Login').onclick = login;

network.get_active_interface(function (err, obj) {

  if (obj === undefined) {
    console.log("Cannot find any active connections. Keep polling.");
  } else if (obj.type == "Wireless") {
    console.log("Check for local wifis");
    wifiName().then(name => {
      console.log(name);
    });
  } else if (obj.type == "Wired") {
    // No one uses any other wired connection in BITS right?
    console.log("COnnect through ethernet");
  } else {
    console.log(obj);
  }


});
