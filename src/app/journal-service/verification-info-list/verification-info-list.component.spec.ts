import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationInfoListComponent } from './verification-info-list.component';

describe('VerificationInfoListComponent', () => {
  let component: VerificationInfoListComponent;
  let fixture: ComponentFixture<VerificationInfoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerificationInfoListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerificationInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
