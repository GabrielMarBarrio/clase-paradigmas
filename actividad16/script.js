const app = Vue.createApp({
    data() {
      return { 
          producto: {nombre: "", cantidad: 0},
          productos: [
              {nombre: "cerveza", cantidad: 100},
              {nombre: "agua", cantidad: 50},
              {nombre: "vino", cantidad: 10}
          ]
      }
    },

    methods: {
        agregarProducto(){
            this.productos.push(
                {nombre: this.producto.nombre, cantidad: 0}
            )
            this.producto="";
        }
    },

    // computed:{
    //     total(){
    //         return this.productos.reduce()
    //     }
    // }

  })

const vm = app.mount('#app')

