import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormComponent } from "src/components/form/form.component";
import { LogoComponent } from "src/components/logo/logo.component";

@Component({
  imports: [CommonModule, FormComponent, LogoComponent],
  selector: "app-landing",
  standalone: true,
  styleUrls: ["./landing.component.scss"],
  templateUrl: "./landing.component.html",
})
export class LandingPage {}
