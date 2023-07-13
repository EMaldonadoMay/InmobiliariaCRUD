document.getElementById('foto').addEventListener('input', function() {
    document.getElementById('imagenFoto').src = this.value;
    console.log(document.getElementById('imagenFoto').src);
  });
  
function altaInmueble() {

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
    
    console.log(inmueble)

    let url = 'https://emaldonadomay.pythonanywhere.com/inmuebles'; // let url = 'http://localhost:5000/inmuebles';

    let options = {
        body: JSON.stringify(inmueble),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }

    fetch(url, options)
    .then(function () {
        alert("ALTA de Registro OK !!");
        window.location.href = "./inmuebles.html";
    })
    .catch(err => {
        console.error(err);
        alert("Error al Grabarr");
    })


}
