import type { Routes } from "@angular/router";

import { DesignSystemPage } from "./pages/design-system/design-system.component";
import { LandingPage } from "./pages/landing/landing.component";

export const routes: Routes = [
  {
    component: DesignSystemPage,
    path: "design-system",
  },
  {
    component: LandingPage,
    path: "",
  },
];
