import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeleteModalComponent } from './user-delete-modal.component';

describe('UserDeleteModalComponent', () => {
  let component: UserDeleteModalComponent;
  let fixture: ComponentFixture<UserDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDeleteModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
