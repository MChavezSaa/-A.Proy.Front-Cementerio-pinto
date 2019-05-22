import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionFormComponent } from './revision-form.component';

describe('RevisionFormComponent', () => {
  let component: RevisionFormComponent;
  let fixture: ComponentFixture<RevisionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
