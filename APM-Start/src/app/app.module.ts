import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {ProductListComponent} from './products/product-list.component';
import {ConvertToSpacesPipe} from './products/convert-to-spaces.pipe';
import {StarComponent} from './shared/star.component';
import {ProductService} from './products/product.service';
import {HttpClientModule} from '@angular/common/http';
import {ProductDetailComponent} from './products/product-detail.component';
import {WelcomeComponent} from "./home/welcome.component";
import {RouterModule} from "@angular/router";
import {ProductDetailGuard} from "./products/product-detail.guard";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  bootstrap: [AppComponent],
  providers: [ProductService]
})
export class AppModule { }
