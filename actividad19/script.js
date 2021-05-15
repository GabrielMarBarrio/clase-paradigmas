const app = Vue.createApp({

})

app.component('foco',{
    props:['lugar'],
    data(){
        return {
            isOn: false
        }
    },
    template:`
    <img :src="isOn ? 'images/focoOff.png' : 'images/focoOn.png'" @click=" isOn = !isOn ">
    <p>{{lugar}}</p>
    `
})

const vm = app.mount('#app')