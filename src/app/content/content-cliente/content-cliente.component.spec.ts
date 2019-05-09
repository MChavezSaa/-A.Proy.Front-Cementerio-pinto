import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentClienteComponent } from './content-cliente.component';

describe('ContentClienteComponent', () => {
  let component: ContentClienteComponent;
  let fixture: ComponentFixture<ContentClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
