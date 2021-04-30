const url = 'https://jsonplaceholder.typicode.com/photos';
const lista = document.getElementById('lista');
//es o este
fetch(url)
  .then(response => response.json())
  .then(fotos => {
    fotos.map(foto => {
        let li = document.createElement('li');
        li.innerHTML = `<a href=detalle.html?id=${foto.id}>id: ${foto.id}<a> title:${foto.title}`;
        lista.appendChild(li);
    })
    console.log(fotos);
  })
  .catch(error => {
    console.log(error)
  })
  .finally(()=>{
    document.getElementById('cargando').src="";
  })

  //o este
const obtenerFotos = async () => {
    const response = await fetch(url);
    const fotos = await response.json;
    return fotos;
}

obtenerFotos()
.then(fotos => {
    fotos.map(foto => {
        let li = document.createElement('li');
        li.innerHTML = `<a href=detalle.html?id=${foto.id}>id: ${foto.id}<a> title:${foto.title}`;
        lista.appendChild(li);
    })
    console.log(fotos);
  })
  .catch(error => {
    console.log(error)
  })
  .finally(()=>{
    document.getElementById('cargando').src="";
  })