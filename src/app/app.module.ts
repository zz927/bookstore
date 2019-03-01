import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MinePageComponent } from './pages/mine-page/mine-page.component';
import { FlashPageComponent } from './pages/flash-page/flash-page.component';
import { CommonNavComponent } from './components/common-nav/common-nav.component';
import { CommonHeaderComponent } from './components/common-header/common-header.component';
import { AdvertComponent } from './components/advert/advert.component';
import { SectionComponent } from './components/section/section.component';
import { SectionBookComponent } from './components/section-book/section-book.component';
import { BookListItemComponent } from './components/book-list-item/book-list-item.component';
import { NotFindComponent } from './pages/not-find/not-find.component';
import { CommonHeaderbComponent } from './components/common-headerb/common-headerb.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ListPageComponent,
    CartPageComponent,
    DetailPageComponent,
    LoginPageComponent,
    MinePageComponent,
    FlashPageComponent,
    CommonNavComponent,
    CommonHeaderComponent,
    AdvertComponent,
    SectionComponent,
    SectionBookComponent,
    BookListItemComponent,
    NotFindComponent,
    CommonHeaderbComponent,
    OrderPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
