let cuentas =[
  {nombre: "Mali",saldo: 1500000,password: 'caribu'},
  {nombre: "Gera",saldo: 1500000,password: 'pique'},
  {nombre: "Maui",saldo: 600000,password: 'mamta'}
];

//funcion para validar datos e ingresar a la pagina de inicio
function login() {
nombre = document.getElementById("nombre").value;
password = document.getElementById("password").value;

  if (nombre == "Mali" && password == 'caribu') {      
      window.location.replace("Cajero_Mali.html"); 
      
} else if (nombre == "Gera" && password == 'pique') {
  window.location.replace("index.html"); 

} else if (nombre == "Maui" && password == 'mamta') {
  window.location.replace("Cajero_Maui.html");
}else {
   alert("Usuario o contraseña incorrectos, favor de Verificar");
}
}

//Funciones para retirar y depositar cantidades con la condicion de que el saldo actual desbe 

function Retirar() {
  var CantidadT=parseInt(document.getElementById('Cant').value);
  var Cantidad1=parseInt(document.getElementById('C1').value);
  
  if (Cantidad1-CantidadT >= 10000){
  document.getElementById('C1').value=(Cantidad1-CantidadT);
  }else{
      alert("Saldo invalido, favor de ingresar otra cantidad")
  }

  
}
function Depositar() {
  var CantidadT=parseInt(document.getElementById('Cant').value);
  var Cantidad1=parseInt(document.getElementById('C1').value);
  
  if (Cantidad1+CantidadT <= 3000000) {
      document.getElementById('C1').value=(Cantidad1+CantidadT);
  }else{ 
       alert("Saldo invalido, favor de ingresar otra cantidad");

      }  


}

