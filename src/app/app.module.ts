import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchserviceService } from './searchservice.service';
import { HttpClientModule } from '@angular/common/http';
import { AddwishlistComponent } from './addwishlist/addwishlist.component';
import { ShowNavwishlistComponent } from './show-navwishlist/show-navwishlist.component';
import { UpdateComponent } from './update/update.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PresearchComponent } from './presearch/presearch.component';
const appRoutes:Routes=[
  // { path:'search',component: SearchComponent},
  { path:'show',component:ShowNavwishlistComponent},
  // { path:'red',redirectTo:'/show',pathMatch:'full',component:ShowNavwishlistComponent},
  { path:'searchtrack/:trackname',component:SearchComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AddwishlistComponent,
    ShowNavwishlistComponent,
    UpdateComponent,
    NavbarComponent,
    PresearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SearchserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
