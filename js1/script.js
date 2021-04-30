const Pelicula = {
    id: 1,
    nombre: "ironman",
    reproducir(){
        return `Reproduciendo la pelicula ${this.nombre}`
    }
}

console.log(Pelicula.reproducir());