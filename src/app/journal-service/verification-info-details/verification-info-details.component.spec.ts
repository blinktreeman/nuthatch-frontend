import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationInfoDetailsComponent } from './verification-info-details.component';

describe('VerificationInfoDetailsComponent', () => {
  let component: VerificationInfoDetailsComponent;
  let fixture: ComponentFixture<VerificationInfoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerificationInfoDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerificationInfoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
