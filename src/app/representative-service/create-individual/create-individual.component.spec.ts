import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIndividualComponent } from './create-individual.component';

describe('CreateIndividualComponent', () => {
  let component: CreateIndividualComponent;
  let fixture: ComponentFixture<CreateIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateIndividualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
