import type { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "../routes";

export const client_config: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
