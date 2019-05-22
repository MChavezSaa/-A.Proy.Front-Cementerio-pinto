import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteHeaderComponent } from './cliente-header.component';

describe('ClienteHeaderComponent', () => {
  let component: ClienteHeaderComponent;
  let fixture: ComponentFixture<ClienteHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
