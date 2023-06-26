import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DiaryDeleteComponent} from './diary-delete.component';

describe('DiaryDeleteComponent', () => {
  let component: DiaryDeleteComponent;
  let fixture: ComponentFixture<DiaryDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiaryDeleteComponent]
    });
    fixture = TestBed.createComponent(DiaryDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
