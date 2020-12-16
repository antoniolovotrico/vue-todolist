//Vue Istance
let app = new Vue({
    el: "#app",
    //Create inside data section an array with to-do list quest
    data: {
        toDo : [
            "Schierare formazione Fantacalcio",
            "Esercitarsi con la chitarra",
            "Tagliare i capelli",
            "Completare l'esercizio",
            
        ],
        // create an empty key, this stands for our input in Dom 
        newTask : "",
        // add an image to pass dinamically to the DOM
        image : "./assets/img/todoimg.png", 
        // create an empty key to show message of no task to do  
        message : ""  
    },
    //create two function in methods, one to add tasks and another to remove them.
    methods: {
        addFunc() {
            //Set conditions to ignore empty or to short tasks
            if (this.newTask.length > 3){
            this.toDo.push(this.newTask);
            }
        },
        removeFunc() {
            this.toDo.splice(0,1);
            //Set condition to give proper message when there is no task to do in the list
            if (this.toDo.length < 1) {
                this.message = "Pomeriggio Libero!!!!"
            }
        }
    }
})