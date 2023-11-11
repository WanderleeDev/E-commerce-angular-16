import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//  services
import { CustomPreloadService } from './services/custom-preload.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./web/web.module').then(m => m.WebModule)
  },
  {
    path: 'cms',
    loadChildren: () =>
      import('./cms/cms.module').then(m => m.CmsModule)
  },
  {
    path: '**',
    loadChildren: () =>
      import('./not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

//  PreloadAllModules = pre cargar todas ls módulos luego de la pre cargar inicial
//  CustomPreloadService = pre cargar personalizada implementada en un servicio para pre cargar a demanda
//  QuickLink Strategy = biblioteca externa desarrollada  basada en API Intersection observer, cuando detecta un router link realiza la pre carga
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: CustomPreloadService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
