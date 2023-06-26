import {Component, OnInit} from '@angular/core';
import {Diary} from "../../../model/Diary";
import {ActivatedRoute, Router} from "@angular/router";
import {DiaryService} from "../../../service/diary.service";
import {TokenService} from "../../../service/token.service";

@Component({
  selector: 'app-update-diary',
  templateUrl: './update-diary.component.html',
  styleUrls: ['./update-diary.component.css']
})
export class UpdateDiaryComponent implements OnInit {
  status = "UPDATE YOUR DIARY";
  form: any = {};
  // @ts-ignore
  diary = new Diary();
  id: number = 0;


  constructor(
    private diaryService: DiaryService,
    private router: Router,
    private actRouter: ActivatedRoute,
    public tokenService: TokenService,
    ) {
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

      }
    })
  }

  onUpload($event: string) {
    this.diary.avatar = $event;
  }

  ngOnInit(): void {
    this.actRouter.paramMap.subscribe(diaryId => {
      // @ts-ignore
      const id = + diaryId.get("id");
      console.log(id)
      this.diaryService.getDiaryById(id).subscribe(data => {
        this.diary = data;
        console.log(this.diary)
      })
    })
  }

}
