import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTeaminformationComponent } from './edit-teaminformation.component';

describe('EditTeaminformationComponent', () => {
  let component: EditTeaminformationComponent;
  let fixture: ComponentFixture<EditTeaminformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTeaminformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTeaminformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
