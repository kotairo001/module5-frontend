import {Component, OnInit} from '@angular/core';
import {DiaryService} from "../../../service/diary.service";
import {ActivatedRoute} from "@angular/router";
import {Diary} from "../../../model/Diary";

@Component({
  selector: 'app-diary-detail',
  templateUrl: './diary-detail.component.html',
  styleUrls: ['./diary-detail.component.css']
})

export class DiaryDetailComponent implements OnInit {
  // @ts-ignore
  diary = new Diary();

  constructor(private diaryService: DiaryService,
              private actRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.actRouter.paramMap.subscribe(diaryID => {
      // @ts-ignore
      const id = +diaryID.get("id");
      this.diaryService.getDiaryById(id).subscribe(data => {
        this.diary = data;
        console.log(this.diary)
      })
    })
  }

}
