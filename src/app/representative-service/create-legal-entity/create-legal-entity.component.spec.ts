import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLegalEntityComponent } from './create-legal-entity.component';

describe('CreateLegalEntityComponent', () => {
  let component: CreateLegalEntityComponent;
  let fixture: ComponentFixture<CreateLegalEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateLegalEntityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateLegalEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
