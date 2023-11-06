import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { webRoutingModule } from './web-routing.module';

import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component'
import { LoginComponent } from './pages/login/login.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { ProductComponent } from './pages/product/product.component';

//  shared
import { SharedModule } from '../shared/shared.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LogoComponent } from './components/sidebar/components/logo/logo.component';
import { SideBarLinksComponent } from './components/sidebar/components/side-bar-links/side-bar-links.component';
import { SmallDetailsComponent } from './components/sidebar/components/small-details/small-details.component';
import { BtnToggleCollapseComponent } from './components/sidebar/components/btn-toggle-collapse/btn-toggle-collapse.component';



@NgModule({
  declarations: [
    CardProductComponent,
    HomeComponent,
    LayoutComponent,
    ProductComponent,
    LoginComponent,
    SidebarComponent,
    LogoComponent,
    SideBarLinksComponent,
    SmallDetailsComponent,
    BtnToggleCollapseComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    webRoutingModule,
    SharedModule
  ]
})
export class WebModule { }
