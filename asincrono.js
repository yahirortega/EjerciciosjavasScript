const names = ["Frank", "yahir","carlos","joselui"]

console.log(names);

function getNames(){
    return names;

}
s
console.log(getNames());

function asynGetNames(){
    setTimeout(() => {
        console.log('Ejecuta funcion');
        return names;
    }, 1000);
}

console.log('Inicia peticion');
console.log(asynGetNames());
console.log('Termina peticion');

