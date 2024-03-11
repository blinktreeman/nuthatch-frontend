import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVerificationInfoComponent } from './create-verification-info.component';

describe('CreateVerificationInfoComponent', () => {
  let component: CreateVerificationInfoComponent;
  let fixture: ComponentFixture<CreateVerificationInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateVerificationInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateVerificationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
