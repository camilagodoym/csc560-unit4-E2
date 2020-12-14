import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTeaminformationComponent } from './new-teaminformation.component';

describe('NewTeaminformationComponent', () => {
  let component: NewTeaminformationComponent;
  let fixture: ComponentFixture<NewTeaminformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTeaminformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTeaminformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
