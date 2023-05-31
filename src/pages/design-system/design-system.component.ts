import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ButtonComponent } from "src/components/button/button.component";
import { FormComponent } from "src/components/form/form.component";
import { LogoComponent } from "src/components/logo/logo.component";

@Component({
  imports: [ButtonComponent, CommonModule, FormComponent, LogoComponent],
  selector: "app-design-system-page",
  standalone: true,
  styleUrls: ["./design-system.component.scss"],
  templateUrl: "./design-system.component.html",
})
export class DesignSystemPage {}
