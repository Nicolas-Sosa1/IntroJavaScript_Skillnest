//Desafío de Código: Predicción de funciones


//Predicción 1: ¿Qué indicará console.log cuando se llame a esta función?
function miEdad() {

   console.log("Tengo: " + 25 + " años"); 

}

//El console.log indicara: 
// Tengo: 25 años



//Predicción 2: si necesitáramos enviar una edad hacia la función, le diríamos a la 
// función «hey, aquí tienes una variable llamada edad». Lo hacemos agregando el nombre 
// de la variable entre paréntesis. 

//Entonces, si enviamos como variable edad el número 25 (var edad = 25), 
// y se llama a esta función, ¿qué indicará console.log?

function miEdad(edad) {

   console.log("Tengo: " + edad + " años");

}

//El console.log indicara: 
// Tengo: 25 años
//Porque la función miEdad recibe un parámetro llamado edad. Cuando llamamos a 
// la función con miEdad(25) el valor 25 se envía como argumento y se asigna al 
// parámetro edad.



//Predicción 3: Vamos una vez más. Si var primerNumero = 50 y var segundoNumero = 27, 
//¿qué indicará console.log?
function restar(primerNumero, segundoNumero) {

   console.log("¡Restemos los números!");

   console.log("primerNumero es:" + primerNumero); //¡Restemos los números!

   console.log("segundoNumero es:" + segundoNumero); //primerNumero es:50

   var resultado = primerNumero - segundoNumero; //segundoNumero es:27

   console.log(resultado); //23

}

//El primer console.log mostrara: ¡Restemos los números!
// El segundo console.log mostrara: primerNumero es:50
// El tercer console.log mostrara: segundoNumero es:27
// El cuarto console.log mostrara: 23