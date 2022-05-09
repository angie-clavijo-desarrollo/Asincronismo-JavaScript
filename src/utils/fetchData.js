//ES6+
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const fetchData = (url_Api) => {
    return new Promise((resolve, reject) => {
        const xhttp =  new XMLHttpRequest();

        xhttp.open('GET', url_Api, true) 
        xhttp.onreadystatechange = (() => { 
            
            if (xhttp.readyState === 4) {
                (xhttp.status === 200 )
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error', url_Api))
            }
        });
        xhttp.send(); 
    });
}

module.exports = fetchData; //export o import para utilizar esta funcion dentro de otro archivo