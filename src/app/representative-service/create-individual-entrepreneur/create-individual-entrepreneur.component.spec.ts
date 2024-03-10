import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIndividualEntrepreneurComponent } from './create-individual-entrepreneur.component';

describe('CreateIndividualEntrepreneurComponent', () => {
  let component: CreateIndividualEntrepreneurComponent;
  let fixture: ComponentFixture<CreateIndividualEntrepreneurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateIndividualEntrepreneurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateIndividualEntrepreneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
