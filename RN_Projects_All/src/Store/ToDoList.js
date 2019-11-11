import { observable, action } from 'mobx'

class ToDoList {

    @observable item = ''
    @observable Tasks  = []
    @action add() {
        this.Tasks.push(this.item)
    }
}

export default new ToDoList();