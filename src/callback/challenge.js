//instaciar xmlHttpRequest and require
//xmlHttpRequest => trabaja con callbacks
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/'

//contruir peticion
function fetchData(url_Api, callback){
    let xhttp =  new XMLHttpRequest();

    xhttp.open('GET', url_Api, true) //true que se maneje de forma asincrona
    xhttp.onreadystatechange = function(event) { //si este cambio sucede
        
        if (xhttp.readyState === 4) {// hacer validacion si el estado en el que se encuentra es satisfactorio
            if (xhttp.status === 200){ //verificar si la peticion llego correctamente los datos
                callback(null, JSON.parse(xhttp.responseText)) // primer valor es el error y segundo el resultado exitoso siempre se debe parsear por que de lo contrario queda un archivo en texto que no se puede iterar o acceder
            } else {
                const error = new Error('Error' + url_Api)
                return callback(error, null) //al final null por que no desencadena ningun resultado
            }
        }
    }
    xhttp.send(); //envia solicitud de peticion
}

//donde se ejecutar la peticion a la API url
fetchData(API, function(error1, data1){   //primera peticion, data completa
    if(error1) return console.error(error1) 
    fetchData(API + data1.results[0].id, function(error2, data2){ // segunda peticion, un personaje, obtener de la api el result el primer personaje index 0 el id 
        if (error2) return console.error(error2);
        fetchData(data2.origin.url, function(error3, data3){ // tercer peticion origen personaje
            if(error3) return console.error(error3);
            console.log(data1.info.count); //response de cada peticion
            console.log(data2.name);
            console.log(data3.dimension);
        })
    })
})