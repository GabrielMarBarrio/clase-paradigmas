const levantarse = () => {
    setTimeout(() => {
        console.log("me levante");
        tenderLaCama();
    }, 5000);
}

const tenderLaCama = () => {
    setTimeout(() => {
        console.log("tendi la cama");
        bañarse();
    }, 3000);
}

const bañarse = () => {
    setTimeout(() => {
        console.log("me ando bañando");
        tomarClaseDeParadigmas();
    }, 3000);
}

const tomarClaseDeParadigmas = () => {
    setTimeout(() => {
        console.log("ese mi rober");
        desayunar();
    }, 5000);
}

const desayunar = () => {
    setTimeout(() => {
        console.log("rico cerealito");
        jugarVideoJuegos();
    }, 8000);
}

const jugarVideoJuegos = () => {
    setTimeout(() => {
        console.log("abran el valorant");
    }, 3000);
}

levantarse();



