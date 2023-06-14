import {
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy, OnInit {
  @ViewChild('header') header: any;
  menu: boolean = false;
  prevScrollpos: number = window.pageYOffset;
  currentScrollPos: number = 0;

  grids = [
    { link: 'Grid1', url: 'grid1' },
    { link: 'Grid2', url: 'grid2' },
    { link: 'Grid3', url: 'grid3' },
    { link: 'Grid4', url: 'grid4' },
  ];
  url!: string;

  constructor(public router: Router, private renderer: Renderer2) {}
  private sub = this.router.events
    .pipe(
      filter((event) => event instanceof NavigationStart),
      map((event) => event as NavigationStart),
      filter((event) => event.url !== '/employees')
    )
    .subscribe((event) => {
      this.url = event.url;
    });

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.url = this.router.url;
  }

  @HostListener('window:scroll', ['$event']) scrollEl(ev: any) {
    this.currentScrollPos = ev.target.scrollingElement.scrollTop;
    this.prevScrollpos > this.currentScrollPos
      ? this.renderer.setStyle(
          this.header.nativeElement,
          'transform',
          'translateY(0%) translateY(-17px)'
        )
      : this.renderer.setStyle(
          this.header.nativeElement,
          'transform',
          'translateY(-100%) translateY(-100px)'
        );
    this.prevScrollpos = this.currentScrollPos;
  }
  toggleMenu() {
    this.menu = !this.menu;
  }
  close() {
    this.menu = !this.menu;
  }
}
