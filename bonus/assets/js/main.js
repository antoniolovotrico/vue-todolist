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
            "Inserire nuovi bonus"
            
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
    //create 4 function in methods
    methods: {
        //Function to add tasks
        addFunc() {
            //Set conditions to ignore empty or to short tasks
            if (this.newTask.length > 3){
            this.toDo.push(this.newTask);
            }
        },
        //Function to move tasks from to-do list to done list
        completeFunc(i) {
            let complete = this.toDo.splice(i,1);
            this.compleArr= [...this.compleArr,...complete];
        },
        //Function to modify text of the tasks
        modifyFunc(i) {
            let newInp = prompt("Modifica il testo della tua Task");
            this.toDo.splice(i,1,newInp);
            
        },
        //Function to move tasks from done list to delete list
        removeFunc(i) {
            let canc = this.compleArr.splice(i,1);
            this.deleteArr.push(...canc);
        },
        //Function to empty the deleted list
        delAllFunc() {
            this.deleteArr.splice(0);
            
        },
    }
})