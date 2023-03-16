const ciudadesCapitales = {
    "España": "Madrid",
    "Francia": "París",
    "Reino Unido": "Londres",
    "Italia": "Roma",
    "Alemania": "Berlín"
  };
    
  function preguntarCapital(ciudad) {
    let respuestaCorrecta = ciudadesCapitales[ciudad];
    let respuestaUsuario = prompt(`¿Cuál es la capital de ${ciudad}?`);
    
   
    if (respuestaUsuario === respuestaCorrecta) {
      alert("¡Respuesta correcta!");
      return true;
    } else {
      alert(`Lo siento, la respuesta correcta es ${respuestaCorrecta}.`);
      return false;
    }
  }
  
  let ciudades = Object.keys(ciudadesCapitales);
  let numCiudades = ciudades.length;
  let numRespuestasCorrectas = 0;
  
  for (let i = 0; i < numCiudades; i++) {
    let ciudadActual = ciudades[i];
    
    let numIntentos = 3;
    switch (ciudadActual) {
      case "Madrid":
        numIntentos = 2;
        break;
      case "Londres":
        numIntentos = 1;
        break;
    }
       
    let numIntentosActuales = 0;
    let respuestaCorrecta = false;
    while (numIntentosActuales < numIntentos && !respuestaCorrecta) {
      respuestaCorrecta = preguntarCapital(ciudadActual);
      numIntentosActuales++;
    }
    
    if (respuestaCorrecta) {
      numRespuestasCorrectas++;
    }
  }
  
  alert(`Acertaste ${numRespuestasCorrectas} de ${numCiudades} preguntas.`);
  