"use strict";

// Comply with Slack's CSP by injecting a real script.
const s = document.createElement('script');
s.src = chrome.runtime.getURL('inline.js');
s.onload = function() {
    this.remove();
};
document.documentElement.prepend(s);
