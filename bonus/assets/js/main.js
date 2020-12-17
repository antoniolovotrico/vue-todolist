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
        complete : "",
        compleArr : []
    },
    //create two function in methods, one to add tasks and another to remove them.
    methods: {
        addFunc() {
            //Set conditions to ignore empty or to short tasks
            if (this.newTask.length > 3){
            this.toDo.push(this.newTask);
            }
        },
        removeFunc(i) {
            this.complete = this.toDo.splice(i,1);
            // console.log(this.complete);
            this.compleArr.push(this.complete);
        }
    }
})