// Page Scrolling
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos<=35) {
        document.getElementById("scrollNow").style.visibility = "hidden";
        document.getElementById("scrollNow").style.opacity = "0" ;
    } else if (prevScrollpos > currentScrollPos) {
        document.getElementById("scrollNow").style.visibility = "visible";
        document.getElementById("scrollNow").style.opacity = "1" ;
    } else {
        document.getElementById("scrollNow").style.visibility = "visible";
        document.getElementById("scrollNow").style.opacity = "1" ;
    }
    prevScrollpos = currentScrollPos;
};