// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var donationAddress = "1GqXJNZZvdHPGqAwj4J99YASwUZtrLacwn";
var generateQRHTML0 = '\
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"> \
\
<html>\
<head>\
  <script src="qrcode.js"></script>\
  <script src="background.js">\
</script>\
<script>\
</script>\
<style>\
      .codebox {\
    border:1px solid black;\
    background-color:lightgray;\
}\
.codebox\
      </style>\
</head>\
<body>';
 var selectedDiv0 = '<span style="display:inline-block"><div id="selected" class="codebox"><code>';
 var selectedDiv1 = '</code></div></span>';
 var generateQRHTML1 = '\
 <br><br>\
 <div id="qr-ify_qrcode_image" class="qrcode"></div>\
 <br>\
 <button type="button" onclick="javascript:window.close()">Close</button>\
 <br><br>\
 <a href="donate.html" style="font-family: Courier">Like QR-ify?</a>\
</body>\
</html>';

// GenerateQR code
function generateQR(info, tab) {
    var newWindow = window.open();
    var headerHTML="";
    newWindow.document.write(generateQRHTML0+headerHTML+selectedDiv0+info.selectionText+selectedDiv1+generateQRHTML1);
    newWindow.document.close();
}

// Donate button
function donateQR(info, tab) {
    var newWindow = window.open();
    var headerHTML="<h3>Your support is greatly appreciated.  Thanks!</h3>";
    newWindow.document.write(generateQRHTML0+headerHTML+selectedDiv0+"bitcoin:"+donationAddress+selectedDiv1+generateQRHTML1);
    newWindow.document.close();
}

// Add QR-ify context menu options, in this order:
var id = chrome.contextMenus.create({"title": "Generate QR code from selection", "contexts":["selection"],"onclick": generateQR});

