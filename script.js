$(document).ready(function(){
    var myIframe = document.getElementById('news');
    myIframe.onload = function () {
    myIframe.contentWindow.scrollTo(0, 1000);
    }
  });