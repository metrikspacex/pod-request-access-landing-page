import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  imports: [CommonModule],
  selector: "app-logo",
  standalone: true,
  styleUrls: ["./logo.component.scss"],
  templateUrl: "./logo.svg",
})
export class LogoComponent {}
