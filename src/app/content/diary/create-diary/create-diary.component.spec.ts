import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDiaryComponent } from './create-diary.component';

describe('CreateDiaryComponent', () => {
  let component: CreateDiaryComponent;
  let fixture: ComponentFixture<CreateDiaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateDiaryComponent]
    });
    fixture = TestBed.createComponent(CreateDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
