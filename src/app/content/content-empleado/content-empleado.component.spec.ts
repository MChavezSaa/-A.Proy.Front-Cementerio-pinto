import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentEmpleadoComponent } from './content-empleado.component';

describe('ContentEmpleadoComponent', () => {
  let component: ContentEmpleadoComponent;
  let fixture: ComponentFixture<ContentEmpleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentEmpleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
