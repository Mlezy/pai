function display() {
    var lolo = document.getElementById("liczba1").value;
    var hoho = document.getElementById("liczba2").value;
        for(var x = 1; x <= lolo; x++){
            var field = document.getElementsByName('radio');
            var value1;
            for(var i = 0; i < field.length; i++){
            if(field[i].checked){
                    value1 = field[i].value;
        }
    }
                alert(hoho)
}
}