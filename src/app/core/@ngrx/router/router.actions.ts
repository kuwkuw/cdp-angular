import { createAction, props } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

// export const loadRouters = createAction(
//   '[Router] Load Routers'
// );

// export const loadRoutersSuccess = createAction(
//   '[Router] Load Routers Success',
//   props<{ data: any }>()
// );

// export const loadRoutersFailure = createAction(
//   '[Router] Load Routers Failure',
//   props<{ error: any }>()
// );

// export const forward = createAction('[Router] FORWARD');
// export const back = createAction('[Router] BACK');
export const go = createAction(
  '[Router] GO',
  props<{ path: any[]; queryParams?: object; extras?: NavigationExtras }>()
);
