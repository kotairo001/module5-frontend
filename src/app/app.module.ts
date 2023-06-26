import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavBarComponent} from './nav-foot/nav-bar/nav-bar.component';
import {FooterComponent} from './nav-foot/footer/footer.component';
import {HomeComponent} from './home/home.component';
import {MatCardModule} from "@angular/material/card";
import {RegisterComponent} from './form-login/register/register.component';
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LoginComponent} from './form-login/login/login.component';

import {environment} from "../environments/environment.development";
import {UploadAvatarComponent} from './upload/upload-avatar/upload-avatar.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ChildInputComponent} from './input-output/@Input/child-input/child-input.component';
import {DadInputComponent} from './input-output/@Input/dad-input/dad-input.component';
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {ChildOutputComponent} from './input-output/@output/child-output/child-output.component';
import {DadOutputComponent} from './input-output/@output/dad-output/dad-output.component';
import {ChangeAvatarComponent} from './form-login/change-avatar/change-avatar.component';
import {AuthInterceptor} from "./service/auth.interceptor";
import {ListCategoryComponent} from './content/category/list-category/list-category.component';
import {CreateCategoryComponent} from './content/category/create-category/create-category.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {UpdateCategoryComponent} from './content/category/update-category/update-category.component';
import {DeteleCategoryComponent} from './content/category/detele-category/detele-category.component';
import {PageCategoryComponent} from './content/category/page-category/page-category.component';
import {ListDiaryComponent} from './content/diary/list-diary/list-diary.component';
import {CreateDiaryComponent} from './content/diary/create-diary/create-diary.component';
import {MatSelectModule} from "@angular/material/select";
import { UpdateDiaryComponent } from './content/diary/update-diary/update-diary.component';
import { DiaryDetailComponent } from './content/diary/diary-detail/diary-detail.component';
import { DiaryUpdateComponent } from './content/diary/diary-update/diary-update.component';
import { DiaryDeleteComponent } from './content/diary/diary-delete/diary-delete.component';
import {DiaryGuardService} from "../diary-guard";
import { UserDetailComponent } from './user-detail/user-detail.component';
import {MatMenuModule} from "@angular/material/menu";
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserManagementComponent } from './content/user-management/user-management.component';
import {AdminGuardService} from "./app-guard";


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    UploadAvatarComponent,
    ChildInputComponent,
    DadInputComponent,
    ChildOutputComponent,
    DadOutputComponent,
    ChangeAvatarComponent,
    ListCategoryComponent,
    CreateCategoryComponent,
    UpdateCategoryComponent,
    DeteleCategoryComponent,
    PageCategoryComponent,
    ListDiaryComponent,
    CreateDiaryComponent,
    UpdateDiaryComponent,
    DiaryDetailComponent,
    DiaryUpdateComponent,
    DiaryDeleteComponent,
    UserDetailComponent,
    AdminPageComponent,
    UserManagementComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatTableModule,
    MatSelectModule,
    MatMenuModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    DiaryGuardService,
    AdminGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
