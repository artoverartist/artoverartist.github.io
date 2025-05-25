function generateQRCode(link, containerId) {
  new QRCode(document.getElementById(containerId), link);
}
