const pagarComida = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({
            id: 123456,
            idCliente: 456,
            estatus: true
        })
    }, 3000)
})

const pedirComida = () => {
    pagarComida
        .then(infoPago=>{
            console.log(infoPago)
            return s
        })
}