const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Do Something Async'))
        : reject(new Error('Test error'))
    })
}

const doSomething = async () => { //ejecutar promesa
    const something = await doSomethingAsync(); //esperara que esto resuelva
    console.log(something);
}

console.log('before');
doSomething();
console.log('after');


//capturar los errores
const anotherfunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something);
    } catch (error) {
        console.error(error);
    }
}

console.log('before 1');
anotherfunction();
console.log('after 1');