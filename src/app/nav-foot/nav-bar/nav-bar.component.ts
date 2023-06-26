import {Component, OnInit, ViewChild} from '@angular/core';
import {TokenService} from "../../service/token.service";
import {MatMenuModule, MatMenuTrigger} from "@angular/material/menu";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {UserDetailComponent} from "../../user-detail/user-detail.component";

@Component({
  // standalone: true,
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  // imports: [MatMenuModule, MatDialogModule]
})
export class NavBarComponent implements OnInit {
  name = '';
  avatar = '';
  // @ts-ignore
  id: number;
  checkLogin = false;
  checkAdmin = false;

  // @ts-ignore
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;

  constructor(private tokenService: TokenService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.id = this.tokenService.getId();
      this.name = this.tokenService.getName();
      this.avatar = this.tokenService.getAvatar();
      this.checkLogin = true;
      if (JSON.stringify(this.tokenService.getRole()) == JSON.stringify(["ADMIN"])) {
        this.checkAdmin = true
      }
    }
  }

  logOut() {
    sessionStorage.clear();
    window.location.reload();
  }

  openDialog() {
    const dialogRef = this.dialog.open(UserDetailComponent, {restoreFocus: false});
    dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
  }


}
