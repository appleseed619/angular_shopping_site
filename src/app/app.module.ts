import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CartDetailComponent } from './shop/cart-detail/cart-detail.component';
import { CheckoutComponent } from './shop/checkout/checkout.component';
import { ShopComponent } from './shop/shop.component';
import { ShopModule } from './shop/shop.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShopModule,
    RouterModule.forRoot([
      { path: 'shop', component: ShopComponent },
      { path: 'cart', component: CartDetailComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: '**', redirectTo: '/shop' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
