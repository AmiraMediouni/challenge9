import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { ArticlesDetailsComponent } from './articles-details/articles-details.component';
import { ErrorsComponent } from './errors/errors.component';
import { SallesListComponent } from './salles-list/salles-list.component';
import { SalleComponent } from './salle/salle.component';
import { SalleServiceService } from './salle-service.service';

const appRoutes: Routes = [
  {path:'',redirectTo:'/articles',pathMatch:'full'},
  {path:'articles', component:ArticlesComponent},
  {path:'articles-details',component:ArticlesDetailsComponent},
  {path:'salles',component:SallesListComponent},
  {path:'salles/:id',component:SalleComponent},
  {path:'**',component:ErrorsComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ArticlesDetailsComponent,
    ErrorsComponent,
    SallesListComponent,
    SalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [SalleServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
