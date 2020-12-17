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
        // create an empty array where to push completed tasks  
        compleArr : [],
        // create an empty array where to push deleted tasks 
        deleteArr : []
    },
    //create two function in methods, one to add tasks and another to remove them.
    methods: {
        addFunc() {
            //Set conditions to ignore empty or to short tasks
            if (this.newTask.length > 3){
            this.toDo.push(this.newTask);
            }
        },
        completeFunc(i) {
            let complete = this.toDo.splice(i,1);
            this.compleArr= [...this.compleArr,...complete];
        },
        modifyFunc(i) {
            let newInp = prompt("Modifica il testo della tua Task");
            this.toDo.splice(i,1,newInp);
            
        },
        removeFunc(i) {
            let canc = this.compleArr.splice(i,1);
            this.deleteArr.push(...canc);
        },
    }
})