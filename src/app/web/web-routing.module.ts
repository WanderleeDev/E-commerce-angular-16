import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
//  pages
import { LayoutComponent } from "./layout/layout.component";
import { LoginComponent } from "./pages/login/login.component";
import { ProductComponent } from "./pages/product/product.component";
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
        component: LoginComponent
      },
      {
        path: 'product',
        component: ProductComponent
      }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class webRoutingModule { }
