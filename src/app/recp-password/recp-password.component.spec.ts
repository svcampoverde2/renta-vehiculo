import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecpPasswordComponent } from './recp-password.component';

describe('RecpPasswordComponent', () => {
  let component: RecpPasswordComponent;
  let fixture: ComponentFixture<RecpPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecpPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecpPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
