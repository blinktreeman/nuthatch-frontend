import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSroComponent } from './create-sro.component';

describe('CreateSroComponent', () => {
  let component: CreateSroComponent;
  let fixture: ComponentFixture<CreateSroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateSroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
