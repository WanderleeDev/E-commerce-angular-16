import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { webRoutingModule } from './web-routing.module';
import { NgOptimizedImage } from '@angular/common';

import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component'

//  shared
import { SharedModule } from '../shared/shared.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LogoComponent } from './components/sidebar/components/logo/logo.component';
import { SideBarLinksComponent } from './components/sidebar/components/side-bar-links/side-bar-links.component';
import { SmallDetailsComponent } from './components/sidebar/components/small-details/small-details.component';
import { BtnToggleCollapseComponent } from './components/sidebar/components/btn-toggle-collapse/btn-toggle-collapse.component';
import { HttpProductsService } from './services/HttpProducts/http-products.service';
import { BannerComponent } from './components/banner/banner.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    SidebarComponent,
    LogoComponent,
    SideBarLinksComponent,
    SmallDetailsComponent,
    BtnToggleCollapseComponent,
    BannerComponent,
    CategoriesComponent,
    FooterComponent,
  ],
  providers:[
    HttpProductsService
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgOptimizedImage,
    webRoutingModule,
    SharedModule
  ]
})
export class WebModule { }
