const comprarCasco = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Andamos comprando el casquillo");
        resolve();
    }, 1000)
})

const comprarGuantes = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Andamos comprando los guantes");
        resolve();
    }, 2000)
})

const irDePaseo = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("De paseo con el robe");
        resolve();
    }, 8000)
})

comprarCasco
    .then(comprarGuantes)
    .then(irDePaseo)