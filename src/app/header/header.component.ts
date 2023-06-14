import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  grids = [
    { link: 'Grid1', url: 'grid1' },
    { link: 'Grid2', url: 'grid2' },
    { link: 'Grid3', url: 'grid3' },
    { link: 'Grid4', url: 'grid4' },
  ];

  constructor(public router: Router) {}
}
