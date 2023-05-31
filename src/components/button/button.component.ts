import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  imports: [CommonModule],
  selector: "app-button",
  standalone: true,
  styleUrls: ["./button.component.scss"],
  templateUrl: "./button.component.html",
})
export class ButtonComponent {}
