var express = require('express');
var http = require('http');
var fs = require('fs');

'use strict';

var os = require('os');
var ifaces = os.networkInterfaces();
var app  = express();

function getDateTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + ":" + month + ":" + day + "-" + hour + ":" + min + ":" + sec;

}

Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0;

  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }

    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
      console.log(ifname + ':' + alias, iface.address);
    } else {
      // this interface has only one ipv4 adress
      console.log(ifname, iface.address);
    }
    ++alias;
  });
});

var userCount = 0;

var server = http.createServer(function (req, res) {
    userCount++;
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('We have had ' + userCount + ' visits!\n');
    fs.appendFileSync("./counter.txt", "visited : " + userCount + " at " + getDateTime() + "\n");
    res.end();
});

fs.appendFileSync("./counter.txt","=================\n");
console.log("port : 3050");
server.listen(3050);

console.log('server running...')
