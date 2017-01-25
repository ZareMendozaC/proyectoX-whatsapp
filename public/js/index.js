function Persona(_nombre,_nick,_edad,_sexo) {
  this.nombre = _nombre;
  this.nick= _nick;
  this.edad = _edad;
  this.sexo = _sexo;
}
var lista_personas[];

function isAlphabetic(cadena)
{
      if (cadena.match(/^[a-zA-Z]+$/))
      {

        return true;
      }
      else
      {
        return false;
      }
}

function logearse(){
	
	var nombre= document.getElementById("nombre").value;
	var nick= document.getElementById("nick").value;
	var edad= document.getElementById("edad").value;
	var hombre= document.getElementById("hombre").checked;
	var mujer= document.getElementById("mujer").checked;
	var valido=true;
	console.log(nombre);
	console.log(nick);
	console.log(edad);
	console.log(hombre);
	console.log(mujer);
	if(nombre==''||nick==''||edad=='')
	{
		alert("te falta llenar un campo");
		valido= false;
	}
	if(isAlphabetic(nombre)==false)
	{
		alert("Solo se valen letras para tu nombre");
		document.getElementById("nombre").value="";
		valido= false;
	}
	lista_personas.push(persona);
}