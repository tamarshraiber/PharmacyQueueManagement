import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import Swal from 'sweetalert2';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error) => {
      let errorMessage = 'error';
      if (error.status === 401) {
        errorMessage = 'You are not logged in, please log in again';
      } else if (error.status === 403) {
        errorMessage = 'You do not have permission to do this';
      } else if (error.status === 404) {
        errorMessage = 'Resource not found';
      } else if (error.status === 409) {
        errorMessage = 'conflict';
      } else if (error.status === 500) {
        errorMessage = 'Server error, try later';
      }

      console.error(`HTTP Error (${error.status}):`, error.message);

      Swal.fire({
        icon: 'error',
        title: 'error!',
        text: errorMessage,
        confirmButtonText: 'submit'
      });

      return throwError(() => new Error(errorMessage));
    })
  );
};
