import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlaunchComponent } from './newlaunch.component';

describe('NewlaunchComponent', () => {
  let component: NewlaunchComponent;
  let fixture: ComponentFixture<NewlaunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewlaunchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewlaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
