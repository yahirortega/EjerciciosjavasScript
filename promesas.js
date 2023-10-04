const names = ["Frank", "yahir","carlos","joselui"]

const getNamesPromise = () => new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            console.log('Ejecuta promesa');
            if(valor){
                resolve(names);
            
            }
        }, 1000)
    }
)

console.log('Inicia peticion')
getNamesPromise ('').then(
    (datos) => {
        console.log(datos);
        console.log('Finaliza peticion')
    }
)
    .catch(error => console.log(error))
console.log('Continua ejecucion')