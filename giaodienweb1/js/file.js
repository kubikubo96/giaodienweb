
var x=document.getElementsByClassName('c5-main-trong');
var y=document.getElementsByClassName('dot');
var n=0;

function none() {
    for (var i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(' f', "");
    }
    for (var i = 0; i < y.length; i++) {
        y[i].className = y[i].className.replace(' active', "");
    }
}
function block() {
    x[n].className = x[n].className.replace('c5-main-trong', 'c5-main-trong f');
    y[n].className = y[n].className.replace('dot','dot active');
}
function clicknota(){
    n=0;
    none();
    block();
}
function clicknotb(){
    n=1;
    none();
    block();
}
function clicknotc(){
    n=2;
    none();
    block();
}