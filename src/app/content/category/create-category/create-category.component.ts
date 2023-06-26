import {Component} from '@angular/core';
import * as events from "events";
import {CategoryService} from "../../../service/category.service";
import {Category} from "../../../model/Category";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent {
  form: any = {};
  category ?: Category
  status = "Form Create Category"

  protected readonly events = events;

  constructor(private categoryService: CategoryService) {
  }



  createCategory() {
    this.category = new Category(this.form.name)

    this.categoryService.createCategoryService(this.category).subscribe(data => {
      console.log("data --->", data)
      if (data.message == "name_existed") {
        this.status = "Try again"
      } else if (data.message == "create_success") {
        this.status = "Add success"
        window.location.reload();
      }
    })
  }
}
