import {Category} from "./Category";

export class Diary {
  public id?:number;
  public title?:string;
  public description?:string;
  public detail?:string;
  public avatar?:string;
  public categoryList?: Category[];
  public createDate?: Date;

  constructor(title: string, description: string, detail: string, avatar: string, categoryList: Category[]) {
    this.title = title;
    this.description = description;
    this.detail = detail;
    this.avatar = avatar;
    this.categoryList = categoryList;
  }
}

