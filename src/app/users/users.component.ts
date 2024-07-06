import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-users",
  standalone: true,
  imports: [],
  templateUrl: "./users.component.html",
  styleUrl: "./users.component.css",
})
export class UsersComponent {
  @Input({ required: true }) users!: {
    id: string;
    name: string;
    avatar: string;
  };
  @Output() select = new EventEmitter();
  get imagePath() {
    return "/assets/users/" + this.users.avatar;
  }

  onSelectUser() {
    this.select.emit(this.users.id);
  }
}
