import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CreateCategoryComponent} from "../create-category/create-category.component";
import {TokenService} from "../../../service/token.service";
import {Category} from "../../../model/Category";
import {CategoryService} from "../../../service/category.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {UpdateCategoryComponent} from "../update-category/update-category.component";
import {DeteleCategoryComponent} from "../detele-category/detele-category.component";

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css'],

})
export class ListCategoryComponent implements OnInit {
  checkUserLogin = false
  dataSource: any;


  constructor(
    public dialog: MatDialog,
    private tokenService: TokenService,
    private categoryService: CategoryService
  ) {
  }

  listCategory: Category[] = [];
  displayedColumns: string[] = ['id', 'name', 'edit', 'delete'];

  openDialog() {
    const dialogRef = this.dialog.open(CreateCategoryComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log("Result-->", result);
      if (result || result == undefined) {
        this.categoryService.getListCategory().subscribe(data => {
          this.listCategory = data;
          this.dataSource = new MatTableDataSource<Category>(this.listCategory);
          console.log("list category --->", data)
          this.dataSource.paginator = this.paginator;
        })
      }
    });
  }

  openDialogUpdate(id: any) {
    const dialogRef = this.dialog.open(UpdateCategoryComponent, {
      data: {
        dataKey: id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Result-->", result);
      if (result || result == undefined) {
        this.categoryService.getListCategory().subscribe(data => {
          this.listCategory = data;
          this.dataSource = new MatTableDataSource<Category>(this.listCategory);
          console.log("list category --->", data)
          this.dataSource.paginator = this.paginator;
        })
      }
    });
  }

  openDialogDelete(id: any) {
    const dialogRef = this.dialog.open(DeteleCategoryComponent, {
      data: {
        dataKey: id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.categoryService.deleteCategory(id).subscribe(data => {
          this.categoryService.getListCategory().subscribe(data => {
            this.listCategory = data;
            this.dataSource = new MatTableDataSource<Category>(this.listCategory);
            console.log("list category --->", data)
            this.dataSource.paginator = this.paginator;
          })

        });
      }
    });
  }

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.checkUserLogin = true;
    }
    this.categoryService.getListCategory().subscribe(data => {
      this.listCategory = data;
      this.dataSource = new MatTableDataSource<Category>(this.listCategory);
      console.log("list category --->", data)
      this.dataSource.paginator = this.paginator;
    })
  }
}
