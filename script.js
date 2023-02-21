function loguear()
{
var user= document.getElementById("usuario").value;
var pass= document.getElementById("pass").value;
if(user=="pablo" && pass=="1234"){
    alert("Usuario y contraseña validos");
    window.location="P.html";
    
} else {
    alert("Intenta de Nuevo");
}
} 


