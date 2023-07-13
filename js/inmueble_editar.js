console.log(location.search) // lee los argumentos pasados a este formulario
var id=location.search.substring(4)
console.log(id)
url = 'https://emaldonadomay.pythonanywhere.com/inmuebles/'+id; // url = 'http://localhost:5000/inmuebles/'+id;
// console.log(url)

fetch(url)
.then(response => response.json())
.then(data => {
    document.getElementById('idInmueble').value = data.idInmueble;
    document.getElementById('nombre').value = data.nombre;
    document.getElementById('categoria').value = data.categoria;
    document.getElementById('operacion').value = data.operacion;
    document.getElementById('barrio').value = data.barrio;
    document.getElementById('m2').value = data.m2;
    document.getElementById('ambientes').value = data.ambientes;
    document.getElementById('precio').value = data.precio;
    document.getElementById('foto').value = data.foto;
    document.getElementById('imagenFoto').src = data.foto
})

document.getElementById('foto').addEventListener('input', function() {
    document.getElementById('imagenFoto').src = this.value;
  });
  

function editaInmueble(){
    let inmueble = {
        nombre: document.getElementById('nombre').value,
        categoria: document.getElementById('categoria').value,
        operacion: document.getElementById('operacion').value,
        barrio: document.getElementById('barrio').value,
        m2: document.getElementById('m2').value,
        ambientes: document.getElementById('ambientes').value,
        precio: document.getElementById('precio').value,        
        foto: document.getElementById('foto').value
    }

    id = document.getElementById('idInmueble').value;
    url = 'https://emaldonadomay.pythonanywhere.com/inmuebles/'+id; // url = 'http://localhost:5000/inmuebles/'+id;

    let options = {
        body:JSON.stringify(inmueble),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    };

    fetch(url, options)
    .then(function(){
        alert('MODIFICACION de Registro OK !!');
        window.location.href= './inmuebles.html';
    })
    .catch(err => {
        alert('No pudo modificarse el registro');
        console.error(err);
    })
}
