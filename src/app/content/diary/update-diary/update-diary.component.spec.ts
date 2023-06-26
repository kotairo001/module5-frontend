import {ComponentFixture, TestBed} from '@angular/core/testing';
import {UpdateDiaryComponent} from './update-diary.component';

describe('UpdateDiaryComponent', () => {
  let component: UpdateDiaryComponent;
  let fixture: ComponentFixture<UpdateDiaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateDiaryComponent]
    });
    fixture = TestBed.createComponent(UpdateDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
