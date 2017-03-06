var clara = document.getElementById('add student');

clara.onclick = function() {
  var auxilio = document.getElementById('auxilio').value ;
  var apellido = document.getElementById('apellido').value ;
  var dni = document.getElementById('dnis').value ;
  var adress = document.getElementById('adress').value ;
  var records = document.getElementById('records') ;
//alert ("basio "  + auxilio +"calra");
if (auxilio !="" && apellido != "" && dni!=""&&adress!="") {
   if ( dni.length == 8){
  var x= "  <ul> <li> Nombre : " + auxilio.toUpperCase() +"</li>" +
                   " <li> Apellido: " + apellido.toUpperCase() + "</li>" +
                    "<li> DNI : " + dni +"</li> " +
                   "<li>Dirección: " + adress.toUpperCase() +"</li> </ul>" ;}
    else { return alert("Ingrese DNI correcto de 8 digitos");}
} else {
     return alert("Ingrese datos");
};
records.innerHTML = x;
};
