// code for content5 next,prev

var x=document.getElementsByClassName('c5-p');
var n=0;

function none() {
    for (var i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(' active', "");
    }
}
function block() {
    x[n].className = x[n].className.replace('c5-p', 'c5-p active');
}
function next() {
    n++;
    if(n > x.length-1){
        n=0;
    }
    none();
    block();
}
function prev() {
    n--;
    if(n < 0){
        n=x.length-1;
    }
    none();
    block();
}