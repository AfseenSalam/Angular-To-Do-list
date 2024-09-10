import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Todo } from './module/todo';
import { CommonModule, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,FormsModule,DecimalPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularTo-Do';
  newTodo:Todo ={} as Todo;
  findTask:string="";
  allTodo: Todo[] = [
    { task: 'Buy groceries', completed: false, duration: 30, priority: 'NORMAL' },
    { task: 'Walk the dog', completed: false, duration: 15, priority: 'LOW' },
    { task: 'Finish homework', completed: true, duration: 60, priority: 'HIGH' },
    { task: 'Clean the house', completed: false, duration: 45, priority: 'NORMAL' },
    { task: 'Read a book', completed: true, duration: 90, priority: 'LOW' }
  ];
  
 
  isCompleted(t:Todo):void{
t.completed = true;

  }
  removeTask(t:Todo):void{
    let index:number = this.allTodo.findIndex(x=> x ===  t );
    this.allTodo.splice(index,1);
  }
  addTask():void{
    if(this.newTodo.task !== "" && this.newTodo.duration>0){
     this.allTodo.push({...this.newTodo,completed:false});
     this.newTodo = {}as Todo;
    }

  }
  allTaskCompleted():boolean{
return this.allTodo.every(x => x.completed === true);
  }
  suggestion(findTask:string):Todo[]{
   return this.allTodo.filter(c=>c.task.toLowerCase().includes(this.findTask.toLowerCase()));
  }
  selectTask(t: Todo): void {
    this.findTask = t.task; // Fill the input with the selected task
  }
}
