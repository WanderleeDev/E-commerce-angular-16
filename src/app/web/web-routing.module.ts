import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
//  pages
import { LayoutComponent } from "./layout/layout.component";
import { HomeComponent } from "./pages/home/home.component";



const routes : Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./pages/login/login.module').then(m => m.LoginModule),
        data: {
          preload: true
        }
      },
      {
        path: 'product/:category',
        loadChildren: () =>
          import('./pages/product/product.module').then(m => m.ProductModule),
        data: {
          preload: true
        }
      }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class webRoutingModule { }
