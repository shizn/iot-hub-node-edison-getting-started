/*
* IoT Hub Intel Edison NodeJS - Microsoft Sample Code - Copyright (c) 2016 - Licensed MIT
*/
'use strict';

var m = require('mraa');

// GPIO pin of the LED
var CONFIG_PIN = 13;
// Blink interval in ms
var INTERVAL = 2000;
// Total blink times
var MAX_BLINK_TIMES = 20;

var myLed = new m.Gpio(CONFIG_PIN);
//set the gpio direction to output
myLed.dir(m.DIR_OUT);

var blinkTimes = 0;
/**
 * Blink LED and log information to console.
 */
function blinkLED() {
  // Terminate process after blinking LED for max allowed times
  if (blinkTimes >= MAX_BLINK_TIMES) {
    process.exit(0);
  }

  blinkTimes++;
  console.log("[Device] #" + blinkTimes + " Blink LED \n");

  // Light up LED for 100 ms
  myLed.write(1);
  setTimeout(function () {
    myLed.write(0);
  }, 100);
}

// Blink LED every other INTERVAL time
setInterval(blinkLED, INTERVAL);
