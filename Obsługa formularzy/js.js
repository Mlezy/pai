var f = document.getElementsByName('radio');
var v;
for(var i = 0; i < f.length; i++){
    if(f[i].checked){
        v = f[i].value;
    }
}
function display() {;
    document.getElementById("test1").textContent = V;
}