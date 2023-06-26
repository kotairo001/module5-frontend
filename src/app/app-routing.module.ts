import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./form-login/register/register.component";
import {LoginComponent} from "./form-login/login/login.component";
import {DadInputComponent} from "./input-output/@Input/dad-input/dad-input.component";
import {DadOutputComponent} from "./input-output/@output/dad-output/dad-output.component";
import {ChangeAvatarComponent} from "./form-login/change-avatar/change-avatar.component";
import {ListCategoryComponent} from "./content/category/list-category/list-category.component";
import {UpdateCategoryComponent} from "./content/category/update-category/update-category.component";
import {ListDiaryComponent} from "./content/diary/list-diary/list-diary.component";
import {CreateDiaryComponent} from "./content/diary/create-diary/create-diary.component";
import {DiaryDetailComponent} from "./content/diary/diary-detail/diary-detail.component";
import {DiaryUpdateComponent} from "./content/diary/diary-update/diary-update.component";
import {DiaryGuardService} from "../diary-guard";
import {AdminPageComponent} from "./admin-page/admin-page.component";
import {UserManagementComponent} from "./content/user-management/user-management.component";
import {AdminGuardService} from "./app-guard";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'input', component: DadInputComponent},
  {path: 'output', component: DadOutputComponent},
  {path: 'change-avatar', component: ChangeAvatarComponent},
  {path: 'category', component: ListCategoryComponent, canActivate: [AdminGuardService]},
  {path: 'diary/all/:id', component: ListDiaryComponent, canActivate: [DiaryGuardService]},
  {path: 'create-diary', component: CreateDiaryComponent, canActivate: [DiaryGuardService]},
  {path: 'update-diary/:id', component: DiaryUpdateComponent, canActivate: [DiaryGuardService]},
  {path: 'detail/:id', component: DiaryDetailComponent, canActivate: [DiaryGuardService]},
  {path: 'users', component: UserManagementComponent, canActivate: [AdminGuardService]}

  // {path: 'update-category/:id', component: UpdateCategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
