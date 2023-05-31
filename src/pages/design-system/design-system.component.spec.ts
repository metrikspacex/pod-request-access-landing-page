import type { ComponentFixture } from "@angular/core/testing";
import { TestBed } from "@angular/core/testing";

import { DesignSystemPage } from "./design-system.component";

describe("DesignSystemPage", () => {
  let component: DesignSystemPage;
  let fixture: ComponentFixture<DesignSystemPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DesignSystemPage],
    });
    fixture = TestBed.createComponent(DesignSystemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
