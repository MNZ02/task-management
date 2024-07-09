import { Component, Input, Output, EventEmitter } from "@angular/core";

interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: "app-users",
  standalone: true,
  imports: [],
  templateUrl: "./users.component.html",
  styleUrl: "./users.component.css",
})
export class UsersComponent {
  @Input({ required: true }) users!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter();
  get imagePath() {
    return "/assets/users/" + this.users.avatar;
  }

  onSelectUser() {
    this.select.emit(this.users.id);
  }
}
