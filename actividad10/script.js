let lista = document.getElementById("lista");
let valores = ['Gabriel', 'Atsel', 'El luisfer'];

const mostrarValores = () => valores.map(valor => {
    let componenteLi = document.createElement("li");
    componenteLi.innerHTML = valor;
    lista.appendChild(componenteLi);
})

const agregarValor = () => {
    let valor = document.getElementById("valor");
    lista.innerHTML = "";
    valores.push(valor.value);
    mostrarValores();
    valor.value = "";
}

const limpiarValores = () => {
    lista.innerHTML = "",
    valores = [];
}

mostrarValores();