import { AboutComponent } from './components/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
// import { CryptoTableComponent } from './components/crypto-table/crypto-table.component';
import { CryptoTableModule } from './components/crypto-table/crypto-table.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'library',
    pathMatch: 'full'
  },
  {
    path: 'library',
    loadChildren: () => import(`./components/crypto-table/crypto-table.module`).then(m => m.CryptoTableModule)
  },
  {
    path: 'about',
    component: AboutComponent
  }
  // {
  //   path: 'orders',
  //   loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
