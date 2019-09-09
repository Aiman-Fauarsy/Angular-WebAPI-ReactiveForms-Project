import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnotesComponent } from './addnotes.component';

describe('AddnotesComponent', () => {
  let component: AddnotesComponent;
  let fixture: ComponentFixture<AddnotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
