import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsideracionesComponent } from './consideraciones.component';

describe('ConsideracionesComponent', () => {
  let component: ConsideracionesComponent;
  let fixture: ComponentFixture<ConsideracionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsideracionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsideracionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
