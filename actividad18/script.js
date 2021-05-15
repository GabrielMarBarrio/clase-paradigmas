const app = Vue.createApp({
    data(){
        return {
            usuarios: []
        }
    },
    methods: {
        obtenerUsuarios(){
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json => {
                    this.usuarios = json;
                    console.log(this.usuarios);
                })
        }
    },
    created(){
        this.obtenerUsuarios();
    }
})

const vm = app.mount('#app')