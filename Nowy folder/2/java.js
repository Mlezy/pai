 var wysokosc = parseInt(prompt("podaj wysokość prostokąta"))
 var szerokosc = parseInt(prompt("podaj szerokość prostokąta"))

document.write("wysokość="+wysokosc+"<br/>");
document.write("szerokość="+szerokosc+"<br/>");
for (a = 1; a <= wysokosc; ++a){
  for (count = 1; count <= szerokosc; ++count){
        document.write("*"); 
    }
    document.write("<br/>"); 
  }