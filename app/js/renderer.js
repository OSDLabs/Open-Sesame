"use strict";
// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const wifiName = require('wifi-name');
//Cool network tool
var network = require('network');
// Module to store app and user state
const storage = require('electron-json-storage');


function el(element) {
  return document.getElementById(element);
}



function setup() {
  var userId = el('userId').value;
  var password = el('password').value;
  storage.set('setup', {
    "userId": userId,
    "password": password
  }, function (error) {
    if (error) {
      throw error;
    } else {
      console.log("User settings successfully saved!");
    }
  });
}

el('Setup').onclick = setup;

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
