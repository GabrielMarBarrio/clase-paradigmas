const comprarCasco = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Comprar casco")
        },1000)
    })
}

const comprarGuantes = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Comprar guantes")
        },2000)
    })
}

const pasear = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Bici")
        },8000)
    })
}

const viajar = async () => {
    const casco = await comprarCasco();
    const guantes = await comprarGuantes();
    const paseo = await pasear();
    return ([casco,guantes,paseo]);
}

viajar().then(res => console.log(res));