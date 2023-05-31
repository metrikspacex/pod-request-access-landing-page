import { Component, ViewEncapsulation } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { RouterOutlet } from "@angular/router";

import { client_config } from "./configurations/client.config";

@Component({
  encapsulation: ViewEncapsulation.None,
  imports: [RouterOutlet],
  selector: "app-root",
  standalone: true,
  template: `<router-outlet />`,
})
export class RootComponent {}

bootstrapApplication(RootComponent, client_config).catch((error) =>
  console.error(error)
);
