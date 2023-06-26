import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {TokenService} from "./service/token.service";

@Injectable()
export class AdminGuardService implements CanActivate {
  constructor(private router: Router, private tokenService: TokenService) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean | UrlTree {
    if (this.tokenService.getToken() &&
      JSON.stringify(this.tokenService.getRole()) != JSON.stringify(["ADMIN"])) {
      alert('You are not allowed to view this page. You are redirected to Login Page');
      this.router.navigateByUrl("/");
      return true;
    }
    
    alert('You are not allowed to view this page. You are redirected to Login Page');
    this.router.navigate(["login"], {queryParams: {retUrl: route.url}});
    return false;
  }
}
