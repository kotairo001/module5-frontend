import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {TokenService} from "./app/service/token.service";


@Injectable()
export class DiaryGuardService implements CanActivate {

  constructor(private router: Router, private tokenService: TokenService) {

  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean | UrlTree {

    if (!this.tokenService.getToken()) {
      alert('You are not allowed to view this page. You are redirected to Login Page');

      this.router.navigate(["login"], {queryParams: {retUrl: route.url}});
      return false;

      //var urlTree = this.router.createUrlTree(['login']);
      //return urlTree;
    }

    return true;
  }
}
