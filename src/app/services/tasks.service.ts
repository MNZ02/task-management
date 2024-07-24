import { Injectable } from "@angular/core";
import { NewTaskData } from "../models/new-task-data";

@Injectable({
  providedIn: "root",
})
export class TasksService {
  private tasks = [
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

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTasks(taskData: NewTaskData, userId: string) {
    this.tasks.push({
      id: Math.random().toString(),
      userId: userId!,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
