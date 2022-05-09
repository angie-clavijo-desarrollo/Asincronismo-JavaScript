const somethingWillHappen = () => {
    return new Promise((resolve, reject) => { // dos argumentos si se resuelve o si se rechaza
        if(true){
            resolve('is correct');
        } else {
            reject('not correct');
        }
    });
}

somethingWillHappen() //para ejecutar promesa, pero tiene encadenado .then y .cacth
    .then(response => console.log(response))
    .catch(err => console.error(err))





const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {// tener cuidado con Promise, debe ir siempre con leta inicial con mayuscula de lo contrario no crea la promesa
        if (true){
            setTimeout(() => {
                resolve('True')
            }, 2000);
        } else{
            const error = new Error('Wops')
            reject(error);
        }
    });
}

somethingWillHappen2()
    .then(response => console.log(response)) //podemos tener 1 o muchos .then
    .catch(err => console.error(err))



//correr varias promesas al mismo tiempo
Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response =>{
        console.log('Array of results', response);
    })
    .catch(err =>{
        console.error(err);
    })