console.log("Hola mundo");

function sumarUno(numero, callback){

    if(numero >= 7){
        callback("Numero muy grande");
        return;
    }
    setTimeout(()=>{
        callback(null, numero + 1)
    }, 2000)
}

sumarUno(5, function(error, nuevoValor){
    if(error){
        console.log(error);
        return;
    }
    console.log(nuevoValor)
    sumarUno(nuevoValor, function(error, nuevoValor2) {
        if(error){
            console.log(error);
            return;
        }
        console.log(nuevoValor2)
        sumarUno(nuevoValor2, function(error, nuevoValor3) {
            if(error){
                console.log(error);
                return;
            }
            console.log(nuevoValor3)
        })
    })
})


async function sumarUnoTest(numero){
    return await new Promise((resolve, rejected)=>{
        setTimeout(()=>{
            resolve( numero + 1)
        }, 2000)
    })
    
}