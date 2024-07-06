import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { UsersComponent } from "./users/users.component";
import { TasksComponent } from "./tasks/tasks.component";
import { DUMMY_USERS } from "./dummy-users";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UsersComponent, TasksComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "easy-task-app";
  users = DUMMY_USERS;

  selectedId = "u1";

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedId)!;
  }

  onSelect(id: string) {
    this.selectedId = id;
  }
}
