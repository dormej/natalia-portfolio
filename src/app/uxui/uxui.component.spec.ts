import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UXUIComponent } from './uxui.component';

describe('UXUIComponent', () => {
  let component: UXUIComponent;
  let fixture: ComponentFixture<UXUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UXUIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UXUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
