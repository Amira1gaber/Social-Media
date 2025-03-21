import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';

export const notAuthGuard: CanActivateFn = (route, state) => {
   const userservice =  inject(UserService);
   if(userservice.logedUser)
   {
     const router = inject(Router);
     router.navigate(['login']);
    return false;
   }
   else
   {
    return true;
   }
};
