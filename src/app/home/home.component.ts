import {Component, OnInit} from '@angular/core';
import {DiaryService} from "../service/diary.service";
import {AuthService} from "../service/auth.service";
import firebase from "firebase/compat";
import User = firebase.User;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listUser: User[] = []
  countDiary: number = 0;
  countUser: number = 0;

  constructor(private diaryService: DiaryService,
              private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.diaryService.getDiaryNumber().subscribe(data => {
      this.countDiary = data;
    })
    this.authService.getUser().subscribe(data => {
      this.listUser = data;
      this.countUser = this.listUser.length - 1
    })
  }

}
