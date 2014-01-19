// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
document.addEventListener('DOMContentLoaded', function () {
  	new QRCode(document.getElementById("qr-ify_qrcode_image"), { text : document.getElementById("selected").textContent, width : 480 , height : 480 } );
	});
