const URL   = 'http://127.0.0.1:5500/'

console.log('Peticion 1');
fetch(URL+'datos.txt')
    .then(resp => resp.txt())
    .then(texto => console.log(texto))
    .catch(error => console.log(error))

console.log('Peticion2');
fetch(URL+'datos.json')
    .then(resp => resp.json())
    .then(datos => console.log(datos))
    .catch(error => console.log(error))    

console.log("SIGUE EJECUTANDO");