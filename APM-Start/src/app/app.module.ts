import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ProductListComponent } from './products/product-list.component';
import {ConvertToSpacesPipe} from './products/convert-to-spaces.pipe';
import {StarComponent} from './shared/star.component';
import {ProductService} from './products/product.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, ProductListComponent, ConvertToSpacesPipe, StarComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers: [ProductService]
})
export class AppModule { }
