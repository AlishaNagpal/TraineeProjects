import { observable, action } from 'mobx'

class ToDoList {

    @observable Tasks  = 'Hello'
    @action add() {
        this.Tasks = this.Tasks + this.Tasks
    }
    
}

export default new ToDoList();