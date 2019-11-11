import {observable,action} from 'mobx'

class ToDoList{

   @observable Tasks = 'hcvqjhdc'
   @action add(taskToDo){
       this.Tasks.append(taskToDo)
    }
}

export default ToDoList;