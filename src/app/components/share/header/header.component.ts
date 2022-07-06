import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'nail-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  currentRoute: string

  constructor(
    private readonly router: Router
  ) {
    this.currentRoute = '';
  }

  ngOnInit(): void {
    this.routeSelected();
  }

  routeSelected() {
    this.router.events.pipe(filter(e => e instanceof NavigationStart)).subscribe(e => {
      this.currentRoute = (e as NavigationStart).url
    });
  }

}
