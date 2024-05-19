import { CanActivateFn, Router } from '@angular/router';


export const guardGuard: CanActivateFn = (route, state) => {

  const _Router = new Router()

  if (localStorage.getItem('token') !== null) {
    return true;

  }

  _Router.navigate(['login'])
  return false

};
