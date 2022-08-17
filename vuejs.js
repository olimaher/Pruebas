const app = new Vue({
    el: "#app",
    data: {
        mensaje: "Este es el mensaje",
        nuevaFruta: '',
        total: 0,
        frutas: [
            { nombre: 'Pera', cantidad: 1 },
            { nombre: 'Manzana', cantidad: 2 }
        ],
    },
    methods: {
        agregar() {
            this.frutas.push({
                nombre:this.nuevaFruta, cantidad:1
            })
            this.nuevaFruta = ''
        }
    },
    computed: {
        sumarFrutas(){
            this.total = 0;
            for (sumar of this.frutas) {
                this.total = this.total + sumar.cantidad;
            }
            return this.total;
        }
    }

    


})

const men2 = new Vue({
    el: "#suma",
    data:{
        mensaje2 : "este es el mensaje 2 card"
    }
})