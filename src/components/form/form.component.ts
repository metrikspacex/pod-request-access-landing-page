import { CommonModule } from "@angular/common";
import type { ElementRef } from "@angular/core";
import { Component, ViewChild } from "@angular/core";

import { ButtonComponent } from "../button/button.component";

@Component({
  imports: [ButtonComponent, CommonModule],
  selector: "app-form",
  standalone: true,
  styleUrls: ["./form.component.scss"],
  templateUrl: "./form.component.html",
})
export class FormComponent {
  @ViewChild("email", { static: true })
  private readonly email!: ElementRef<HTMLInputElement>;
  public error = false;

  public isError(): void {
    // Simple validation
    if (
      !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/u.test(
        this.email.nativeElement.value
      )
    ) {
      this.error = true;
    } else {
      this.error = false;
    }
  }
}
