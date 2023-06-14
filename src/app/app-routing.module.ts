import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GridComponent } from './grid/grid.component';
import { Grid2Component } from './grid2/grid2.component';

const routes: Routes = [
  { path: '', redirectTo: '/grid1', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { text: 'Home' } },
  { path: 'grid1', component: GridComponent, data: { text: 'grid1' } },
  { path: 'grid2', component: Grid2Component, data: { text: 'grid2' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
