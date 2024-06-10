import { Component } from '@angular/core';

interface Task {
  id: number;
  title: string;
  completed: boolean;
  editing?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  newTask: string = '';
  taskList: Task[] = [];
  editingIndex: number | null = null;

  addTask(): void {
    if (this.newTask.trim() !== '') {
      this.taskList.push({
        id: this.taskList.length + 1,
        title: this.newTask,
        completed: false,
        editing: false,
      });
      this.newTask = '';
    }
  }

  toggleTaskCompletion(task: Task): void {
    task.completed = !task.completed;
  }

  editTask(index: number): void {
    this.taskList[index].editing = true;
    this.editingIndex = index;
  }

  saveEdit(index: number, newTitle: string): void {
    if (newTitle.trim() !== '') {
      this.taskList[index].title = newTitle.trim();
      this.taskList[index].editing = false;
      this.editingIndex = null;
    }
  }

  cancelEdit(index: number): void {
    this.taskList[index].editing = false;
    this.editingIndex = null;
  }

  deleteTask(index: number): void {
    this.taskList.splice(index, 1);
  }
}
