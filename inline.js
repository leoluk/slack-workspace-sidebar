"use strict";

console.log("Hi, we probably too late");

const navigator = window.navigator;
const modifiedNavigator = Navigator.prototype;

Object.defineProperties(modifiedNavigator, {
    userAgent: {
        value: navigator.userAgent + ' CrOS',
        configurable: false,
        enumerable: true,
        writable: false
    },
});
