import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateportalComponent } from './createportal.component';

describe('CreateportalComponent', () => {
  let component: CreateportalComponent;
  let fixture: ComponentFixture<CreateportalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateportalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
