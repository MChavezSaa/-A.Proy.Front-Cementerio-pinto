import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaHoraComponent } from './reserva-hora.component';

describe('ReservaHoraComponent', () => {
  let component: ReservaHoraComponent;
  let fixture: ComponentFixture<ReservaHoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaHoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaHoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
