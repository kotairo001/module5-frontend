import {Component, OnInit} from '@angular/core';
import {Category} from "../../../model/Category";
import {DiaryService} from "../../../service/diary.service";
import {CategoryService} from "../../../service/category.service";
import {Diary} from "../../../model/Diary";
import * as events from "events";
import {Router} from "@angular/router";
import {FormControl, Validators} from "@angular/forms";
import {TokenService} from "../../../service/token.service";

@Component({
  selector: 'app-create-diary',
  templateUrl: './create-diary.component.html',
  styleUrls: ['./create-diary.component.css']
})
export class CreateDiaryComponent implements OnInit {

  status = "WRITE YOUR DIARY";
  form: any = {}
  listCategory?: Category[];
  diary: Diary = {};
  protected readonly events = events;
  userId: number = 0;

  constructor(public diaryService: DiaryService,
              public categoryService: CategoryService,
              public tokenService: TokenService,
              private router: Router
  ) {
  }


  onUpload($event: string) {
    this.form.avatar = $event;

  }

  createDiary() {
    this.diary = new Diary(this.form.title, this.form.description, this.form.detail, this.form.avatar, this.form.listCategory);
    if (this.form.avatar == undefined) {
      this.status = "Avatar is required! Please choose upload avatar"
    } else {
      this.diaryService.createDiaryService(this.diary).subscribe(data => {
        console.log("data --->", data)
        if (data.message=="create_success") {
          this.status = "Add success"
          this.router.navigateByUrl('/diary/all/' + this.userId)
        }
      })
    }
  }

  ngOnInit(): void {
    this.categoryService.getListCategory().subscribe(data => {
      this.listCategory = data;
    })
    this.userId = this.tokenService.getId()

  }
}
