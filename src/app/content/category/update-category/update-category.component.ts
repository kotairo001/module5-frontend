import {Component, Inject, OnInit} from '@angular/core';
import {update} from "@angular/fire/database";
import {ActivatedRoute} from "@angular/router";
import {Category} from "../../../model/Category";
import {CategoryService} from "../../../service/category.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  status = "Form Update Category";
  form: any = {};
  // @ts-ignore
  category = new Category();

  constructor(private avtRouter: ActivatedRoute,
              private categoryService: CategoryService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  updateCategory() {
    // @ts-ignore
    this.categoryService.updateCategory(this.category?.id, this.category).subscribe(data => {
      if (data.message == "no_change") {
        this.status = "There no change in each field"
      } else if (data.message == "name_existed") {
        this.status = "This category already existed"
      } else {
        this.status = "Update success"
        window.location.reload();

      }
    })
  }


  ngOnInit(): void {
    this.categoryService.getCategoryById(this.data.dataKey).subscribe(data => {
      this.category = data;
    })
    // this.avtRouter.paramMap.subscribe(categoryId =>{
    //   console.log('categoryId --->', categoryId);
    //   // @ts-ignore
    //   const id = +categoryId.get("id");
    //   this.categoryService.getCategoryById(id).subscribe(data=>{
    //     this.category = data;
    //     console.log("category --->", this.category)
    //   })
    // })

  }
}
