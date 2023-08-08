import { CanActivateFn, Router } from '@angular/router';
export const authGuard: CanActivateFn = (route, state) => {
  let token = sessionStorage.getItem('token');
  let router:Router =new Router(); 
  if(token){
    return true
  }else{
    router.navigate(['login']);
    return false
  }

};

