import { Component, Input } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
@Component({
  selector: "app-tasks",
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: "./tasks.component.html",
  styleUrl: "./tasks.component.css",
})
export class TasksComponent {
  @Input({ required: true }) userId?: string;
  @Input({ required: true }) name?: string;
  isAddingTask = false;
  tasks = [
    {
      id: "1",
      userId: "u1",
      title: "Mastering Angular",
      summary: "Learn Angular",
      dueDate: "2022-12-31",
    },
    {
      id: "2",
      userId: "u1",
      title: "Mastering react",
      summary: "Learn Angular",
      dueDate: "2022-12-31",
    },
    {
      id: "3",
      userId: "u3",
      title: "Mastering vue",
      summary: "Learn Angular",
      dueDate: "2022-12-31",
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
    console.log("Button clicked");
  }

  // onAddTask() {
  //   this.tasks.push({
  //     id: Math.random().toString(),
  //     userId: this.userId!,
  //     title: "New Task",
  //     summary: "New Task",
  //     dueDate: "2022-12-31",
  //   });
  // }
}
