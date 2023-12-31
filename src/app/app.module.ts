import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GridComponent } from './grid/grid.component';
import { IgxGridModule } from 'igniteui-angular';
import { HeaderComponent } from './header/header.component';
import { Grid2Component } from './grid2/grid2.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Grid3Component } from './grid3/grid3.component';
import { Grid4Component } from './grid4/grid4.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GridComponent,
    HeaderComponent,
    Grid2Component,
    Grid3Component,
    Grid4Component,
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxGridModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
