import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ListDiaryComponent} from './list-diary.component';

describe('ListDiaryComponent', () => {
  let component: ListDiaryComponent;
  let fixture: ComponentFixture<ListDiaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListDiaryComponent]
    });
    fixture = TestBed.createComponent(ListDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
