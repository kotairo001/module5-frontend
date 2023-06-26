import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryUpdateComponent } from './diary-update.component';

describe('DiaryUpdateComponent', () => {
  let component: DiaryUpdateComponent;
  let fixture: ComponentFixture<DiaryUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiaryUpdateComponent]
    });
    fixture = TestBed.createComponent(DiaryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
