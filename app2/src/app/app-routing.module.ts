import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { APP_BASE_HREF } from '@angular/common';
import { HomeComponent } from './HomeComponent/homeComponent.component';
import { AboutComponent } from './AboutComponent/aboutComponent.component';
const routes: Routes = [
  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'dashboard', component: HomeComponent , pathMatch:'full'},
  { path: 'about', component: AboutComponent },
  { path: 'app2', component: AboutComponent },
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppRoutingModule { }
