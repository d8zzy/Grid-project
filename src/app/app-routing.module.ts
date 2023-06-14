import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GridComponent } from './grid/grid.component';
import { Grid2Component } from './grid2/grid2.component';
import { Grid3Component } from './grid3/grid3.component';
import { Grid4Component } from './grid4/grid4.component';

const routes: Routes = [
  { path: '', redirectTo: '/grid1', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { text: 'Home' } },
  { path: 'grid1', component: GridComponent, data: { text: 'grid1' } },
  { path: 'grid2', component: Grid2Component, data: { text: 'grid2' } },
  { path: 'grid3', component: Grid3Component, data: { text: 'grid3' } },
  { path: 'grid4', component: Grid4Component, data: { text: 'grid4' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
