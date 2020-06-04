import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
   { path: '', redirectTo: '/1', pathMatch: 'full' },
   { path: '**', component: ImageComponent },
 ];
@NgModule({
   declarations: [
      AppComponent,
      ImageComponent
   ],
   imports: [
      BrowserModule.withServerTransition({ appId: 'serverApp' }),
      RouterModule.forRoot(routes, {
         initialNavigation: 'enabled'
     }),
    HttpClientModule,
   ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
