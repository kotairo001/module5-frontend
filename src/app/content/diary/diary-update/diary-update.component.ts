import {Component, OnInit} from '@angular/core';
import {Diary} from "../../../model/Diary";
import {DiaryService} from "../../../service/diary.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TokenService} from "../../../service/token.service";

@Component({
  selector: 'app-diary-update',
  templateUrl: './diary-update.component.html',
  styleUrls: ['./diary-update.component.css']
})
export class DiaryUpdateComponent implements OnInit {

  form: any = {};
  // @ts-ignore
  diary = new Diary();
  status = "UPDATE YOUR DIARY";
  userId: number = 0;

  constructor(private diaryService: DiaryService,
              private router: Router,
              private actRouter: ActivatedRoute,
              public tokenService: TokenService,
  ) {
  }


  onUpload($event: string) {
    this.diary.avatar = $event;
  }

  ngOnInit(): void {
    this.actRouter.paramMap.subscribe(diaryId => {
      // @ts-ignore
      const id = +diaryId.get("id");
      this.diaryService.getDiaryById(id).subscribe(data => {
        this.diary = data;
        console.log(this.diary)
      })
    })
    this.userId = this.tokenService.getId()

  }

  updateDiary() {
    // @ts-ignore
    this.diaryService.updateDiary(this.diary?.id, this.diary).subscribe(data => {
      console.log(data)
      if (data.message == "no_change") {
        this.status = "There no change in each field"
      } else if (data.message == "title_existed") {
        this.status = "This diary already existed"
      } else {
        this.status = "Update success"
        this.router.navigateByUrl('/diary/all/' + this.userId)

      }
    })
  }
}
