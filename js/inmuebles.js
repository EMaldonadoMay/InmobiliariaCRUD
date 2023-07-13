const {createApp} = Vue

createApp({
    data(){
        return{
           inmuebles: [],
           url: 'http://emaldonadomay.pythonanywhere.com/inmuebles', // url: 'http://127.0.0.1:5000/inmuebles', 
           cargando: true,
           error: false
        }
    },

    methods:{
        fetchData(url){
            fetch(url)
            .then(response => response.json())
            .then(data => {
                this.inmuebles = data;
                this.cargando = false;
            })
            .catch(err => {
                console.error(err);
                this.error = true;
            })
        },

        eliminar(inmueble) {
            const url = 'http://emaldonadomay.pythonanywhere.com/inmuebles/'+inmueble; // const url = 'http://localhost:5000/inmuebles/'+inmueble;
            let options = {
                method: 'DELETE'
            }
            fetch(url, options)
            .then(res => res.json())
            .then(res => {
                    location.reload();
            })
            .catch(err => {
                console.error(err);
                this.error = true;
            })
        },
    },

    created(){
        this.fetchData(this.url);
    }
}).mount('#app')