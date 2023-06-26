import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeteleCategoryComponent } from './detele-category.component';

describe('DeteleCategoryComponent', () => {
  let component: DeteleCategoryComponent;
  let fixture: ComponentFixture<DeteleCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeteleCategoryComponent]
    });
    fixture = TestBed.createComponent(DeteleCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
