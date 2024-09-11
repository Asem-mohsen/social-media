import { CanActivateFn , Router } from '@angular/router';
import { inject , afterNextRender , PLATFORM_ID} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  const _AuthService: AuthService = inject(AuthService)

  const isAuthenticated = _AuthService.getToken();

  const _router: Router = inject(Router);

  const currentRoute: string = route.routeConfig?.path ?? '';

  const protectedRoutes = ['home', 'profile'];

  if (protectedRoutes.includes(currentRoute) && !isAuthenticated) {
    // User is not authenticated, redirect to login
    _router.navigate(['/login']);
    return false;
  }

  // For login or register routes, redirect if the user is already authenticated
  if ((currentRoute === 'login' || currentRoute === 'register') && isAuthenticated) {
    // User is authenticated, redirect to home
    _router.navigate(['/home']);
    return false;
  }

  return true; // Allow access to the routes
}

