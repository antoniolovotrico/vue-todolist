//Vue Istance
let app = new Vue({
    el: "#app",
    //Create inside data section an array with to-do list quest
    data: {
        toDo : [
            "Schierare formazione Fantacalcio",
            "Esercitarsi con la chitarra",
            "Tagliare i capelli",
            "completare l'esercizio",
            
        ],
        newTask : "",
        // add an image to pass dinamically to the DOM
        image : "./assets/img/todoimg.png",     
    },
    methods: {
        addFunc() {
            this.toDo.push(this.newTask);
        }
    }
})