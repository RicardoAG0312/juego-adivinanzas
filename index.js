let basePreguntas = [ //Arreglo de la base de las preguntas con objetos
    {
        pregunta: "Siéntate en ella y te cansaras , muévete en ella y tu sudaras , úsala diario y tu bajaras, que es que es?",
        respuesta: "Bicicleta",
        pista: "",
    },
    {
        pregunta: "¿Qué tienen las mujeres en medio de las piernas?",
        respuesta: "Rodillas",
        pista: "",
    },
        {
        pregunta: "Que es aquello que vuela, llega, pica, chupa y se va?",
        respuesta: "Picaflor",
        pista: "",
    },
    {
        pregunta: "Empieza por C y termina por O, está arrugado y todos lo tenemos atrás, ¿qué es?",
        respuesta: "Codo",
        pista: "",
    },
        {
        pregunta: "Madonna no lo tiene, el Papa lo tiene pero no lo usa, Trump lo tiene corto y Schwartzenegger lo tiene largo y duro, ¿qué es?",
        respuesta: "Apellido",
        pista: "",
    },
    {
        pregunta: "Entra duro y seco y sale blandito y mojado ¿Qué es?",
        respuesta: "Chicle",
        pista: "",
    },
        {
        pregunta: "¿Cuál es la parte más sensible del cuerpo de una mujer? Tiene 6 letras y acaba en 'ina'",
        respuesta: "Retina",
        pista: "",
    },
    {
        pregunta: "Que cosa le cuelga al hombre por delante?",
        respuesta: "Corbata",
        pista: "",
    },
        {
        pregunta: "Varias veces al día es manía, más de cuatro por semana, cosa sana, una vez por mes es dejadez, una vez al año se te oxida el caño, ¿qué es?",
        respuesta: "Bañarse",
        pista: "",
    },
    {
        pregunta: "Los hombres lo hacen de pie, las mujeres lo pueden hacer sentadas, los perros a tres patas. ¿Qué es?",
        respuesta: "Dar la mano",
        pista: "",
    },
    {
        pregunta: "Mide 15cms de largo 5cms de ancho, tiene una cabeza y vuelve locas alas mujeres que es?",
        respuesta: "Un billete de $50.00 dolares",
        pista: "",
    },
    {
        pregunta: "Pelos por arriba y pelos por abajo, en el medio una rajita húmeda, ¿qué es?",
        respuesta: "El ojo",
        pista: "",
    }
];

let contadorResultado = 0; //El acumulador los puntos de los resultados
let indexPregunta = 0; //El indice de la preguntar a iniciar 
const cargarPregunta = () => { //La funcion para cargar la pregunta
    objetoPregunta = basePreguntas[indexPregunta]; //Obtiene las preguntas en base al indice y las almacena en una variable
    document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta;
    document.getElementById("respuesta").value = "";
}
cargarPregunta(); //Llama a la funcion para ejecutarse 

const opcionPregunta = async () => {
    let respuesta = document.getElementById("respuesta").value;
    // let preguntaValida = 
    // let preguntaValida = objetoOpciones[index] == objetoPregunta.respuesta;
    if (respuesta.toLowerCase() === objetoPregunta.respuesta.toLowerCase()) {
        await Swal.fire({
            title: "Respuesta Correcta",
            text: "La respuesta ha sido correcta",
            icon: "success",
        });
        contadorResultado++;
    } else {
        await Swal.fire({
            title: "Respuesta Incorrecta",
            text: "La respuesta correcta es: " + objetoPregunta.respuesta,
            icon: "error",
        });
    }
    indexPregunta++;
    if (indexPregunta >= basePreguntas.length) {
        await Swal.fire({
            title: "Juego Terminado",
            text: "Tu puntaje fue de: " + contadorResultado + " / " + basePreguntas.length,
        });
        indexPregunta = 0;
        contadorResultado = 0;
    }
    cargarPregunta();
}
const ayuda = () => {
    Swal.fire({
        text: "Pista: " + objetoPregunta.pista,
    });
}
