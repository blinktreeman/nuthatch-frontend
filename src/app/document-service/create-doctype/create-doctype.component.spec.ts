import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDoctypeComponent } from './create-doctype.component';

describe('CreateDoctypeComponent', () => {
  let component: CreateDoctypeComponent;
  let fixture: ComponentFixture<CreateDoctypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateDoctypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateDoctypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
