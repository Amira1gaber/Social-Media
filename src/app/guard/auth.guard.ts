import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const authGuard: CanActivateFn = (route, state) => {
 const userservice =  inject(UserService);
 if(userservice.logedUser)
 {
  return true;
 }
 else
 {
  const router = inject(Router);
  router.navigate(['login']);
  return false;
 }

};
