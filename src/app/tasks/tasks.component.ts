import { Component, Input } from "@angular/core";
import { TaskComponent } from "./task/task.component";
@Component({
  selector: "app-tasks",
  standalone: true,
  imports: [TaskComponent],
  templateUrl: "./tasks.component.html",
  styleUrl: "./tasks.component.css",
})
export class TasksComponent {
  @Input({ required: true }) userId?: string;
  @Input({ required: true }) name?: string;
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
      title: "Mastering Angular",
      summary: "Learn Angular",
      dueDate: "2022-12-31",
    },
    {
      id: "3",
      userId: "u3",
      title: "Mastering Angular",
      summary: "Learn Angular",
      dueDate: "2022-12-31",
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
}
