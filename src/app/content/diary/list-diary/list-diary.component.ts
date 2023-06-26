import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TokenService} from "../../../service/token.service";
import {Category} from "../../../model/Category";
import {Diary} from "../../../model/Diary";
import {MatPaginator} from "@angular/material/paginator";
import {DiaryService} from "../../../service/diary.service";
import {Router} from "@angular/router";
import {DiaryDeleteComponent} from "../diary-delete/diary-delete.component";

@Component({
  selector: 'app-list-diary',
  templateUrl: './list-diary.component.html',
  styleUrls: ['./list-diary.component.css'],
})
export class ListDiaryComponent implements OnInit {
  checkUserLogin = false;
  checkListDiary = false;
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private tokenService: TokenService,
    private diaryService: DiaryService,
    private router: Router
  ) {
  }

  listDiary: Diary[] = [];
  form: any;
  listCategory?: Category[];

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.checkUserLogin = true;
    }
    this.diaryService.getListDiary(this.tokenService.getId()).subscribe(data => {
      this.listDiary = data;
      for (let i = 0; i < this.listDiary.length; i++) {
        // @ts-ignore
        this.diaryService.getCategory(this.listDiary[i].id).subscribe(data_category => {
          this.listCategory = data_category;
          console.log(this.listCategory)
        });
      }
      if (this.listDiary.length == 0) {
        this.checkListDiary = true;
      }
    })
  }

  openDialogDelete(id: any) {
    const dialogRef = this.dialog.open(DiaryDeleteComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.diaryService.deleteDiary(id).subscribe(() => {
          this.diaryService.getListDiary(this.tokenService.getId()).subscribe(data => {
            this.listCategory = data
            window.location.reload();
          })
        })
      }
    });
  }

  createDiary() {
    this.router.navigateByUrl('/create-diary')
  }

  updateDiary() {
    this.router.navigateByUrl('/update-diary/:id')
  }

}
