import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'system',
    loadChildren: () =>
      import('./system/system.module').then((x) => x.SystemModule),
  },
  { path: '**', component: NotFoundComponent }
];

// example from https://stackoverflow.com/
//   {path: 'Supplier',
//     loadChildren: () => import('../Supplier/CustomerApp.SupplierModule').then(x => x.CustomerAppSupplierModule)
// }

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
