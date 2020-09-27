import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfooterComponent } from './editfooter.component';

describe('EditfooterComponent', () => {
  let component: EditfooterComponent;
  let fixture: ComponentFixture<EditfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
