import type { ComponentFixture } from "@angular/core/testing";
import { TestBed } from "@angular/core/testing";

import { LandingPage } from "./landing.component";

describe("LandingPage", () => {
  let component: LandingPage;
  let fixture: ComponentFixture<LandingPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LandingPage],
    });
    fixture = TestBed.createComponent(LandingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
