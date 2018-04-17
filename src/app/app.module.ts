// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CustomAngularMaterialModule } from './custom-angular-material.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    CustomAngularMaterialModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    MyWorkComponent,
    MySkillsComponent,
    ExperimentsComponent,
    PageNotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
