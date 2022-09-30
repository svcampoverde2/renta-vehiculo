import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserClienteComponent } from './user-cliente.component';

describe('UserClienteComponent', () => {
  let component: UserClienteComponent;
  let fixture: ComponentFixture<UserClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
