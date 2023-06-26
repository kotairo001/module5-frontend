import {Component, ViewChild} from '@angular/core';
import firebase from "firebase/compat";
import User = firebase.User;
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {Category} from "../../model/Category";
import {TokenService} from "../../service/token.service";
import {AuthService} from "../../service/auth.service";
import {DiaryService} from "../../service/diary.service";
import {Diary} from "../../model/Diary";

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent {
  dataSource: any;
  displayedColumns: string[] = ['id', 'username', 'name', "avatar"];
  listUser: User[] = [];
  listDiary: Diary[] = [];
  checkUserLogin = false;

  constructor(private tokenService: TokenService,
              private authService: AuthService,
              private diaryService: DiaryService
  ) {
  }

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.checkUserLogin = true;
    }
    this.authService.getUser().subscribe(data => {
      this.listUser = data;
      console.log(data.id)
      this.dataSource = new MatTableDataSource<User>(this.listUser);
      console.log("list user --->", data)
      this.dataSource.paginator = this.paginator;
    })


  }

}
